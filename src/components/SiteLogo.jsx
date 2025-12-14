import React, { useId } from 'react';
import { Link } from 'react-router-dom';
import './SiteLogo.css';

function SiteLogo({ showText = true, className = '' }) {
  const gradientId = useId();
  
  return (
    <Link to="/" className={`site-logo ${className}`}>
      <div className="logo-icon-wrapper">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="40" height="40" rx="10" fill={`url(#${gradientId})`} opacity="0.2" />
          <rect x="8" y="8" width="32" height="32" rx="8" stroke={`url(#${gradientId})`} strokeWidth="2.5" fill="none" />
          <text x="24" y="30" fontSize="20" fontWeight="700" fill={`url(#${gradientId})`} textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">99</text>
        </svg>
      </div>
      {showText && (
        <span className="logo-text">
          99ca
        </span>
      )}
    </Link>
  );
}

export default SiteLogo;

