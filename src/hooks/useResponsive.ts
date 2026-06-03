import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '../constants';

export const useResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : BREAKPOINTS.desktop
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: windowWidth < BREAKPOINTS.mobileLarge,
    isTablet: windowWidth >= BREAKPOINTS.mobileLarge && windowWidth < BREAKPOINTS.desktop,
    isDesktop: windowWidth >= BREAKPOINTS.desktop,
    windowWidth,
  };
};
