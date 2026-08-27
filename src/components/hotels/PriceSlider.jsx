import { useState, useEffect } from 'react';
import * as Slider from '@radix-ui/react-slider';

/**
 * PriceSlider Component - Range slider for price filtering
 * 
 * @param {number} minValue - Current minimum price
 * @param {number} maxValue - Current maximum price
 * @param {number} minLimit - Absolute minimum price
 * @param {number} maxLimit - Absolute maximum price
 * @param {function} onChange - Callback with new min/max values
 */
const PriceSlider = ({
  minValue = 0,
  maxValue = 1000,
  minLimit = 0,
  maxLimit = 1000,
  onChange,
}) => {
  const [values, setValues] = useState([minValue, maxValue]);

  // Update internal state when props change
  useEffect(() => {
    setValues([minValue, maxValue]);
  }, [minValue, maxValue]);

  const handleValueChange = (newValues) => {
    setValues(newValues);
  };

  const handleValueCommit = (newValues) => {
    if (onChange) {
      onChange({ min: newValues[0], max: newValues[1] });
    }
  };

  const formatPrice = (value) => `$${value}`;

  return (
    <div className="space-y-4">
      {/* Display Values */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          {formatPrice(values[0])}
        </span>
        <span className="text-gray-500 dark:text-gray-400">to</span>
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          {formatPrice(values[1])}
        </span>
      </div>

      {/* Slider */}
      <Slider.Root
        className="relative flex items-center w-full h-5 touch-none"
        value={values}
        onValueChange={handleValueChange}
        onValueCommit={handleValueCommit}
        min={minLimit}
        max={maxLimit}
        step={5}
        aria-label="Price range"
      >
        <Slider.Track className="relative flex-1 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700">
          <Slider.Range className="absolute h-full rounded-full bg-blue-600 dark:bg-blue-400" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-5 h-5 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-400 shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          aria-label="Minimum price"
        />
        <Slider.Thumb
          className="block w-5 h-5 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-400 shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          aria-label="Maximum price"
        />
      </Slider.Root>

      {/* Min/Max Labels */}
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>{formatPrice(minLimit)}</span>
        <span>{formatPrice(maxLimit)}</span>
      </div>
    </div>
  );
};

export default PriceSlider;