import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../services/supabaseClient';
import './ProtectedRoute.css';

const ProtectedRoute = ({ children, moduleId }) => {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [checking, setChecking] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const [remainingUses, setRemainingUses] = useState(0);

  useEffect(() => {
    const check = async () => {
      console.log('🛡️ ProtectedRoute check starting:', { 
        loading, 
        user: !!user, 
        userEmail: user?.email,
        isAdmin, 
        moduleId 
      });

      if (loading || !user) {
        console.log('⏸️ Waiting for auth...', { loading, hasUser: !!user });
        setChecking(false);
        return;
      }

      if (isAdmin) {
        console.log('👑 Admin detected - granting access');
        setHasAccess(true);
        setRemainingUses(999);
        setChecking(false);
        return;
      }

      if (moduleId) {
        console.log('🔑 Checking module access for moduleId:', moduleId, 'user:', user.id);
        try {
          const { data, error } = await supabase
            .from('module_access')
            .select('uses_remaining, access_type')
            .eq('user_id', user.id)
            .eq('module_id', moduleId)
            .single();

          console.log('📋 Module access response:', { data, error });

          if (data) {
            setRemainingUses(data.uses_remaining || 0);
            setHasAccess(data.access_type === 'unlimited' || data.uses_remaining > 0);
            console.log('✅ Access granted:', { uses: data.uses_remaining, type: data.access_type });
          } else {
            console.log('❌ No access data found');
            setHasAccess(false);
          }
        } catch (err) {
          console.error('💥 Module access check error:', err);
          setHasAccess(false);
        }
      } else {
        console.log('✅ No module check needed (no moduleId)');
        setHasAccess(true);
      }
      
      console.log('🏁 Check complete, hasAccess:', hasAccess);
      setChecking(false);
    };

    check();
  }, [user, isAdmin, loading, moduleId]);

  // If Supabase not configured, allow access
  if (!supabase) {
    return children;
  }

  if (loading || checking) {
    return (
      <div className="protected-loading">
        <div className="protected-spinner"></div>
        <p>Verifying access...</p>
      </div>
    );
  }

  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  if (!hasAccess) {
    return (
      <div className="access-denied">
        <div className="access-denied-card">
          <h2>🔒 Access Required</h2>
          <p>You don't have access to this module.</p>
          <div className="access-info-box">
            <span>Remaining uses:</span>
            <strong>{remainingUses}</strong>
          </div>
          <div className="access-actions">
            <button className="btn-primary" onClick={() => navigate('/pricing')}>
              Purchase Access
            </button>
            <button className="btn-secondary" onClick={() => navigate('/')}>
              Go Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
