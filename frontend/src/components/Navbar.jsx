import React, { useState, useEffect } from "react";
import { getLogoUrl } from '../config/api';
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleDrawer = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed w-full z-50 border-b transition-all duration-300 transform animate-fadeInDown ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isHomePage 
        ? 'bg-transparent hover:bg-white border-transparent hover:border-gray-200 shadow-none hover:shadow-lg'
        : 'bg-white/90 border-gray-200 shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center h-14 sm:h-16 md:h-18 lg:h-20 relative">
          <div className="flex-shrink-0">
            <button
              onClick={toggleDrawer}
              className={`p-2 sm:p-2.5 md:p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ${
                isHomePage 
                  ? 'bg-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-white hover:text-white shadow-none hover:shadow-lg'
                  : 'bg-white/90 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-gray-600 hover:text-white shadow-lg hover:shadow-xl'
              }`}
            >
              {isOpen ? (
                <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
              ) : (
                <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
              )}
            </button>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img 
              src={getLogoUrl("logo.png")} 
              alt="Logo" 
              className="h-10 w-auto sm:h-12 md:h-14 lg:h-16 object-contain"
            />
          </div>

          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"></div>

        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed top-0 left-0 h-screen w-64 sm:w-72 md:w-80 shadow-2xl z-40 border-r border-gray-200"
          style={{
            backgroundColor: '#000000',
            opacity: 1
          }}
        >
          <div 
            className="flex items-center justify-between p-4 sm:p-5 md:p-6 border-b border-gray-700"
            style={{
              backgroundColor: '#000000',
              opacity: 1
            }}
          >
            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              <div>Welcome to</div>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span>Emma by Bhumika</span>
                <img 
                  src={getLogoUrl("LOADER.png")} 
                  alt="Logo" 
                  className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
                />
              </div>
            </div>
            <button
              onClick={toggleDrawer}
              className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              style={{
                backgroundColor: '#000000',
                opacity: 1
              }}
            >
              <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300" />
            </button>
          </div>

          <nav className="mt-6 sm:mt-8 px-4 sm:px-5 md:px-6 pb-6 sm:pb-8 bg-black h-screen overflow-y-auto">
            <div className="space-y-2 bg-black">
              <Link 
                to="/" 
                className="flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-amber-500 hover:to-orange-500 hover:text-red-600 font-medium rounded-xl transition-all duration-200 group bg-black"
                onClick={toggleDrawer}
              >
                <span className="mr-2 sm:mr-3 text-base sm:text-lg">🏠</span>
                Home
              </Link>
              <Link 
                to="/about" 
                className="flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-amber-500 hover:to-orange-500 hover:text-red-600 font-medium rounded-xl transition-all duration-200 group bg-black"
                onClick={toggleDrawer}
              >
                <span className="mr-2 sm:mr-3 text-base sm:text-lg">ℹ️</span>
                About
              </Link>
              <Link 
                to="/services" 
                className="flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-amber-500 hover:to-orange-500 hover:text-red-600 font-medium rounded-xl transition-all duration-200 group bg-black"
                onClick={toggleDrawer}
              >
                <span className="mr-2 sm:mr-3 text-base sm:text-lg">⚙️</span>
                Services
              </Link>
              <Link 
                to="/contact" 
                className="flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-amber-500 hover:to-orange-500 hover:text-red-600 font-medium rounded-xl transition-all duration-200 group bg-black"
                onClick={toggleDrawer}
              >
                <span className="mr-2 sm:mr-3 text-base sm:text-lg">📞</span>
                Contact
              </Link>
      </div>

            <div 
              className="mt-6 sm:mt-8 px-3 sm:px-4"
              style={{
                backgroundColor: '#000000',
                opacity: 1
              }}
            >
              <button className="w-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:from-yellow-500 hover:via-amber-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Started
              </button>
            </div>
          </nav>
        </div>
      )}

      {isOpen && (
        <div 
          onClick={toggleDrawer} 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;