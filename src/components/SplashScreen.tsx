import React, { useEffect, useState } from 'react';
//import splashGif from '@/public/pledge.gif'; // Adjust the path if necessary
import './SplashScreen.css'; // Import the CSS for styling

const SplashScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDelayed, setIsDelayed] = useState(true);
  
  useEffect(() => {
    // Start the GIF after the delay
    const startTimer = setTimeout(() => {
      setIsDelayed(false);
    }, 500);

    // Hide the splash screen after the GIF duration + delay
    const endTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1500 + 500);

    return () => {
        clearTimeout(startTimer);
        clearTimeout(endTimer);
      };
    }, []);

  if (!isVisible) return null;

  return (
    <div className="splash-screen">
      <img src="/pledge.gif" alt="Loading..." />
    </div>
  );
};

export default SplashScreen;
