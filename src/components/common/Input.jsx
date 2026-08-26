import { forwardRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Input Component - Reusable input field with label and error
 * 
 * @param {string} label - Input label
 * @param {string} type - Input type (text, email, password, etc.)
 * @param {string} name - Input name attribute
 * @param {string} value - Input value
 * @param {function} onChange - Change handler
 * @param {string} placeholder - Placeholder text
 * @param {string} error - Error message
 * @param {string} className - Additional classes
 * @param {boolean} required - Makes input required
 * @param {string} icon - Icon component to show inside input
 * @param {string} helperText - Helper text below input
 */
const Input = forwardRef(({
  label,
  type = 'text',
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  className = '',
  required = false,
  icon: Icon,
  helperText,
  ...props
}, ref) => {
  // Base input styles
  const inputStyles = `
    w-full px-4 py-2.5
    rounded-lg border
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-white
    placeholder-gray-400 dark:placeholder-gray-500
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-blue-500
    min-h-[44px]
    touch-manipulation
    ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-blue-500'}
    ${Icon ? 'pl-10' : ''}
    ${className}
  `;

  // Label styles
  const labelStyles = `
    block text-sm font-medium
    text-gray-700 dark:text-gray-300
    mb-1.5
    ${required ? 'after:content-["*"] after:ml-0.5 after:text-red-500' : ''}
  `;

  // Error text styles
  const errorStyles = 'mt-1.5 text-sm text-red-500';

  // Helper text styles
  const helperStyles = 'mt-1.5 text-sm text-gray-500 dark:text-gray-400';

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className={labelStyles}>
          {label}
        </label>
      )}
      
      <div className="relative">
        {Icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
            <Icon size={20} />
          </span>
        )}
        
        <input
          ref={ref}
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          className={inputStyles}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : helperText ? `${name}-helper` : undefined}
          {...props}
        />
        
        {/* Animated error shake */}
        {error && (
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            <p id={`${name}-error`} className={errorStyles}>
              {error}
            </p>
          </motion.div>
        )}
      </div>
      
      {helperText && !error && (
        <p id={`${name}-helper`} className={helperStyles}>
          {helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;