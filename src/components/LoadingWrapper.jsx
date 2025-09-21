"use client";

import { useState, useEffect } from 'react';
import Loading from './loading';

const LoadingWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 200);
  };

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <Loading onComplete={handleLoadingComplete} />}
      
      {/* Main Content with smooth transition */}
      <div 
        style={{ 
          opacity: showContent ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out',
          visibility: showContent ? 'visible' : 'hidden'
        }}
      >
        {children}
      </div>
    </>
  );
};

export default LoadingWrapper;