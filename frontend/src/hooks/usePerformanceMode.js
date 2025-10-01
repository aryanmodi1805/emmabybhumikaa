import { useState, useEffect } from 'react';

export const usePerformanceMode = () => {
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    // Detect low-end devices based on hardware concurrency and memory
    const detectLowEndDevice = () => {
      const cores = navigator.hardwareConcurrency || 4;
      const memory = navigator.deviceMemory || 4;
      const connection = navigator.connection;
      
      // Consider device low-end if:
      // - Less than 4 CPU cores
      // - Less than 4GB RAM
      // - Slow connection (2G or slow 3G)
      const isLowEnd = cores < 4 || 
                       memory < 4 || 
                       (connection && (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g'));
      
      setIsLowEndDevice(isLowEnd);
    };

    detectLowEndDevice();

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return {
    isLowEndDevice,
    prefersReducedMotion,
    shouldReduceAnimations: isLowEndDevice || prefersReducedMotion
  };
};
