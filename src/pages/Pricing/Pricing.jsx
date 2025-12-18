import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../services/supabaseClient';
import './Pricing.css';

const Pricing = () => {
  const { user, moduleAccess, refreshAccess } = useAuth();
  const navigate = useNavigate();
  const [modules, setModules] = useState([]);
  const [selectedModules, setSelectedModules] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch modules
  useEffect(() => {
    const fetchModules = async () => {
      if (!supabase) {
        setLoading(false);
        return;
      }
      
      try {
        const { data, error } = await supabase
          .from('modules')
          .select('*')
          .eq('is_active', true)
          .order('id');
        
        if (error) {
          console.error('Error fetching modules:', error);
          // If table doesn't exist, set empty array
          setModules([]);
        } else {
          setModules(data || []);
        }
      } catch (err) {
        console.error('Error fetching modules:', err);
        setModules([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchModules();
  }, []);

  // Get current access for a module
  const getModuleAccess = (moduleCode) => {
    return moduleAccess.find(m => m.module_code === moduleCode);
  };

  // Toggle module selection
  const toggleModule = (moduleId) => {
    setSelectedModules(prev => 
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  // Calculate total
  const totalAmount = selectedModules.reduce((sum, moduleId) => {
    const module = modules.find(m => m.id === moduleId);
    return sum + (module?.price_inr || 0);
  }, 0);

  // Handle checkout (placeholder - will integrate with Razorpay)
  const handleCheckout = () => {
    if (!user) {
      navigate('/login', { state: { from: { pathname: '/pricing' } } });
      return;
    }
    
    if (selectedModules.length === 0) {
      alert('Please select at least one module');
      return;
    }
    
    // TODO: Integrate Razorpay here
    alert(`Checkout for ₹${totalAmount} - Razorpay integration coming soon!`);
  };

  // Select all modules
  const selectAll = () => {
    setSelectedModules(modules.map(m => m.id));
  };

  // Clear selection
  const clearSelection = () => {
    setSelectedModules([]);
  };

  if (loading) {
    return (
      <div className="pricing-loading">
        <div className="spinner"></div>
        <p>Loading modules...</p>
      </div>
    );
  }

  // Show message if no modules found
  if (!loading && modules.length === 0) {
    return (
      <div className="pricing-container">
        <header className="pricing-header">
          <button onClick={() => navigate('/')} className="back-btn">← Back</button>
          <h1>CA Final Practice Modules</h1>
        </header>
        <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#94a3b8' }}>
          <p>No modules available yet. Please set up the modules table in Supabase.</p>
          <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
            The pricing page requires a <code>modules</code> table with columns: id, module_name, module_code, price_inr, uses_per_purchase, is_active
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pricing-container">
      <header className="pricing-header">
        <button onClick={() => navigate('/')} className="back-btn">← Back</button>
        <h1>CA Final Practice Modules</h1>
        <p>Get unlimited practice questions with detailed explanations</p>
      </header>

      {/* User Status */}
      {user ? (
        <div className="user-status">
          <span>👤 Logged in as {user.email}</span>
        </div>
      ) : (
        <div className="login-prompt">
          <p>Already have an account? <button onClick={() => navigate('/login')}>Sign In</button> to see your access status</p>
        </div>
      )}

      {/* Bundle Offer */}
      <div className="bundle-offer">
        <div className="bundle-card">
          <div className="bundle-badge">BEST VALUE</div>
          <h3>Complete Bundle</h3>
          <p>All 6 modules at 20% discount</p>
          <div className="bundle-price">
            <span className="original">₹{modules.reduce((s, m) => s + (m.price_inr || 0), 0)}</span>
            <span className="discounted">₹{Math.round(modules.reduce((s, m) => s + (m.price_inr || 0), 0) * 0.8)}</span>
          </div>
          <button 
            className="bundle-btn"
            onClick={selectAll}
          >
            Select All Modules
          </button>
        </div>
      </div>

      {/* Module Grid */}
      <div className="modules-section">
        <div className="section-header">
          <h2>Individual Modules</h2>
          <span className="per-module">₹750 each • 10 uses per purchase</span>
        </div>
        
        <div className="modules-grid">
          {modules.map(module => {
            const access = getModuleAccess(module.module_code);
            const isSelected = selectedModules.includes(module.id);
            
            return (
              <div 
                key={module.id} 
                className={`module-card ${isSelected ? 'selected' : ''}`}
                onClick={() => toggleModule(module.id)}
              >
                <div className="module-header">
                  <span className="module-code">{module.module_code}</span>
                  {access?.remaining_uses > 0 && (
                    <span className="access-status">✓ {access.remaining_uses} uses</span>
                  )}
                </div>
                
                <h3>{module.module_name}</h3>
                
                <div className="module-features">
                  <span>✓ {module.uses_per_purchase} practice sessions</span>
                  <span>✓ MCQ + Long Answer questions</span>
                  <span>✓ Detailed explanations</span>
                  <span>✓ Progress tracking</span>
                </div>
                
                <div className="module-footer">
                  <span className="module-price">₹{module.price_inr}</span>
                  <div className={`select-indicator ${isSelected ? 'checked' : ''}`}>
                    {isSelected ? '✓' : '+'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Checkout Bar */}
      {selectedModules.length > 0 && (
        <div className="checkout-bar">
          <div className="checkout-info">
            <span className="selected-count">{selectedModules.length} module(s) selected</span>
            <span className="total-amount">Total: ₹{totalAmount}</span>
          </div>
          <div className="checkout-actions">
            <button className="clear-btn" onClick={clearSelection}>Clear</button>
            <button className="checkout-btn" onClick={handleCheckout}>
              {user ? 'Proceed to Pay' : 'Login & Pay'}
            </button>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>What do I get with each purchase?</h4>
            <p>10 practice sessions with full access to MCQ and Long Answer questions, detailed explanations, and progress tracking.</p>
          </div>
          <div className="faq-item">
            <h4>Can I buy more uses later?</h4>
            <p>Yes! Uses are additive. If you buy the same module again, your uses will be added to existing balance.</p>
          </div>
          <div className="faq-item">
            <h4>Is there a refund policy?</h4>
            <p>We offer refunds within 24 hours of purchase if you haven't used any sessions.</p>
          </div>
          <div className="faq-item">
            <h4>How long is access valid?</h4>
            <p>Your purchased uses never expire. Use them at your own pace.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

