// FILE: frontend/src/components/hotels/RoomTypes.jsx
// COMPLETE FIXED VERSION

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUsers, FiCheck, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Button from '../common/Button';

/**
 * RoomTypes Component - Displays available room types
 * 
 * @param {array} rooms - Array of room objects
 * @param {function} onSelectRoom - Callback when room is selected (for booking widget)
 * @param {string} selectedRoomId - Currently selected room ID
 * @param {number} hotelId - Hotel ID for navigation (REQUIRED)
 */
const RoomTypes = ({ 
  rooms = [], 
  onSelectRoom, 
  selectedRoomId = '', 
  hotelId 
}) => {
  const navigate = useNavigate();
  const [expandedRoom, setExpandedRoom] = useState(null);

  // Debug: log hotelId to check if it's being passed
  console.log('RoomTypes - hotelId:', hotelId);

  if (!rooms || rooms.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        No rooms available
      </div>
    );
  }

  const toggleExpand = (roomId) => {
    setExpandedRoom(expandedRoom === roomId ? null : roomId);
  };

  // Navigate to room detail
  const handleViewDetails = (roomId) => {
    // Check if hotelId is defined
    if (!hotelId) {
      console.error('hotelId is undefined in RoomTypes component. Cannot navigate to room detail.');
      return;
    }
    console.log(`Navigating to: /hotels/${hotelId}/rooms/${roomId}`);
    navigate(`/hotels/${hotelId}/rooms/${roomId}`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {rooms.map((room) => {
        const isSelected = selectedRoomId === room.id;
        const isExpanded = expandedRoom === room.id;
        const isAvailable = room.available !== false;

        return (
          <motion.div
            key={room.id}
            variants={cardVariants}
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
              isSelected ? 'ring-2 ring-blue-600 dark:ring-blue-400' : ''
            } ${!isAvailable ? 'opacity-60' : ''}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 p-4">
              {/* Room Image */}
              <div className="sm:w-48 h-32 sm:h-auto rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Room Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {room.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                      <FiUsers size={14} />
                      <span>{room.capacity} guests</span>
                      {!isAvailable && (
                        <span className="ml-2 px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-xs font-medium">
                          Sold Out
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      {formatPrice(room.price)}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">per night</div>
                  </div>
                </div>

                {/* Description (truncated) */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                  {room.description}
                </p>

                {/* Amenities (truncated) */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {room.amenities.slice(0, 3).map((amenity, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                  {room.amenities.length > 3 && (
                    <span className="px-2 py-0.5 text-xs text-gray-500 dark:text-gray-500">
                      +{room.amenities.length - 3} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 mt-3">
                  <button
                    onClick={() => toggleExpand(room.id)}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? 'Show less' : 'Show more'}
                    {isExpanded ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                  </button>
                  
                  <div className="ml-auto flex items-center gap-2">
                    {/* View Details Button - Navigates to Room Detail */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewDetails(room.id)}
                      disabled={!hotelId}
                    >
                      View Details
                    </Button>
                    
                    {/* Select Room Button - Updates booking widget */}
                    <Button
                      variant={isSelected ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => onSelectRoom && onSelectRoom(room.id)}
                      disabled={!isAvailable}
                    >
                      {isSelected ? (
                        <>
                          <FiCheck className="mr-1" />
                          Selected
                        </>
                      ) : (
                        'Select Room'
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Expanded Details */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-100 dark:border-gray-700"
                >
                  <div className="p-4 space-y-3">
                    {/* Full description */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Description
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {room.description}
                      </p>
                    </div>

                    {/* All amenities */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Amenities
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {room.amenities.map((amenity, index) => (
                          <span
                            key={index}
                            className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Capacity */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>👤 Max guests: {room.capacity}</span>
                      <span className={isAvailable ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                        {isAvailable ? '✓ Available' : '✗ Not Available'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default RoomTypes;