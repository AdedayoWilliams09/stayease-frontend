import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiCalendar, FiUsers, FiMapPin } from 'react-icons/fi';
import Container from '../common/Container';
import Button from '../common/Button';
import Input from '../common/Input';

/**
 * SearchBar Component - Sticky search bar for hotel listing
 * 
 * @param {object} initialValues - Initial search values from URL
 * @param {function} onSearch - Callback when search is updated
 */
const SearchBar = ({ initialValues = {}, onSearch }) => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    location: initialValues.location || '',
    checkIn: initialValues.checkIn || '',
    checkOut: initialValues.checkOut || '',
    guests: initialValues.guests || 2,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Build query params
    const params = new URLSearchParams();
    if (searchData.location) params.append('location', searchData.location);
    if (searchData.checkIn) params.append('checkIn', searchData.checkIn);
    if (searchData.checkOut) params.append('checkOut', searchData.checkOut);
    if (searchData.guests) params.append('guests', searchData.guests);

    // Also preserve existing filter params from URL
    const currentParams = new URLSearchParams(window.location.search);
    const filterParams = ['sort', 'priceMin', 'priceMax', 'rating', 'amenities', 'propertyTypes'];
    filterParams.forEach((key) => {
      const value = currentParams.get(key);
      if (value) params.append(key, value);
    });

    setTimeout(() => {
      setIsLoading(false);
      navigate(`/hotels?${params.toString()}`);
      if (onSearch) {
        onSearch(searchData);
      }
    }, 500);
  };

  // Get today's date for min date attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="sticky top-16 sm:top-20 z-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-3 md:py-4"
        >
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
            {/* Location */}
            <div className="flex-1 min-w-[150px]">
              <Input
                type="text"
                name="location"
                placeholder="Destination"
                value={searchData.location}
                onChange={handleInputChange}
                icon={FiMapPin}
                className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
            </div>

            {/* Check-in */}
            <div className="flex-1 min-w-[140px]">
              <Input
                type="date"
                name="checkIn"
                value={searchData.checkIn}
                onChange={handleInputChange}
                icon={FiCalendar}
                min={today}
                className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
            </div>

            {/* Check-out */}
            <div className="flex-1 min-w-[140px]">
              <Input
                type="date"
                name="checkOut"
                value={searchData.checkOut}
                onChange={handleInputChange}
                icon={FiCalendar}
                min={searchData.checkIn || today}
                className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
            </div>

            {/* Guests */}
            <div className="flex-1 min-w-[100px]">
              <Input
                type="number"
                name="guests"
                value={searchData.guests}
                onChange={handleInputChange}
                icon={FiUsers}
                min={1}
                max={20}
                className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
            </div>

            {/* Update Button */}
            <div className="flex-shrink-0">
              <Button
                type="submit"
                variant="primary"
                isLoading={isLoading}
                isFullWidth
                className="h-[44px]"
              >
                <FiSearch className="mr-2" />
                Update Search
              </Button>
            </div>
          </form>
        </motion.div>
      </Container>
    </div>
  );
};

export default SearchBar;