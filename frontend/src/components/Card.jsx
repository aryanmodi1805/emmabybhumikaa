import React, { useState, useEffect } from 'react';

const Card = ({ card }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardClick = () => {
    if (isMobile) {
      setIsActive(!isActive);
    }
  };

  const handleCardLeave = () => {
    if (isMobile) {
      // Auto-hide after 3 seconds on mobile
      setTimeout(() => setIsActive(false), 3000);
    }
  };

  return (
    <div 
      className={`card hover-card ${isActive ? 'mobile-active show-overlay' : ''}`} 
      style={{ width: '18rem' }}
      onClick={handleCardClick}
      onMouseLeave={handleCardLeave}
    >
      <img 
        src={card.image} 
        className="card-img-top" 
        alt={card.title}
        style={{ height: '250px', objectFit: 'cover' }}
      />
      <div className="card-body card-overlay">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="badge bg-secondary">{card.category}</span>
          <span className="fw-bold text-primary">{card.price}</span>
        </div>
        <div className="mt-3">
          <button className="btn btn-primary btn-sm me-2">Add to Cart</button>
          <button className="btn btn-outline-secondary btn-sm">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
