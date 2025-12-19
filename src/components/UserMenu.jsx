import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../services/supabaseClient';
import './UserMenu.css';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [totalUses, setTotalUses] = useState(0);
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || isAdmin) return;
    
    supabase
      .from('module_access')
      .select('uses_remaining')
      .eq('user_id', user.id)
      .then(({ data }) => {
        const total = data?.reduce((sum, item) => sum + (item.uses_remaining || 0), 0) || 0;
        setTotalUses(total);
      });
  }, [user, isAdmin]);

  if (!user) {
    return (
      <div className="auth-buttons">
        <a href="/login" className="btn-login">Sign In</a>
        <a href="/signup" className="btn-signup">Sign Up</a>
      </div>
    );
  }

  return (
    <div className="user-menu">
      <button className="user-menu-trigger" onClick={() => setIsOpen(!isOpen)}>
        <div className="user-avatar">{user.email?.charAt(0).toUpperCase()}</div>
        <span className="user-name">{user.email}</span>
        <svg className={`chevron ${isOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="user-dropdown">
          <div className="dropdown-header">
            <p className="dropdown-email">{user.email}</p>
            <p className="dropdown-uses">{isAdmin ? 'Unlimited' : `${totalUses} total uses remaining`}</p>
          </div>
          
          <div className="dropdown-divider" />
          
          <button className="dropdown-item" onClick={() => { navigate('/my-access'); setIsOpen(false); }}>
            📊 My Access
          </button>
          <button className="dropdown-item" onClick={() => { navigate('/pricing'); setIsOpen(false); }}>
            💳 Buy More
          </button>
          {isAdmin && (
            <button className="dropdown-item" onClick={() => { navigate('/admin'); setIsOpen(false); }}>
              🔐 Admin Panel
            </button>
          )}
          <div className="dropdown-divider" />
          <button className="dropdown-item logout" onClick={() => { setIsOpen(false); signOut(); }}>
            🚪 Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
