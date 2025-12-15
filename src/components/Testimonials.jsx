import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'CA Final Student',
    location: 'Mumbai',
    rating: 5,
    text: 'This platform transformed my preparation! The AI-powered analysis helped me understand exactly where I was going wrong. The step-by-step feedback is incredibly detailed and helped me improve my answer structure significantly.',
    subject: 'IBS',
    avatar: 'PS'
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    role: 'CA Final Student',
    location: 'Delhi',
    rating: 5,
    text: 'The MCQ practice section is excellent. Real exam-like questions with detailed explanations. The long answer practice with AI analysis is a game-changer - it\'s like having a personal tutor available 24/7.',
    subject: 'AFM',
    avatar: 'RM'
  },
  {
    id: 3,
    name: 'Anjali Patel',
    role: 'CA Final Student',
    location: 'Ahmedabad',
    rating: 5,
    text: 'I love how comprehensive this platform is. All four papers covered with quality questions. The Indirect Tax section helped me master GST concepts. Highly recommend to all CA Final students!',
    subject: 'Indirect Tax',
    avatar: 'AP'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'CA Final Student',
    location: 'Bangalore',
    rating: 5,
    text: 'The AI analysis feature is brilliant! It not only scores my answers but also provides actionable feedback. This platform has become an essential part of my daily study routine.',
    subject: 'Auditing',
    avatar: 'VS'
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    role: 'CA Final Student',
    location: 'Hyderabad',
    rating: 5,
    text: 'Best free resource for CA Final preparation! The questions are from actual past papers and the explanations are thorough. The self-evaluation feature helps me track my progress effectively.',
    subject: 'IBS',
    avatar: 'SR'
  },
  {
    id: 6,
    name: 'Arjun Kumar',
    role: 'CA Final Student',
    location: 'Chennai',
    rating: 5,
    text: 'The platform\'s interface is clean and easy to navigate. The practice questions cover all important topics. The AI-powered answer analysis is incredibly detailed and helps identify areas for improvement.',
    subject: 'AFM',
    avatar: 'AK'
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>What Students Say</h2>
          <p>Join thousands of CA Final students who are acing their exams</p>
        </div>

        <div className="testimonials-carousel">
          <button 
            className="carousel-btn carousel-btn-prev" 
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="testimonial-card">
            <div className="testimonial-rating">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="testimonial-text">"{currentTestimonial.text}"</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {currentTestimonial.avatar}
              </div>
              <div className="testimonial-info">
                <div className="testimonial-name">{currentTestimonial.name}</div>
                <div className="testimonial-role">
                  {currentTestimonial.role} • {currentTestimonial.location}
                </div>
                <div className="testimonial-subject">
                  Practicing: {currentTestimonial.subject}
                </div>
              </div>
            </div>
          </div>

          <button 
            className="carousel-btn carousel-btn-next" 
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="testimonials-grid">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card-mini">
              <div className="testimonial-rating-mini">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star-mini">★</span>
                ))}
              </div>
              <p className="testimonial-text-mini">"{testimonial.text.substring(0, 120)}..."</p>
              <div className="testimonial-author-mini">
                <div className="testimonial-avatar-mini">{testimonial.avatar}</div>
                <div>
                  <div className="testimonial-name-mini">{testimonial.name}</div>
                  <div className="testimonial-role-mini">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

