import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../services/supabaseClient';
import './ProtectedRoute.css';

const ProtectedRoute = ({ children, moduleCode }) => {
  const { user, loading, checkAccess, getRemainingUses, getModuleId, consumeAccess } = useAuth();
  const [accessStatus, setAccessStatus] = useState('checking');
  const [remainingUses, setRemainingUses] = useState(0);
  const [hasConsumed, setHasConsumed] = useState(false);
  const location = useLocation();

  // If Supabase not configured, allow access for development
  if (!supabase) {
    return children;
  }

  // CRITICAL: If not loading and no user, redirect immediately (before any useEffect)
  if (!loading && !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  useEffect(() => {
    // Don't run if no user (should be caught by render check above)
    if (!user || loading) {
      return;
    }

    // User exists and not loading, verify access
    const verifyAccess = async () => {
      const hasAccess = checkAccess(moduleCode);
      const uses = getRemainingUses(moduleCode);
      setRemainingUses(uses);

      if (!hasAccess || uses <= 0) {
        setAccessStatus('no_access');
        return;
      }

      // Only consume once per mount
      if (!hasConsumed) {
        const moduleId = getModuleId(moduleCode);
        if (moduleId) {
          const result = await consumeAccess(moduleId);
          setHasConsumed(true);
          
          if (result.success) {
            setRemainingUses(result.remaining_uses);
            setAccessStatus('granted');
          } else {
            setAccessStatus('no_access');
          }
        } else {
          setAccessStatus('no_access');
        }
      } else {
        setAccessStatus('granted');
      }
    };

    verifyAccess();
  }, [user, loading, moduleCode, checkAccess, getRemainingUses, getModuleId, consumeAccess, hasConsumed]);

  // Show loading while auth is initializing (but only if we might have a user)
  if (loading) {
    return (
      <div className="protected-loading">
        <div className="protected-spinner"></div>
        <p>Verifying access...</p>
      </div>
    );
  }

  // Double-check: if loading finished and still no user, redirect
  if (!loading && !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Show loading while checking access (only if user exists)
  if (accessStatus === 'checking' && user) {
    return (
      <div className="protected-loading">
        <div className="protected-spinner"></div>
        <p>Verifying access...</p>
      </div>
    );
  }

  if (accessStatus === 'no_auth') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (accessStatus === 'no_access') {
    return (
      <div className="access-denied">
        <div className="access-denied-card">
          <h2>🔒 Access Required</h2>
          <p>You don't have access to this module or your uses are exhausted.</p>
          <div className="access-info-box">
            <span>Remaining uses:</span>
            <strong>{remainingUses}</strong>
          </div>
          <div className="access-actions">
            <button onClick={() => window.location.href = '/pricing'} className="btn-primary">
              Purchase Access
            </button>
            <button onClick={() => window.location.href = '/'} className="btn-secondary">
              Go Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="access-badge">
        ✓ {remainingUses} uses remaining
      </div>
      {children}
    </>
  );
};

export default ProtectedRoute;

