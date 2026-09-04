import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component - Resets scroll position to top on route change
 * 
 * This component listens for route changes and scrolls the window to the top.
 * It should be placed inside the Router, near the top of the component tree.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    
    // Alternative: instant scroll (no animation)
    // window.scrollTo(0, 0);
  }, [pathname]); // Re-run when the pathname changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;