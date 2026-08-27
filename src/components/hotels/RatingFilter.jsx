import { FiStar } from 'react-icons/fi';

/**
 * RatingFilter Component - Star rating filter (1-5 stars)
 * 
 * @param {number} selectedRating - Currently selected rating (0 = all)
 * @param {function} onChange - Callback with new rating value
 */
const RatingFilter = ({ selectedRating = 0, onChange }) => {
  const ratings = [
    { value: 0, label: 'All Stars' },
    { value: 1, label: '1+ Stars' },
    { value: 2, label: '2+ Stars' },
    { value: 3, label: '3+ Stars' },
    { value: 4, label: '4+ Stars' },
    { value: 5, label: '5 Stars' },
  ];

  const handleClick = (value) => {
    if (onChange) {
      onChange(value === selectedRating ? 0 : value);
    }
  };

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar
        key={i}
        className={`${i < count ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
        size={16}
      />
    ));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {ratings.map((rating) => (
        <button
          key={rating.value}
          onClick={() => handleClick(rating.value)}
          className={`
            flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
            transition-all duration-200
            min-h-[36px]
            ${
              selectedRating === rating.value
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }
          `}
          aria-label={`Filter by ${rating.label}`}
          aria-pressed={selectedRating === rating.value}
        >
          {rating.value > 0 && renderStars(rating.value)}
          {rating.value === 0 && rating.label}
          {rating.value > 0 && <span className="ml-0.5">+</span>}
        </button>
      ))}
    </div>
  );
};

export default RatingFilter;