import React, { useRef, useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import Hero from '../components/Hero';
import CardsContainer from '../components/CardsContainer';
import Footer from '../components/Footer';
import Switch from '../components/Switch';

const Home = () => {
  const videoPlayerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleAudio = () => {
    if (videoPlayerRef.current) {
      const newMutedState = !isMuted;
      videoPlayerRef.current.handleToggleAudio();
      setIsMuted(newMutedState);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <VideoPlayer ref={videoPlayerRef} />
      <div className="relative z-10">
        <Hero />
        <CardsContainer />
        <Footer />
      </div>
      
      <div 
        className="fixed bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6" 
        style={{ 
          zIndex: 99999,
          backgroundColor: 'transparent'
        }}
      >
        <Switch 
          isMuted={isMuted} 
          onToggle={handleToggleAudio}
        />
      </div>
    </div>
  );
};

export default Home;
