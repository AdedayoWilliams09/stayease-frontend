import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

/**
 * BackToTopButton Component - Fixed "scroll to top" button
 *
 * Appears after the user scrolls past ~600px. Clicking smoothly
 * scrolls the window to the top. Implied feature for long
 * legal documents (mandatory on mobile UX).
 */
const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll(); // check on mount (e.g., if page loads scrolled)
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          whileTap={{ scale: 0.95 }}
          className="
            fixed bottom-6 right-6 z-40
            min-h-[44px] min-w-[44px] p-3
            rounded-full shadow-lg
            bg-blue-600 text-white
            hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            flex items-center justify-center
            transition-colors
          "
        >
          <FiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;