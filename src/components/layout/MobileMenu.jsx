import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import NavLinks from './NavLinks';
import ThemeToggle from './ThemeToggle';
import Button from '../common/Button';
import Logo from '../common/Logo';

/**
 * MobileMenu Component - Slide-out drawer for mobile navigation
 * 
 * @param {boolean} isOpen - Whether the menu is open
 * @param {function} onClose - Close handler
 * @param {boolean} isAuthenticated - Whether user is logged in
 */
const MobileMenu = ({ isOpen, onClose, isAuthenticated = false }) => {
  // Overlay animation
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Drawer animation
  const drawerVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          
          {/* Drawer */}
          <motion.div
            className="fixed right-0 top-0 h-full w-72 bg-white dark:bg-gray-900 shadow-xl z-50 overflow-y-auto"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <Logo variant="full" />
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close menu"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Navigation */}
            <div className="p-4">
              <NavLinks className="flex flex-col gap-1" onClick={onClose} />
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
                  <ThemeToggle />
                </div>
                
                {!isAuthenticated ? (
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" isFullWidth onClick={() => {}}>
                      Login
                    </Button>
                    <Button isFullWidth onClick={() => {}}>
                      Register
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" isFullWidth onClick={() => {}}>
                      Dashboard
                    </Button>
                    <Button variant="ghost" isFullWidth onClick={() => {}}>
                      Logout
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;