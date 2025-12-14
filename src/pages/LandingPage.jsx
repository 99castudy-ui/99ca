import React from 'react';
import { Link } from 'react-router-dom';
import SiteLogo from '../components/SiteLogo';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="site-header">
        <SiteLogo />
      </div>
      <div className="landing-hero">
        <h1>CA Final Practice Platform</h1>
        <p>Master your CA Final exams with comprehensive practice questions from past papers</p>
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
      </div>

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

