import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import IndirectTaxApp from './pages/IndirectTax/IndirectTaxApp';
import AFMApp from './pages/AFM/AFMApp';
import AuditingApp from './pages/Auditing/AuditingApp';
import IBSApp from './pages/IBS/IBSApp';
import './App.css';

// Main App Component with Router
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/indirect-tax/*" element={<IndirectTaxApp />} />
        <Route path="/afm/*" element={<AFMApp />} />
        <Route path="/auditing/*" element={<AuditingApp />} />
        <Route path="/ibs/*" element={<IBSApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
