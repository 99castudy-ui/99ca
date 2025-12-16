import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import IndirectTaxApp from './pages/IndirectTax/IndirectTaxApp';
import AFMApp from './pages/AFM/AFMApp';
import AuditingApp from './pages/Auditing/AuditingApp';
import IBSApp from './pages/IBS/IBSApp';
import FRApp from './pages/FRApp';
import DirectTaxDashboard from './pages/DirectTaxApp';
import Disclaimer from './pages/Disclaimer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
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
        <Route path="/fr/*" element={<FRApp />} />
        <Route path="/direct-tax/*" element={<DirectTaxDashboard />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
