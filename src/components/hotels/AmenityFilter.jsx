import { FiWifi, FiCoffee, FiTruck, FiSun, FiDroplet, FiAward } from 'react-icons/fi';

// Map amenity to icon
const amenityIcons = {
  'WiFi': FiWifi,
  'Pool': FiDroplet,
  'Parking': FiTruck,
  'Restaurant': FiCoffee,
  'Gym': FiSun,
  'Spa': FiAward,
  'Beachfront': FiSun,
};

/**
 * AmenityFilter Component - Amenity checkbox filter
 * 
 * @param {array} selectedAmenities - Array of selected amenity names
 * @param {array} amenities - Array of all available amenities
 * @param {function} onChange - Callback with updated selected amenities
 */
const AmenityFilter = ({
  selectedAmenities = [],
  amenities = [],
  onChange,
}) => {
  const handleToggle = (amenity) => {
    const newSelection = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter((a) => a !== amenity)
      : [...selectedAmenities, amenity];
    
    if (onChange) {
      onChange(newSelection);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      {amenities.map((amenity) => {
        const Icon = amenityIcons[amenity];
        const isSelected = selectedAmenities.includes(amenity);
        
        return (
          <button
            key={amenity}
            onClick={() => handleToggle(amenity)}
            className={`
              flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
              transition-all duration-200
              min-h-[44px]
              ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }
            `}
            aria-label={`Filter by ${amenity}`}
            aria-pressed={isSelected}
          >
            {Icon && <Icon size={16} className="flex-shrink-0" />}
            <span>{amenity}</span>
          </button>
        );
      })}
    </div>
  );
};

export default AmenityFilter;