import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../services/supabaseClient';
import './AdminPanel.css';

const AdminPanel = () => {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  
  const [modules, setModules] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedModule, setSelectedModule] = useState('');
  const [usesToGrant, setUsesToGrant] = useState(1);
  const [searchEmail, setSearchEmail] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [accessLogs, setAccessLogs] = useState([]);

  // Redirect non-admins
  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/');
    }
  }, [user, isAdmin, loading, navigate]);

  // Fetch modules
  useEffect(() => {
    const fetchModules = async () => {
      if (!supabase) return;
      const { data, error } = await supabase
        .from('modules')
        .select('*')
        .eq('is_active', true)
        .order('id');
      
      if (!error && data) {
        setModules(data);
      }
    };
    fetchModules();
  }, []);

  // Fetch recent access logs
  useEffect(() => {
    const fetchLogs = async () => {
      if (!supabase) return;
      const { data, error } = await supabase
        .from('access_logs')
        .select(`
          *,
          user_profiles(email, full_name),
          modules(module_name, module_code)
        `)
        .order('created_at', { ascending: false })
        .limit(20);
      
      if (!error && data) {
        setAccessLogs(data);
      }
    };
    fetchLogs();
  }, [message]); // Refresh after granting access

  // Search users by email
  const handleSearchUser = async () => {
    if (!searchEmail.trim() || !supabase) return;
    
    const { data, error } = await supabase
      .from('user_profiles')
      .select('id, email, full_name')
      .ilike('email', `%${searchEmail}%`)
      .limit(10);
    
    if (!error && data) {
      setUsers(data);
      if (data.length === 0) {
        setMessage({ type: 'warning', text: 'No users found with that email' });
      }
    }
  };

  // Grant access to user
  const handleGrantAccess = async (e) => {
    e.preventDefault();
    
    if (!selectedUser || !selectedModule || !supabase) {
      setMessage({ type: 'error', text: 'Please select user and module' });
      return;
    }
    
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });
    
    try {
      const { data, error } = await supabase.rpc('add_module_access', {
        p_user_id: selectedUser,
        p_module_id: parseInt(selectedModule),
        p_uses: usesToGrant,
        p_source: 'admin_free'
      });
      
      if (error) throw error;
      
      const result = data?.[0];
      if (result?.success) {
        setMessage({ 
          type: 'success', 
          text: `✅ Granted ${usesToGrant} uses. User now has ${result.new_total} total uses.` 
        });
        // Reset form
        setSelectedUser('');
        setSelectedModule('');
        setUsesToGrant(1);
        setUsers([]);
        setSearchEmail('');
      } else {
        throw new Error(result?.message || 'Failed to grant access');
      }
    } catch (error) {
      setMessage({ type: 'error', text: `❌ Error: ${error.message}` });
    } finally {
      setIsSubmitting(false);
    }
  };

  // View user's current access
  const [userAccess, setUserAccess] = useState([]);
  const viewUserAccess = async (userId) => {
    if (!supabase) return;
    const { data, error } = await supabase.rpc('get_user_access', {
      p_user_id: userId
    });
    if (!error && data) {
      setUserAccess(data);
    }
  };

  if (loading) {
    return <div className="admin-loading">Loading...</div>;
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>🔐 Admin Panel</h1>
        <button onClick={() => navigate('/')} className="admin-back-btn">← Back to Home</button>
      </header>

      <div className="admin-grid">
        {/* Grant Access Card */}
        <div className="admin-card">
          <h2>Grant Free Access</h2>
          
          {message.text && (
            <div className={`admin-message ${message.type}`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleGrantAccess}>
            {/* Search User */}
            <div className="form-group">
              <label>Search User by Email</label>
              <div className="search-input-group">
                <input
                  type="text"
                  value={searchEmail}
                  onChange={(e) => setSearchEmail(e.target.value)}
                  placeholder="Enter email..."
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleSearchUser())}
                />
                <button type="button" onClick={handleSearchUser} className="search-btn">
                  Search
                </button>
              </div>
            </div>

            {/* User Results */}
            {users.length > 0 && (
              <div className="form-group">
                <label>Select User</label>
                <div className="user-list">
                  {users.map(u => (
                    <label key={u.id} className={`user-option ${selectedUser === u.id ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="user"
                        value={u.id}
                        checked={selectedUser === u.id}
                        onChange={(e) => {
                          setSelectedUser(e.target.value);
                          viewUserAccess(e.target.value);
                        }}
                      />
                      <div className="user-info">
                        <span className="user-email">{u.email}</span>
                        <span className="user-name">{u.full_name || 'No name'}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* User's Current Access */}
            {selectedUser && userAccess.length > 0 && (
              <div className="user-access-info">
                <h4>Current Access:</h4>
                <div className="access-badges">
                  {userAccess.map(m => (
                    <span key={m.module_id} className={`access-badge ${m.has_access ? 'active' : 'inactive'}`}>
                      {m.module_code}: {m.remaining_uses} uses
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Select Module */}
            <div className="form-group">
              <label>Select Module</label>
              <select
                value={selectedModule}
                onChange={(e) => setSelectedModule(e.target.value)}
                required
              >
                <option value="">-- Select Module --</option>
                {modules.map(m => (
                  <option key={m.id} value={m.id}>
                    {m.module_name} ({m.module_code}) - ₹{m.price_inr}
                  </option>
                ))}
              </select>
            </div>

            {/* Number of Uses */}
            <div className="form-group">
              <label>Uses to Grant</label>
              <input
                type="number"
                min="1"
                max="100"
                value={usesToGrant}
                onChange={(e) => setUsesToGrant(parseInt(e.target.value) || 1)}
              />
              <span className="form-hint">Typically 1 for free trial, 10 for paid equivalent</span>
            </div>

            {/* Submit */}
            <button 
              type="submit" 
              className="grant-btn"
              disabled={!selectedUser || !selectedModule || isSubmitting}
            >
              {isSubmitting ? 'Granting...' : '🎁 Grant Access'}
            </button>
          </form>
        </div>

        {/* Recent Activity Card */}
        <div className="admin-card">
          <h2>Recent Activity</h2>
          <div className="activity-log">
            {accessLogs.length === 0 ? (
              <p className="no-logs">No recent activity</p>
            ) : (
              accessLogs.map(log => (
                <div key={log.id} className={`log-item ${log.action}`}>
                  <div className="log-action">
                    {log.action === 'admin_grant' && '🎁'}
                    {log.action === 'purchase' && '💰'}
                    {log.action === 'access' && '👁️'}
                    {log.action === 'refund' && '↩️'}
                    <span className="log-action-text">{log.action}</span>
                  </div>
                  <div className="log-details">
                    <span className="log-user">{log.user_profiles?.email || 'Unknown'}</span>
                    <span className="log-module">{log.modules?.module_code || 'Unknown'}</span>
                    <span className="log-uses">{log.uses_before} → {log.uses_after}</span>
                  </div>
                  <div className="log-time">
                    {new Date(log.created_at).toLocaleString()}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quick Stats Card */}
        <div className="admin-card">
          <h2>Modules Overview</h2>
          <div className="modules-grid">
            {modules.map(m => (
              <div key={m.id} className="module-stat">
                <span className="module-code">{m.module_code}</span>
                <span className="module-name">{m.module_name}</span>
                <span className="module-price">₹{m.price_inr}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;


