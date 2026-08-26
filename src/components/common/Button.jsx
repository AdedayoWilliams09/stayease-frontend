import { motion } from 'framer-motion';

/**
 * Button Component - Reusable button with multiple variants
 * 
 * @param {string} variant - 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} isLoading - Shows loading spinner
 * @param {boolean} isFullWidth - Makes button full width
 * @param {function} onClick - Click handler
 * @param {React.ReactNode} children - Button content
 * @param {string} className - Additional Tailwind classes
 * @param {string} type - 'button' | 'submit' | 'reset'
 * @param {boolean} disabled - Disables the button
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  isFullWidth = false,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) => {
  // Base styles that apply to all buttons
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-lg
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    min-h-[44px] min-w-[44px]
    touch-manipulation
    cursor-pointer
    select-none
  `;

  // Variant-specific styles
  const variantStyles = {
    primary: `
      bg-blue-600 text-white
      hover:bg-blue-700
      focus:ring-blue-500
      active:bg-blue-800
      dark:bg-blue-500 dark:hover:bg-blue-600
    `,
    secondary: `
      bg-gray-200 text-gray-800
      hover:bg-gray-300
      focus:ring-gray-400
      active:bg-gray-400
      dark:bg-gray-700 dark:text-gray-200
      dark:hover:bg-gray-600
    `,
    outline: `
      border-2 border-blue-600 text-blue-600
      hover:bg-blue-50
      focus:ring-blue-500
      dark:border-blue-400 dark:text-blue-400
      dark:hover:bg-blue-900/20
    `,
    ghost: `
      text-gray-700
      hover:bg-gray-100
      focus:ring-gray-400
      dark:text-gray-300
      dark:hover:bg-gray-800
    `,
    danger: `
      bg-red-600 text-white
      hover:bg-red-700
      focus:ring-red-500
      active:bg-red-800
      dark:bg-red-500 dark:hover:bg-red-600
    `,
  };

  // Size-specific styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Disabled styles
  const disabledStyles = 'opacity-50 cursor-not-allowed pointer-events-none';

  // Loading spinner
  const LoadingSpinner = () => (
    <svg
      className="animate-spin h-5 w-5 text-current"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  // Combine all styles
  const buttonStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${isFullWidth ? 'w-full' : ''}
    ${disabled || isLoading ? disabledStyles : ''}
    ${className}
  `;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={buttonStyles}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.15 }}
      {...props}
    >
      {isLoading && (
        <span className="mr-2">
          <LoadingSpinner />
        </span>
      )}
      {children}
    </motion.button>
  );
};

export default Button;