import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCalendar, 
  FiUsers, 
  FiCheckCircle, 
  FiAlertCircle,
  FiShield,
  FiDollarSign,
  FiCreditCard
} from 'react-icons/fi';
import Button from '../common/Button';
import Input from '../common/Input';

/**
 * BookingWidget Component - Hotel booking form
 * 
 * @param {object} hotel - Hotel data object
 * @param {array} roomTypes - Available room types
 * @param {boolean} isSticky - Whether widget should be sticky
 */
const BookingWidget = ({ hotel, roomTypes = [], isSticky = true }) => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedRoomId, setSelectedRoomId] = useState(roomTypes[0]?.id || '');
  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState(null);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [nights, setNights] = useState(null);

  // Get today's date for min date
  const today = new Date().toISOString().split('T')[0];

  // Get selected room
  const selectedRoom = roomTypes.find(r => r.id === selectedRoomId);

  // Calculate total price when dates or room changes
  useEffect(() => {
    if (checkIn && checkOut && selectedRoom) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const diffDays = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
      
      if (diffDays > 0) {
        setNights(diffDays);
        setTotalPrice(selectedRoom.price * diffDays);
      } else {
        setNights(null);
        setTotalPrice(null);
      }
    } else {
      setNights(null);
      setTotalPrice(null);
    }
  }, [checkIn, checkOut, selectedRoom]);

  // Validate form
  const validateForm = () => {
    if (!checkIn) {
      setError('Please select a check-in date');
      return false;
    }
    if (!checkOut) {
      setError('Please select a check-out date');
      return false;
    }
    if (new Date(checkIn) >= new Date(checkOut)) {
      setError('Check-out must be after check-in');
      return false;
    }
    if (adults < 1) {
      setError('At least 1 adult is required');
      return false;
    }
    if (!selectedRoomId) {
      setError('Please select a room type');
      return false;
    }
    return true;
  };

  const handleCheckAvailability = () => {
    setError(null);
    
    if (!validateForm()) {
      return;
    }

    setIsChecking(true);
    setError(null);
    setIsAvailable(null);

    // Simulate API call
    setTimeout(() => {
      setIsChecking(false);
      // Random availability (80% chance available)
      const available = Math.random() > 0.2;
      setIsAvailable(available);
      
      if (!available) {
        setError('No rooms available for the selected dates. Please try different dates.');
      }
    }, 1500);
  };

  const handleBookNow = () => {
    if (!isAvailable) {
      handleCheckAvailability();
      return;
    }

    // Navigate to checkout with booking data
    const bookingData = {
      hotelId: hotel.id,
      hotelName: hotel.name,
      roomType: selectedRoom?.name,
      checkIn,
      checkOut,
      adults,
      children,
      totalPrice,
      nights,
      roomId: selectedRoomId,
    };

    // Store booking data in localStorage for checkout
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
    
    // Navigate to checkout (page will be built in future phase)
    navigate('/checkout');
  };

  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  // Trust badges
  const trustBadges = [
    { icon: FiShield, label: 'Best Price Guarantee' },
    { icon: FiCreditCard, label: 'Secure Booking' },
    { icon: FiCheckCircle, label: 'Free Cancellation' },
  ];

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden ${isSticky ? 'sticky top-24' : ''}`}>
      <div className="p-5 md:p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <FiDollarSign className="text-blue-600 dark:text-blue-400" />
          Book Your Stay
        </h3>

        {/* Date Inputs */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Input
              type="date"
              name="checkIn"
              label="Check-in"
              value={checkIn}
              onChange={(e) => { setCheckIn(e.target.value); setError(null); setIsAvailable(null); }}
              min={today}
              className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
            />
            <Input
              type="date"
              name="checkOut"
              label="Check-out"
              value={checkOut}
              onChange={(e) => { setCheckOut(e.target.value); setError(null); setIsAvailable(null); }}
              min={checkIn || today}
              className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
            />
          </div>

          {/* Guests */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Adults
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Decrease adults"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="w-8 text-center font-medium text-gray-900 dark:text-white">
                  {adults}
                </span>
                <button
                  onClick={() => setAdults(Math.min(10, adults + 1))}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Increase adults"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Children
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Decrease children"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="w-8 text-center font-medium text-gray-900 dark:text-white">
                  {children}
                </span>
                <button
                  onClick={() => setChildren(Math.min(10, children + 1))}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Increase children"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Room Type */}
          {roomTypes.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Room Type
              </label>
              <select
                value={selectedRoomId}
                onChange={(e) => { setSelectedRoomId(e.target.value); setError(null); setIsAvailable(null); }}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px]"
              >
                {roomTypes.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} - {formatPrice(room.price)}/night {!room.available ? '(Sold Out)' : ''}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Price Display */}
        {totalPrice && nights && selectedRoom && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {nights} night{nights > 1 ? 's' : ''} × {formatPrice(selectedRoom.price)}
                </span>
                <span className="block text-2xl font-bold text-gray-900 dark:text-white">
                  {formatPrice(totalPrice)}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Total for {adults} adult{adults > 1 ? 's' : ''}{children > 0 ? `, ${children} child${children > 1 ? 'ren' : ''}` : ''}
                </span>
              </div>
              {isAvailable && (
                <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                  <FiCheckCircle size={18} />
                  <span className="text-sm font-medium">Available!</span>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-2"
          >
            <FiAlertCircle className="text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" size={16} />
            <span className="text-sm text-red-700 dark:text-red-300">{error}</span>
          </motion.div>
        )}

        {/* Buttons */}
        <div className="mt-4 space-y-2">
          <Button
            variant="primary"
            isFullWidth
            onClick={handleBookNow}
            isLoading={isChecking}
            disabled={!selectedRoom?.available}
          >
            {isAvailable ? 'Book Now' : isChecking ? 'Checking...' : 'Check Availability'}
          </Button>
          
          <Button
            variant="outline"
            isFullWidth
            onClick={handleCheckAvailability}
            disabled={isChecking}
          >
            <FiCalendar className="mr-2" />
            Check Availability
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-3 gap-2">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <badge.icon className="text-gray-400 dark:text-gray-500 mb-1" size={18} />
                <span className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;