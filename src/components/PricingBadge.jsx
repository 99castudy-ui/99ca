import React from 'react';
import { useLocation } from 'react-router-dom';
import './PricingBadge.css';

const PricingBadge = () => {
  const location = useLocation();
  const path = location.pathname;

  // ONLY show on landing page (where subject cards/stickers are displayed)
  // Hide when user clicks into any app
  if (path !== '/') {
    return null;
  }

  // Use default theme color for landing page
  const theme = { color: '#6366f1', name: 'default' }; // Indigo/Purple - works well on dark background

  // Debug: Log to verify badge is rendering (remove in production)
  // console.log('PricingBadge rendering for path:', path, 'Theme:', theme.name);

  return (
    <div 
      className={`pricing-badge pricing-badge-${theme.name}`} 
      style={{ 
        '--theme-color': theme.color
      }}
    >
      <div className="pricing-ribbon">
        <span className="pricing-text">Rs. 750</span>
      </div>
    </div>
  );
};

export default PricingBadge;

