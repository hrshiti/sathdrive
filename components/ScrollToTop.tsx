import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollToTopProps = {
  children: React.ReactNode;
};

const ScrollToTop: React.FC<ScrollToTopProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the very top on every route/hash change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [location.pathname, location.hash]);

  return <>{children}</>;
};

export default ScrollToTop;

