import React from 'react';
import { Link } from 'react-router-dom';
import SiteLogo from '../components/SiteLogo';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="site-header">
          <SiteLogo />
        </div>
        <div className="legal-header">
          <h1>About Us</h1>
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>

        <div className="legal-content">
          <section>
            <h2>Our Mission</h2>
            <p>
              99ca.tech is built for Chartered Accountancy students across India who want to improve how they write exam answers and present their knowledge effectively.
            </p>
          </section>

          <section>
            <h2>The Challenge We Address</h2>
            <p>
              Many CA students understand concepts well but struggle when it comes to writing answers that align with how examiners evaluate papers. The gap between knowing the answer and presenting it in an exam-appropriate format can significantly impact performance.
            </p>
          </section>

          <section>
            <h2>How We Help</h2>
            <p>We provide technology-enabled learning tools that help students:</p>
            <ul>
              <li>Understand answer writing patterns and evaluation expectations</li>
              <li>Practice structuring responses in an exam-appropriate manner</li>
              <li>Improve clarity and presentation of technical content</li>
              <li>Develop confidence in writing comprehensive answers</li>
            </ul>
            <p>
              Our platform uses analysis of past papers and evaluation patterns to guide students toward better answer writing practices. We focus on helping you express what you know in a way that examiners can clearly understand and appreciate.
            </p>
          </section>

          <section>
            <h2>Our Approach</h2>
            <p>
              We believe that effective exam writing is a skill that can be developed through understanding, practice, and structured feedback. Rather than promising shortcuts, we provide tools and resources that support genuine learning and skill improvement.
            </p>
            <p>
              Our content is designed to be practical, exam-oriented, and aligned with what actually matters in the evaluation process. We emphasize clarity, proper structure, and appropriate depth of coverage.
            </p>
          </section>

          <section>
            <h2>Who We Are For</h2>
            <p>This platform is designed for CA students at any stage of their preparation who want to:</p>
            <ul>
              <li>Improve their answer writing skills</li>
              <li>Understand evaluation patterns better</li>
              <li>Practice presenting technical content clearly</li>
              <li>Build confidence in exam writing</li>
            </ul>
          </section>

          <section>
            <h2>Our Values</h2>
            <p>
              We operate as an independent educational resource. We respect the academic process, maintain neutrality, and focus purely on supporting your learning journey through better understanding and practice.
            </p>
          </section>

          <section>
            <h2>Technology and Learning</h2>
            <p>
              We use technology to make learning more effective and accessible. Our tools help analyze patterns, provide structured practice opportunities, and offer insights that can guide your preparation. However, technology is a tool to support learning, not a replacement for genuine understanding and effort.
            </p>
          </section>

          <section>
            <h2>Commitment</h2>
            <p>
              We are committed to providing a supportive learning environment that respects the seriousness of CA examinations while making preparation more effective and approachable.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

