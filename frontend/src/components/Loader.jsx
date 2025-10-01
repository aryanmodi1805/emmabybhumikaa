import React from 'react';
import './Loader.css';
import { getLogoUrl } from '../config/api';

const Loader = ({ isLoading, preloadProgress = 0 }) => {
  if (!isLoading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <img 
          src={getLogoUrl("LOADER.png")} 
          alt="Loading..." 
          className="loader-image"
        />
        <div className="preload-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${preloadProgress}%` }}
            ></div>
          </div>
          <p className="progress-text">Loading media... {Math.round(preloadProgress)}%</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
