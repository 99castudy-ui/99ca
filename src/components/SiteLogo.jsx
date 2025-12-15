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
          {/* Pen Nib Icon - representing CA authenticity */}
          {/* Main nib body */}
          <path 
            d="M24 6 L30 12 L28 20 L20 20 L18 12 Z" 
            fill={`url(#${gradientId})`}
            opacity="0.9"
          />
          {/* Nib split/center line */}
          <path 
            d="M24 6 L24 20" 
            stroke={`url(#${gradientId})`}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Nib tip */}
          <path 
            d="M20 20 L24 24 L28 20" 
            fill={`url(#${gradientId})`}
            opacity="0.9"
          />
          {/* Pen holder/body */}
          <rect 
            x="22" 
            y="24" 
            width="4" 
            height="18" 
            rx="2" 
            fill={`url(#${gradientId})`}
            opacity="0.7"
          />
          {/* Decorative ring */}
          <circle 
            cx="24" 
            cy="28" 
            r="1.5" 
            fill={`url(#${gradientId})`}
            opacity="0.5"
          />
        </svg>
      </div>
      {showText && (
        <span className="logo-text">
          99ca.tech
        </span>
      )}
    </Link>
  );
}

export default SiteLogo;

