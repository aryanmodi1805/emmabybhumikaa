import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title animate-fadeInUp animate-delay-1">
            Our Collection
          </h1>
          <p className="hero-description animate-fadeInUp animate-delay-2">
            Discover the latest trends in fashion with our exclusive clothing collection designed for the modern lifestyle
          </p>
          <div className="hero-buttons animate-fadeInUp animate-delay-3">
            <button className="hero-button-primary hover-lift hover-glow">
              Shop Now
            </button>
            <button className="hero-button-secondary hover-lift">
              View Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
