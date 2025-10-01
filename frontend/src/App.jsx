import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Loader from "./components/Loader";
import WhatsAppButton from "./components/WhatsAppButton";
import { getVideoUrl, getLogoUrl } from "./config/api";
import { usePerformanceMode } from "./hooks/usePerformanceMode";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [preloadProgress, setPreloadProgress] = useState(0);
  const { shouldReduceAnimations } = usePerformanceMode();

  // Preload all media files
  useEffect(() => {
    const preloadMedia = async () => {
      const mediaFiles = [
        // Images
        getLogoUrl("LOADER.png"),
        getLogoUrl("logo.png"),
        getLogoUrl("video-poster.jpg"),
        // Product Images
        "/images/1.jpg",
        "/images/2.JPG",
        "/images/3.JPG",
        "/images/4.jpg",
        "/images/5.JPG",
        "/images/6.jpg",
        // Videos
        getVideoUrl("2.mp4")
      ];

      let loadedCount = 0;
      const totalFiles = mediaFiles.length;

      // Set a maximum timeout to prevent infinite loading
      const maxTimeout = setTimeout(() => {
        console.warn('Preloading timeout reached, proceeding with website load');
        setIsLoading(false);
      }, 10000); // 10 seconds max

      const preloadPromises = mediaFiles.map((url) => {
        return new Promise((resolve) => {
          if (url.includes('.mp4')) {
            // Preload video
            const video = document.createElement('video');
            video.preload = 'auto';
            video.src = url;
            video.muted = true; // Mute to avoid autoplay issues
            
            const handleLoad = () => {
              loadedCount++;
              setPreloadProgress((loadedCount / totalFiles) * 100);
              resolve();
            };
            
            video.addEventListener('canplaythrough', handleLoad);
            video.addEventListener('loadeddata', handleLoad); // Fallback event
            video.addEventListener('error', () => {
              console.warn(`Failed to preload video: ${url}`);
              loadedCount++;
              setPreloadProgress((loadedCount / totalFiles) * 100);
              resolve();
            });
            
            video.load();
          } else {
            // Preload images
            const img = new Image();
            img.onload = () => {
              loadedCount++;
              setPreloadProgress((loadedCount / totalFiles) * 100);
              resolve();
            };
            img.onerror = () => {
              console.warn(`Failed to preload image: ${url}`);
              loadedCount++;
              setPreloadProgress((loadedCount / totalFiles) * 100);
              resolve();
            };
            img.src = url;
          }
        });
      });

      try {
        await Promise.all(preloadPromises);
        clearTimeout(maxTimeout);
        // Add a small delay to ensure everything is properly loaded
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error preloading media:', error);
        clearTimeout(maxTimeout);
        // Still hide loading screen even if preloading fails
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    preloadMedia();
  }, []);

  useEffect(() => {
    if (shouldReduceAnimations) {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }
  }, [shouldReduceAnimations]);

  return (
    <Router>
      <Loader isLoading={isLoading} preloadProgress={preloadProgress} />
      {!isLoading && (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <WhatsAppButton />
        </div>
      )}
    </Router>
  );
}

export default App;