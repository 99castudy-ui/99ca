import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../services/supabaseClient';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [moduleAccess, setModuleAccess] = useState([]);

  // Fetch user's module access
  const fetchModuleAccess = useCallback(async (userId) => {
    if (!supabase) return;
    try {
      const { data, error } = await supabase.rpc('get_user_access', {
        p_user_id: userId
      });
      if (error) throw error;
      setModuleAccess(data || []);
    } catch (error) {
      console.error('Error fetching module access:', error);
      setModuleAccess([]);
    }
  }, []);

  // Fetch user profile
  const fetchUserProfile = useCallback(async (userId) => {
    if (!supabase) return;
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single();
      if (error) throw error;
      setUserProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  }, []);

  // Initialize auth state
  useEffect(() => {
    // If Supabase not configured, skip auth
    if (!supabase) {
      console.warn('Supabase not configured - running without auth');
      setLoading(false);
      return;
    }

    const initAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
        
        if (session?.user) {
          await Promise.all([
            fetchUserProfile(session.user.id),
            fetchModuleAccess(session.user.id)
          ]);
        }
      } catch (error) {
        console.error('Auth init error:', error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        
        if (session?.user) {
          await Promise.all([
            fetchUserProfile(session.user.id),
            fetchModuleAccess(session.user.id)
          ]);
        } else {
          setUserProfile(null);
          setModuleAccess([]);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [fetchModuleAccess, fetchUserProfile]);

  // Sign up with email and password
  const signUp = async (email, password, fullName) => {
    if (!supabase) {
      return { data: null, error: { message: 'Auth not configured. Add Supabase credentials to .env file.' } };
    }
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName }
        }
      });
      return { data, error };
    } catch (error) {
      return { data: null, error };
    }
  };

  // Sign in with email and password
  const signIn = async (email, password) => {
    if (!supabase) {
      return { data: null, error: { message: 'Auth not configured. Add Supabase credentials to .env file.' } };
    }
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      return { data, error };
    } catch (error) {
      return { data: null, error };
    }
  };

  // Sign out
  const signOut = async () => {
    // Clear state immediately
    setUser(null);
    setUserProfile(null);
    setModuleAccess([]);
    
    try {
      if (supabase) {
        // Sign out from Supabase
        await supabase.auth.signOut();
      }
    } catch (error) {
      console.error('Sign out error:', error);
    }
    
    // Clear all Supabase-related localStorage
    try {
      if (typeof window !== 'undefined') {
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
          if (key.includes('supabase') || key.startsWith('sb-')) {
            localStorage.removeItem(key);
          }
        });
        sessionStorage.clear();
      }
    } catch (e) {
      console.error('Error clearing storage:', e);
    }
    
    // Force reload
    window.location.href = '/';
  };

  // Check if user has access to a module
  const checkAccess = useCallback((moduleCode) => {
    const module = moduleAccess.find(m => m.module_code === moduleCode);
    return module?.has_access ?? false;
  }, [moduleAccess]);

  // Get remaining uses for a module
  const getRemainingUses = useCallback((moduleCode) => {
    const module = moduleAccess.find(m => m.module_code === moduleCode);
    return module?.remaining_uses ?? 0;
  }, [moduleAccess]);

  // Get module ID by code
  const getModuleId = useCallback((moduleCode) => {
    const module = moduleAccess.find(m => m.module_code === moduleCode);
    return module?.module_id ?? null;
  }, [moduleAccess]);

  // Consume one access use
  const consumeAccess = async (moduleId) => {
    if (!supabase) return { success: false, message: 'Auth not configured' };
    if (!user) return { success: false, message: 'Not logged in' };
    
    try {
      const { data, error } = await supabase.rpc('consume_module_use', {
        p_user_id: user.id,
        p_module_id: moduleId
      });
      
      if (error) throw error;
      
      const result = data?.[0] ?? { success: false, message: 'Unknown error' };
      
      if (result.success) {
        await fetchModuleAccess(user.id);
      }
      
      return result;
    } catch (error) {
      console.error('Consume access error:', error);
      return { success: false, message: error.message };
    }
  };

  // Refresh module access
  const refreshAccess = useCallback(() => {
    if (user) {
      return fetchModuleAccess(user.id);
    }
  }, [user, fetchModuleAccess]);

  const value = {
    user,
    userProfile,
    loading,
    moduleAccess,
    signUp,
    signIn,
    signOut,
    checkAccess,
    getRemainingUses,
    getModuleId,
    consumeAccess,
    refreshAccess,
    isAdmin: userProfile?.is_admin ?? false
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

