import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiMenu, FiUser, FiLogIn, FiUserPlus } from 'react-icons/fi';
import Logo from '../common/Logo';
import Container from '../common/Container';
import Button from '../common/Button';
import ThemeToggle from './ThemeToggle';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

/**
 * Header Component - Main navigation bar
 * 
 * @param {boolean} isAuthenticated - Whether user is logged in
 * @param {object} user - User object (if authenticated)
 */
const Header = ({ isAuthenticated = false, user = null }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  // Scroll effect for glass navbar
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-30
          transition-all duration-300
          ${isScrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
            : 'bg-white dark:bg-gray-900'
          }
        `}
      >
        <Container>
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Logo variant="full" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <NavLinks />
              
              {/* Search */}
              <button
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Search hotels"
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              >
                <FiSearch size={20} />
              </button>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Auth Buttons */}
              {!isAuthenticated ? (
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {}}
                  >
                    <FiLogIn className="mr-2" />
                    Login
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {}}
                  >
                    <FiUserPlus className="mr-2" />
                    Register
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {}}
                  >
                    <FiUser className="mr-2" />
                    {user?.name || 'Dashboard'}
                  </Button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Open menu"
              >
                <FiMenu size={24} />
              </button>
            </div>
          </div>

          {/* Expanded Search (Desktop) */}
          {isSearchExpanded && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="hidden md:block py-4 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search for hotels, destinations..."
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px]"
                  autoFocus
                />
                <Button variant="primary" onClick={() => {}}>
                  <FiSearch className="mr-2" />
                  Search
                </Button>
              </div>
            </motion.div>
          )}
        </Container>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isAuthenticated={isAuthenticated}
      />
    </>
  );
};

export default Header;