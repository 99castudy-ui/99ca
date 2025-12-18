import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './UserMenu.css';

const UserMenu = () => {
  const { user, userProfile, signOut, moduleAccess, isAdmin } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async (e) => {
    e?.preventDefault?.();
    setIsOpen(false); // Close menu first
    await signOut();
  };

  if (!user) {
    return (
      <div className="auth-buttons">
        <Link to="/login" className="btn-login">Sign In</Link>
        <Link to="/signup" className="btn-signup">Sign Up</Link>
      </div>
    );
  }

  const totalUses = moduleAccess.reduce((sum, m) => sum + m.remaining_uses, 0);

  return (
    <div className="user-menu" ref={menuRef}>
      <button className="user-menu-trigger" onClick={() => setIsOpen(!isOpen)}>
        <div className="user-avatar">
          {(userProfile?.full_name || user.email)?.[0]?.toUpperCase() || 'U'}
        </div>
        <span className="user-name">{userProfile?.full_name || user.email}</span>
        <svg className={`chevron ${isOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="user-dropdown">
          <div className="dropdown-header">
            <p className="dropdown-email">{user.email}</p>
            <p className="dropdown-uses">{totalUses} total uses remaining</p>
          </div>
          
          <div className="dropdown-divider" />
          
          <Link to="/my-access" className="dropdown-item" onClick={() => setIsOpen(false)}>
            📊 My Access
          </Link>
          <Link to="/pricing" className="dropdown-item" onClick={() => setIsOpen(false)}>
            💳 Buy More
          </Link>
          
          {isAdmin && (
            <>
              <div className="dropdown-divider" />
              <Link to="/admin" className="dropdown-item" onClick={() => setIsOpen(false)}>
                🔐 Admin Panel
              </Link>
            </>
          )}
          
          <div className="dropdown-divider" />
          
          <button className="dropdown-item logout" onClick={handleSignOut}>
            🚪 Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

