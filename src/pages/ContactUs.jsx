import React from 'react';
import { Link } from 'react-router-dom';
import SiteLogo from '../components/SiteLogo';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="site-header">
          <SiteLogo />
        </div>
        <div className="legal-header">
          <h1>Contact Us</h1>
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>

        <div className="legal-content">
          <section>
            <p>
              We welcome your questions, feedback, and suggestions. If you have any queries about the platform, need assistance, or want to share your thoughts, please reach out to us.
            </p>
          </section>

          <section>
            <h2>Get in Touch</h2>
            <p>
              We are here to help and listen to the CA student community. Whether you have questions about using the platform, suggestions for improvement, or need technical support, feel free to contact us.
            </p>
          </section>

          <section>
            <h2>Email</h2>
            <p>
              For general inquiries, feedback, or support, please email us at:
            </p>
            <p className="contact-info">
              <a href="mailto:99ca.study@gmail.com">99ca.study@gmail.com</a>
            </p>
            <p>
              We aim to respond to all queries within 24-48 hours during working days.
            </p>
          </section>

          <section>
            <h2>Contact Form</h2>
            <p>
              Please fill out the contact form below with your message, and we will get back to you as soon as possible.
            </p>
            <div className="contact-form-placeholder">
              [Contact form to be integrated]
            </div>
          </section>

          <section>
            <h2>Social Media</h2>
            <p>
              Connect with us on social media for updates, tips, and community discussions.
            </p>
            <div className="social-links-placeholder">
              [Social media links to be integrated]
            </div>
          </section>

          <section className="important-note">
            <h2>Important Note</h2>
            <p>
              Please note that 99ca.tech is an independent educational platform and is not affiliated with ICAI. We are unable to provide official clarifications, interpretations, or confirmations related to CA examination rules, regulations, or syllabus matters. For official information and clarifications, please refer to the official ICAI website or contact ICAI directly.
            </p>
          </section>

          <section>
            <h2>Support Hours</h2>
            <p>
              Our support team is available during standard business hours. We appreciate your patience if responses take slightly longer during peak periods or holidays.
            </p>
          </section>

          <section>
            <h2>Feedback</h2>
            <p>
              Your feedback helps us improve. If you have suggestions for new features, content improvements, or any other ideas that could make the platform more useful for CA students, we would love to hear from you.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

