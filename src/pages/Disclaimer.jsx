import React from 'react';
import { Link } from 'react-router-dom';
import SiteLogo from '../components/SiteLogo';
import './Disclaimer.css';

function Disclaimer() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="site-header">
          <SiteLogo />
        </div>
        <div className="legal-header">
          <h1>Disclaimer</h1>
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>

        <div className="legal-content">
          <section>
            <p>
              99ca.tech is an independent educational technology platform designed to assist Chartered Accountancy students in their preparation journey. This platform operates independently and is not affiliated with, endorsed by, or connected to the Institute of Chartered Accountants of India (ICAI) in any manner.
            </p>
          </section>

          <section>
            <h2>Platform Purpose</h2>
            <p>
              The content, tools, and resources available on this platform are intended for educational purposes and skill improvement only. Our aim is to help students understand answer writing patterns, improve their presentation skills, and practice exam-oriented writing techniques.
            </p>
          </section>

          <section>
            <h2>No Guarantees</h2>
            <p>
              Use of this platform, its content, or any of its features does not guarantee exam results, marks, ranks, or passing of any CA examination. Academic performance depends on multiple factors including individual effort, understanding of concepts, and examination-day performance.
            </p>
          </section>

          <section>
            <h2>Content and Trademarks</h2>
            <p>
              All trademarks, institutional names, and references to ICAI or CA examinations are the property of their respective owners. We use these references only for educational and descriptive purposes.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              While we strive to provide accurate and helpful content, we do not assume responsibility for any consequences arising from the use of information or tools on this platform. Students are advised to refer to official ICAI materials and consult with their faculty for authoritative guidance.
            </p>
          </section>

          <section>
            <h2>Updates</h2>
            <p>
              This disclaimer may be updated from time to time. Continued use of the platform implies acceptance of any revisions to these terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;

