import { Link } from 'react-router-dom';

/**
 * Logo Component - Brand logo with text
 * 
 * @param {string} variant - 'full' | 'icon' | 'text'
 * @param {string} className - Additional classes
 * @param {boolean} linkToHome - Wraps in Link to home
 */
const Logo = ({ variant = 'full', className = '', linkToHome = true }) => {
  const LogoIcon = () => (
    <svg
      className="h-8 w-8 text-blue-600 dark:text-blue-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  );

  const LogoText = () => (
    <span className="font-bold text-2xl text-gray-900 dark:text-white">
      Stay<span className="text-blue-600 dark:text-blue-400">Ease</span>
    </span>
  );

  const content = (
    <div className={`flex items-center gap-2 ${className}`}>
      <LogoIcon />
      {(variant === 'full' || variant === 'text') && <LogoText />}
    </div>
  );

  if (linkToHome) {
    return <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">{content}</Link>;
  }

  return content;
};

export default Logo;