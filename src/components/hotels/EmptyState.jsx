import { motion } from 'framer-motion';
import { FiSearch, FiSliders } from 'react-icons/fi';
import Button from '../common/Button';

/**
 * EmptyState Component - Displayed when no hotels match filters
 * 
 * @param {function} onClearFilters - Callback to clear all filters
 * @param {function} onModifySearch - Callback to modify search
 */
const EmptyState = ({ onClearFilters, onModifySearch }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 text-center"
    >
      <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4">
        <FiSearch className="text-gray-400 dark:text-gray-500" size={32} />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        No Properties Found
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">
        We couldn't find any hotels matching your criteria. Try adjusting your filters or search parameters.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <Button variant="primary" onClick={onClearFilters}>
          <FiSliders className="mr-2" />
          Clear All Filters
        </Button>
        <Button variant="outline" onClick={onModifySearch}>
          Modify Search
        </Button>
      </div>
    </motion.div>
  );
};

export default EmptyState;