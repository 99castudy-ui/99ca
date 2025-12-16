import React from 'react';
import { Link } from 'react-router-dom';
import SiteLogo from '../components/SiteLogo';
import Testimonials from '../components/Testimonials';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="site-header">
        <SiteLogo />
      </div>
      <div className="landing-hero">
        <h1>
          Master Your CA Journey with <span className="ai-highlight">AI Precision</span>
        </h1>
        <p>99ca.tech bridges the gap between preparation and perfection. Practice model questions, get instant AI analysis, and access professional tools.</p>
      </div>

      <div className="subject-cards">
        <Link to="/indirect-tax" className="subject-card blue-theme">
          <div className="subject-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div className="subject-content">
            <div className="subject-paper">Paper 5</div>
            <h2>Indirect Tax Laws</h2>
            <p>GST, Customs & Foreign Trade Policy</p>
            <div className="subject-stats">
              <span>25 MCQs</span>
              <span>•</span>
              <span>5 Case Studies</span>
            </div>
          </div>
          <div className="subject-arrow">→</div>
        </Link>

        <Link to="/afm" className="subject-card orange-theme">
          <div className="subject-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <div className="subject-content">
            <div className="subject-paper">Paper 2</div>
            <h2>Advanced Financial Management</h2>
            <p>Portfolio, Derivatives & Foreign Exchange</p>
            <div className="subject-stats">
              <span>20 MCQs</span>
              <span>•</span>
              <span>3 Case Studies</span>
            </div>
          </div>
          <div className="subject-arrow">→</div>
        </Link>

        <Link to="/auditing" className="subject-card brown-theme">
          <div className="subject-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          </div>
          <div className="subject-content">
            <div className="subject-paper">Paper 3</div>
            <h2>Advanced Auditing</h2>
            <p>Auditing, Assurance & Professional Ethics</p>
            <div className="subject-stats">
              <span>15 MCQs</span>
              <span>•</span>
              <span>3 Long Answers</span>
            </div>
          </div>
          <div className="subject-arrow">→</div>
        </Link>

        <Link to="/ibs" className="subject-card lavender-theme">
          <div className="subject-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div className="subject-content">
            <div className="subject-paper">Paper 6</div>
            <h2>Integrated Business Solutions</h2>
            <p>Financial Reporting, Tax, Audit & Corporate Laws</p>
            <div className="subject-stats">
              <span>30 MCQs</span>
              <span>•</span>
              <span>3 Long Answers</span>
            </div>
          </div>
          <div className="subject-arrow">→</div>
        </Link>

        <Link to="/fr" className="subject-card maroon-theme">
          <div className="subject-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="9" y1="15" x2="15" y2="15"/>
            </svg>
          </div>
          <div className="subject-content">
            <div className="subject-paper">Paper 1</div>
            <h2>Financial Reporting</h2>
            <p>Consolidation, Ind AS, Revenue & Leases</p>
            <div className="subject-stats">
              <span>8 MCQs</span>
              <span>•</span>
              <span>2 Long Answers</span>
            </div>
          </div>
          <div className="subject-arrow">→</div>
        </Link>

        <Link to="/direct-tax" className="subject-card turquoise-theme">
          <div className="subject-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11l3 3L22 4"/>
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
            </svg>
          </div>
          <div className="subject-content">
            <div className="subject-paper">Paper 4</div>
            <h2>Direct Tax Laws & International Taxation</h2>
            <p>Income Tax, Deductions & International Tax</p>
            <div className="subject-stats">
              <span>8 MCQs</span>
              <span>•</span>
              <span>2 Long Answers</span>
            </div>
          </div>
          <div className="subject-arrow">→</div>
        </Link>
      </div>

      <Testimonials />

      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
          <div className="footer-text">
            <p>99ca.tech - Independent Educational Platform for CA Students</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;

