import React from 'react';
import './Switch.css';

const Switch = ({ isMuted, onToggle }) => {
  return (
    <div className="switch-wrapper animate-fadeInUp animate-delay-2">
      <input 
        className="switch-checkbox" 
        id="switch" 
        type="checkbox" 
        checked={!isMuted}
        onChange={onToggle}
      />
      <label className="switch hover-scale" htmlFor="switch">
        <div className="switch-track">
          <div className="switch-track-glow" />
          <div className="switch-track-dots">
            <span className="switch-track-dot" />
            <span className="switch-track-dot" />
            <span className="switch-track-dot" />
          </div>
        </div>
        <div className="switch-thumb">
          <div className="switch-thumb-shadow" />
          <div className="switch-thumb-highlight" />
          <div className="switch-thumb-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16.5 12c0-2.48-2.02-4.5-4.5-4.5s-4.5 2.02-4.5 4.5 2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5zm-4.5 7.5c-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5zm0-16.5c-4.97 0-9 4.03-9 9h-3l3.89 3.89.07.14 4.04-4.03h-3c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42c1.63 1.63 3.87 2.64 6.36 2.64 4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
            </svg>
          </div>
        </div>
        <div className="switch-particles">
          <span className="switch-particle" />
          <span className="switch-particle" />
          <span className="switch-particle" />
          <span className="switch-particle" />
        </div>
      </label>
      <div className="switch-labels">
        <span className="switch-label-off">MUTE</span>
        <span className="switch-label-on">AUDIO</span>
      </div>
    </div>
  );
};

export default Switch;
