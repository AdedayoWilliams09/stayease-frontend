import { NavLink } from 'react-router-dom';

/**
 * NavLinks Component - Navigation links for header
 * 
 * @param {string} className - Additional classes
 * @param {function} onClick - Click handler (for mobile menu)
 */
const NavLinks = ({ className = '', onClick }) => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/hotels', label: 'Hotels' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`flex items-center gap-1 sm:gap-2 ${className}`}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={onClick}
          className={({ isActive }) => `
            px-3 py-2 rounded-lg text-sm font-medium
            transition-all duration-200
            hover:bg-gray-100 dark:hover:bg-gray-700
            focus:outline-none focus:ring-2 focus:ring-blue-500
            min-h-[44px] flex items-center
            ${isActive 
              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
              : 'text-gray-700 dark:text-gray-300'
            }
          `}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavLinks;