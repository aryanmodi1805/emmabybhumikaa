import React from 'react';
import Card from './Card';
import { cardsData } from '../data/cardsData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './CardsContainer.css';

const CardsContainer = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef} className="cards-container scroll-animate">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-5 animate-fadeInUp animate-delay-1">Featured Products</h2>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {cardsData.map((card, index) => (
            <div key={card.id} className={`col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center animate-fadeInUp animate-delay-${Math.min(index + 1, 3)}`}>
              <Card card={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
