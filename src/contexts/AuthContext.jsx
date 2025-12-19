import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      console.log('⚠️ Supabase not configured - skipping auth initialization');
      setLoading(false);
      return;
    }

    let mounted = true;
    let subscription = null;
    const adminCheckInProgressRef = { current: false };

    const checkAdmin = async (userId) => {
      if (!mounted || !supabase || !userId) {
        console.log('⚠️ Skipping admin check - not mounted, supabase not configured, or no userId');
        if (mounted) {
          setIsAdmin(false);
          setLoading(false);
        }
        return;
      }

      // Prevent concurrent calls - wait if one is in progress
      if (adminCheckInProgressRef.current) {
        console.log('⏭️ Admin check already in progress, waiting for it to complete...');
        // Wait up to 2 seconds for the check to complete
        let waited = 0;
        while (adminCheckInProgressRef.current && waited < 2000) {
          await new Promise(resolve => setTimeout(resolve, 100));
          waited += 100;
        }
        if (adminCheckInProgressRef.current) {
          console.log('⏭️ Admin check timed out, proceeding with new check');
        } else {
          console.log('⏭️ Admin check completed, skipping duplicate call');
          return;
        }
      }

      adminCheckInProgressRef.current = true;

      try {
        console.log('🔍 Starting admin check for user:', userId);
        
        const { data, error } = await supabase
          .from('user_profiles')
          .select('is_admin')
          .eq('id', userId)
          .single();
        
        console.log('📊 Admin check response:', { data, error });
        
        if (!mounted) {
          adminCheckInProgressRef.current = false;
          return;
        }
        
        if (error) {
          console.error('❌ Admin check error:', error);
          setIsAdmin(false);
        } else {
          const adminStatus = data?.is_admin || false;
          console.log('✅ Setting admin status to:', adminStatus);
          setIsAdmin(adminStatus);
        }
      } catch (err) {
        console.error('💥 Admin check exception:', err);
        if (mounted) {
          setIsAdmin(false);
        }
      } finally {
        adminCheckInProgressRef.current = false;
        if (mounted) {
          console.log('🏁 Admin check complete, setting loading to false');
          setLoading(false);
        }
      }
    };

    const initialize = async () => {
      // First, check for existing session immediately (synchronously)
      const { data: { session: initialSession } } = await supabase.auth.getSession();
      
      if (!mounted) return;
      
      console.log('🔐 Initial session check:', initialSession?.user?.email || 'No session');
      
      if (initialSession?.user) {
        setUser(initialSession.user);
        await checkAdmin(initialSession.user.id);
      } else {
        setUser(null);
        setIsAdmin(false);
        setLoading(false);
      }

      // Then set up the listener for future auth state changes
      const { data: authListener } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          if (!mounted) return;
          
          console.log('🔄 Auth state changed:', event);
          
          // Skip INITIAL_SESSION - we already handled it with getSession() above
          if (event === 'INITIAL_SESSION') {
            console.log('⏭️ Skipping INITIAL_SESSION - already handled via getSession()');
            return;
          }
          
          if (session?.user) {
            setUser(session.user);
            await checkAdmin(session.user.id);
          } else {
            setUser(null);
            setIsAdmin(false);
            setLoading(false);
          }
        }
      );
      
      subscription = authListener.subscription;
    };

    initialize();

    return () => {
      mounted = false;
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  const signIn = async (email, password) => {
    if (!supabase) {
      return { data: null, error: { message: 'Supabase not configured' } };
    }
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    return { data, error };
  };

  const signUp = async (email, password, fullName) => {
    if (!supabase) {
      return { data: null, error: { message: 'Supabase not configured' } };
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } }
    });
    return { data, error };
  };

  const signOut = async () => {
    // Clear state first
    setUser(null);
    setIsAdmin(false);
    
    // Then sign out from Supabase
    if (supabase) {
      try {
        await supabase.auth.signOut();
      } catch (err) {
        console.error('Error signing out:', err);
      }
    }
    
    // Clear all Supabase-related localStorage items
    // Supabase stores session data with keys like 'sb-<project-ref>-auth-token'
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    if (supabaseUrl) {
      const projectRef = supabaseUrl.split('//')[1]?.split('.')[0];
      if (projectRef) {
        // Clear all localStorage keys that start with 'sb-' followed by project ref
        Object.keys(localStorage).forEach(key => {
          if (key.startsWith('sb-') && key.includes(projectRef)) {
            localStorage.removeItem(key);
          }
        });
      }
    }
    
    // Clear all localStorage items starting with 'sb-' (fallback)
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('sb-')) {
        localStorage.removeItem(key);
      }
    });
    
    // Clear sessionStorage
    sessionStorage.clear();
    
    // Force navigation
    window.location.replace('/');
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
