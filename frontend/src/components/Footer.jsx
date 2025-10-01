import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Footer.css';

const Footer = () => {
  const scrollRef = useScrollAnimation();

  return (
    <footer ref={scrollRef} className="footer scroll-animate">
      <div className="footer-container">
        <div className="footer-content">
          <h2 className="footer-title animate-fadeInUp animate-delay-1">
            Fashion Collection
          </h2>
          <p className="footer-description animate-fadeInUp animate-delay-1">Discover your perfect style with our exclusive clothing line</p>
          <div className="footer-links animate-fadeInUp animate-delay-2">
            <Link to="/" className="footer-link hover-lift">Home</Link>
            <Link to="/about" className="footer-link hover-lift">About</Link>
            <Link to="/services" className="footer-link hover-lift">Collection</Link>
            <Link to="/contact" className="footer-link hover-lift">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
