import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import './VideoPlayer.css';
import { getVideoUrl, getLogoUrl } from '../config/api';

const VideoPlayer = forwardRef((_, ref) => {
  const [scrollY, setScrollY] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleToggleAudio = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  useImperativeHandle(ref, () => ({
    isMuted,
    handleToggleAudio
  }));

  return (
    <section ref={sectionRef} className="video-section">
      <div className="video-container">
        <div className="video-wrapper">
          {isVideoVisible ? (
            <video
              ref={videoRef}
              className="video"
              style={{
                opacity: Math.max(0.3, 1 - scrollY / window.innerHeight),
                minHeight: '100vh',
                minWidth: '100vw'
              }}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="auto"
              webkit-playsinline="true"
              poster={getLogoUrl("video-poster.jpg")}
            >
              
              <source src={getVideoUrl("2.mp4")} type="video/mp4" />
            </video>
          ) : (
            <div 
              className="video-placeholder"
              style={{
                backgroundImage: `url(${getLogoUrl("video-poster.jpg")})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
                minHeight: '100vh',
                minWidth: '100vw'
              }}
            />
          )}
        </div>
      </div>
      
      <div 
        className="video-overlay"
        style={{
          opacity: Math.min(0.7, scrollY / (window.innerHeight * 0.5))
        }}
      />
    </section>
  );
});

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;