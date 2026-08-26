import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * SectionHeader Component - Section title with optional view all link
 * 
 * @param {string} title - Section title
 * @param {string} subtitle - Section subtitle (optional)
 * @param {string} viewAllLink - Link to view all (optional)
 * @param {string} viewAllText - Text for view all link (default: "View All")
 * @param {string} className - Additional classes
 */
const SectionHeader = ({
  title,
  subtitle,
  viewAllLink,
  viewAllText = 'View All',
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 ${className}`}
    >
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
      
      {viewAllLink && (
        <Link
          to={viewAllLink}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-1 group transition-colors"
        >
          {viewAllText}
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      )}
    </motion.div>
  );
};

export default SectionHeader;