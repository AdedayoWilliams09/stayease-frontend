import { FiGrid, FiMap, FiChevronDown } from 'react-icons/fi';

/**
 * ResultsSummary Component - Results count, sort, and view toggle
 * 
 * @param {number} totalResults - Total number of hotels found
 * @param {string} location - Current search location
 * @param {string} sortBy - Current sort option
 * @param {function} onSortChange - Callback when sort changes
 * @param {string} viewMode - 'list' or 'map'
 * @param {function} onViewModeChange - Callback when view mode changes
 */
const ResultsSummary = ({
  totalResults = 0,
  location = '',
  sortBy = 'recommended',
  onSortChange,
  viewMode = 'list',
  onViewModeChange,
}) => {
  const sortOptions = [
    { value: 'recommended', label: 'Recommended' },
    { value: 'price_asc', label: 'Price: Low to High' },
    { value: 'price_desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Rating' },
    { value: 'distance', label: 'Distance' },
  ];

  const handleSortChange = (e) => {
    if (onSortChange) {
      onSortChange(e.target.value);
    }
  };

  const getLocationDisplay = () => {
    if (location) {
      return ` in ${location}`;
    }
    return '';
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4">
      {/* Results Count */}
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold text-gray-900 dark:text-white">
          {totalResults} properties found
        </span>
        <span className="text-gray-500 dark:text-gray-400">
          {getLocationDisplay()}
        </span>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="appearance-none px-4 py-2 pr-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px] cursor-pointer"
            aria-label="Sort hotels by"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <FiChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none"
            size={18}
          />
        </div>

        {/* View Toggle */}
        <div className="flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <button
            onClick={() => onViewModeChange && onViewModeChange('list')}
            className={`
              px-3 py-2 text-sm font-medium transition-colors
              min-h-[44px] flex items-center gap-1.5
              ${
                viewMode === 'list'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }
            `}
            aria-label="List view"
            aria-pressed={viewMode === 'list'}
          >
            <FiGrid size={18} />
            <span className="hidden sm:inline">List</span>
          </button>
          <button
            onClick={() => onViewModeChange && onViewModeChange('map')}
            className={`
              px-3 py-2 text-sm font-medium transition-colors
              min-h-[44px] flex items-center gap-1.5
              border-l border-gray-200 dark:border-gray-700
              ${
                viewMode === 'map'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }
            `}
            aria-label="Map view"
            aria-pressed={viewMode === 'map'}
          >
            <FiMap size={18} />
            <span className="hidden sm:inline">Map</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsSummary;