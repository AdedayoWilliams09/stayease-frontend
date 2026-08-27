/**
 * PropertyTypeFilter Component - Property type checkbox filter
 * 
 * @param {array} selectedTypes - Array of selected property types
 * @param {array} propertyTypes - Array of all available property types
 * @param {function} onChange - Callback with updated selected types
 */
const PropertyTypeFilter = ({
  selectedTypes = [],
  propertyTypes = [],
  onChange,
}) => {
  const handleToggle = (type) => {
    const newSelection = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];
    
    if (onChange) {
      onChange(newSelection);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {propertyTypes.map((type) => {
        const isSelected = selectedTypes.includes(type);
        
        return (
          <button
            key={type}
            onClick={() => handleToggle(type)}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium
              transition-all duration-200
              min-h-[36px]
              ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }
            `}
            aria-label={`Filter by ${type}`}
            aria-pressed={isSelected}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
};

export default PropertyTypeFilter;