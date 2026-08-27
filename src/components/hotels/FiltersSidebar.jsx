import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import PriceSlider from './PriceSlider';
import RatingFilter from './RatingFilter';
import AmenityFilter from './AmenityFilter';
import PropertyTypeFilter from './PropertyTypeFilter';
import Button from '../common/Button';
import { allAmenities, allPropertyTypes } from '../../data/mockHotels';

/**
 * FiltersSidebar Component - Filter panel with all filter types
 * 
 * @param {object} filters - Current filter values
 * @param {function} onFilterChange - Callback when any filter changes
 * @param {function} onClearFilters - Callback to clear all filters
 */
const FiltersSidebar = ({
  filters = {},
  onFilterChange,
  onClearFilters,
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    rating: true,
    amenities: true,
    propertyTypes: true,
  });

  const {
    priceRange = { min: 0, max: 1000 },
    rating = 0,
    amenities = [],
    propertyTypes = [],
  } = filters;

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handlePriceChange = (newRange) => {
    if (onFilterChange) {
      onFilterChange({ ...filters, priceRange: newRange });
    }
  };

  const handleRatingChange = (newRating) => {
    if (onFilterChange) {
      onFilterChange({ ...filters, rating: newRating });
    }
  };

  const handleAmenitiesChange = (newAmenities) => {
    if (onFilterChange) {
      onFilterChange({ ...filters, amenities: newAmenities });
    }
  };

  const handlePropertyTypesChange = (newTypes) => {
    if (onFilterChange) {
      onFilterChange({ ...filters, propertyTypes: newTypes });
    }
  };

  const handleClearAll = () => {
    if (onClearFilters) {
      onClearFilters();
    }
  };

  // Count active filters
  const activeFilterCount = () => {
    let count = 0;
    if (rating > 0) count++;
    if (amenities.length > 0) count++;
    if (propertyTypes.length > 0) count++;
    if (priceRange.min > 0 || priceRange.max < 1000) count++;
    return count;
  };

  // Filter content
  const FilterContent = () => (
    <div className="space-y-6">
      {/* Price Section */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-left"
          aria-expanded={expandedSections.price}
        >
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
            Price Range
          </h3>
          {expandedSections.price ? (
            <FiChevronUp className="text-gray-400" />
          ) : (
            <FiChevronDown className="text-gray-400" />
          )}
        </button>
        <AnimatePresence>
          {expandedSections.price && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 overflow-hidden"
            >
              <PriceSlider
                minValue={priceRange.min}
                maxValue={priceRange.max}
                minLimit={0}
                maxLimit={1000}
                onChange={handlePriceChange}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Rating Section */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
        <button
          onClick={() => toggleSection('rating')}
          className="flex items-center justify-between w-full text-left"
          aria-expanded={expandedSections.rating}
        >
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
            Star Rating
          </h3>
          {expandedSections.rating ? (
            <FiChevronUp className="text-gray-400" />
          ) : (
            <FiChevronDown className="text-gray-400" />
          )}
        </button>
        <AnimatePresence>
          {expandedSections.rating && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 overflow-hidden"
            >
              <RatingFilter
                selectedRating={rating}
                onChange={handleRatingChange}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Amenities Section */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
        <button
          onClick={() => toggleSection('amenities')}
          className="flex items-center justify-between w-full text-left"
          aria-expanded={expandedSections.amenities}
        >
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
            Amenities
          </h3>
          {expandedSections.amenities ? (
            <FiChevronUp className="text-gray-400" />
          ) : (
            <FiChevronDown className="text-gray-400" />
          )}
        </button>
        <AnimatePresence>
          {expandedSections.amenities && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 overflow-hidden"
            >
              <AmenityFilter
                selectedAmenities={amenities}
                amenities={allAmenities}
                onChange={handleAmenitiesChange}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Property Type Section */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
        <button
          onClick={() => toggleSection('propertyTypes')}
          className="flex items-center justify-between w-full text-left"
          aria-expanded={expandedSections.propertyTypes}
        >
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
            Property Type
          </h3>
          {expandedSections.propertyTypes ? (
            <FiChevronUp className="text-gray-400" />
          ) : (
            <FiChevronDown className="text-gray-400" />
          )}
        </button>
        <AnimatePresence>
          {expandedSections.propertyTypes && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 overflow-hidden"
            >
              <PropertyTypeFilter
                selectedTypes={propertyTypes}
                propertyTypes={allPropertyTypes}
                onChange={handlePropertyTypesChange}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Clear Filters */}
      <div className="pt-2">
        <Button
          variant="outline"
          isFullWidth
          onClick={handleClearAll}
          disabled={activeFilterCount() === 0}
        >
          Clear All Filters
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 flex-shrink-0">
        <div className="sticky top-40 max-h-[calc(100vh-11rem)] overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <FiFilter size={20} />
                Filters
              </h2>
              {activeFilterCount() > 0 && (
                <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                  {activeFilterCount()}
                </span>
              )}
            </div>
            <FilterContent />
          </div>
        </div>
      </aside>

      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-30">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors min-h-[48px]"
          aria-label="Open filters"
        >
          <FiFilter size={20} />
          Filters
          {activeFilterCount() > 0 && (
            <span className="text-xs bg-white/30 px-2 py-0.5 rounded-full">
              {activeFilterCount()}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-50 max-h-[85vh] bg-white dark:bg-gray-900 rounded-t-2xl shadow-2xl lg:hidden"
            >
              {/* Handle */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <FiFilter size={20} />
                  Filters
                  {activeFilterCount() > 0 && (
                    <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                      {activeFilterCount()}
                    </span>
                  )}
                </h2>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Close filters"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 overflow-y-auto max-h-[calc(85vh-5rem)]">
                <FilterContent />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FiltersSidebar;