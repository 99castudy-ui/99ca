import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import IndirectTaxApp from './pages/IndirectTax/IndirectTaxApp';
import AFMApp from './pages/AFM/AFMApp';
import AuditingApp from './pages/Auditing/AuditingApp';
import IBSApp from './pages/IBS/IBSApp';
import FRApp from './pages/FRApp';
import DirectTaxDashboard from './pages/DirectTaxApp';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import AdminPanel from './pages/Admin/AdminPanel';
import Pricing from './pages/Pricing/Pricing';
import Disclaimer from './pages/Disclaimer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import './App.css';

// Main App Component with Router
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          
          {/* Protected routes - each with module code */}
          <Route path="/indirect-tax/*" element={
            <ProtectedRoute moduleCode="IDT">
              <IndirectTaxApp />
            </ProtectedRoute>
          } />
          
          <Route path="/afm/*" element={
            <ProtectedRoute moduleCode="AFM">
              <AFMApp />
            </ProtectedRoute>
          } />
          
          <Route path="/auditing/*" element={
            <ProtectedRoute moduleCode="AA">
              <AuditingApp />
            </ProtectedRoute>
          } />
          
          <Route path="/ibs/*" element={
            <ProtectedRoute moduleCode="IBS">
              <IBSApp />
            </ProtectedRoute>
          } />
          
          <Route path="/fr/*" element={
            <ProtectedRoute moduleCode="FR">
              <FRApp />
            </ProtectedRoute>
          } />
          
          <Route path="/direct-tax/*" element={
            <ProtectedRoute moduleCode="DT">
              <DirectTaxDashboard />
            </ProtectedRoute>
          } />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
