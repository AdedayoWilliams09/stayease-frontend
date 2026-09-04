import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
 * RoomBookingWidget Component - Room booking form
 * 
 * @param {object} room - Room data object
 * @param {number} hotelId - Hotel ID
 * @param {string} hotelName - Hotel name
 */
const RoomBookingWidget = ({ room, hotelId, hotelName }) => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState(null);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [nights, setNights] = useState(null);

  // Get today's date for min date
  const today = new Date().toISOString().split('T')[0];

  // Calculate total price when dates change
  useEffect(() => {
    if (checkIn && checkOut && room) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const diffDays = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
      
      if (diffDays > 0) {
        setNights(diffDays);
        setTotalPrice(room.price * diffDays);
      } else {
        setNights(null);
        setTotalPrice(null);
      }
    } else {
      setNights(null);
      setTotalPrice(null);
    }
  }, [checkIn, checkOut, room]);

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
    if (children > (room.maxChildren || 0)) {
      setError(`Maximum ${room.maxChildren} children allowed`);
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
      // Check if room is available (from mock data)
      const available = room.available !== false;
      setIsAvailable(available);
      
      if (!available) {
        setError('This room is not available. Please select another room.');
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
      hotelId: hotelId,
      hotelName: hotelName,
      roomId: room.id,
      roomName: room.name,
      checkIn,
      checkOut,
      adults,
      children,
      totalPrice,
      nights,
      pricePerNight: room.price,
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
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden sticky top-24">
      <div className="p-5 md:p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <FiDollarSign className="text-blue-600 dark:text-blue-400" />
          Book This Room
        </h3>

        {/* Price Display */}
        <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatPrice(room.price)}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">/ night</span>
          </div>
          {totalPrice && nights && (
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Total: {formatPrice(totalPrice)} for {nights} night{nights > 1 ? 's' : ''}
            </div>
          )}
        </div>

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
                  onClick={() => setAdults(Math.min(room.capacity, adults + 1))}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Increase adults"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Max {room.capacity} adults
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
                  onClick={() => setChildren(Math.min(room.maxChildren || 0, children + 1))}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Increase children"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Max {room.maxChildren || 0} children
              </div>
            </div>
          </div>
        </div>

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

        {/* Availability Status */}
        {isAvailable !== null && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-3 p-3 rounded-lg flex items-center gap-2 ${
              isAvailable 
                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300'
                : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300'
            }`}
          >
            {isAvailable ? (
              <>
                <FiCheckCircle className="flex-shrink-0" size={16} />
                <span className="text-sm font-medium">Available! Book now.</span>
              </>
            ) : (
              <>
                <FiAlertCircle className="flex-shrink-0" size={16} />
                <span className="text-sm font-medium">Not available for selected dates.</span>
              </>
            )}
          </motion.div>
        )}

        {/* Buttons */}
        <div className="mt-4 space-y-2">
          <Button
            variant="primary"
            isFullWidth
            onClick={handleBookNow}
            isLoading={isChecking}
            disabled={!room.available}
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

export default RoomBookingWidget;