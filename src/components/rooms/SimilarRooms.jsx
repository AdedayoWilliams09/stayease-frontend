import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiUsers, FiMaximize2 } from 'react-icons/fi';
import Button from '../common/Button';

/**
 * SimilarRooms Component - Displays recommended rooms in the same hotel
 * 
 * @param {array} rooms - Array of similar room objects
 * @param {number} hotelId - Hotel ID for navigation
 * @param {string} title - Section title
 */
const SimilarRooms = ({ 
  rooms = [], 
  hotelId,
  title = 'Other Rooms You Might Like',
}) => {
  const carouselRef = useRef(null);

  if (!rooms || rooms.length === 0) {
    return null;
  }

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
          Explore other rooms at this hotel
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-800 rounded-full shadow-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Scroll left"
        >
          <FiChevronLeft size={24} />
        </button>

        {/* Carousel Track */}
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 px-1 hide-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {rooms.map((room) => (
            <div key={room.id} className="flex-shrink-0 w-[280px] sm:w-[300px]">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <Link to={`/hotels/${hotelId}/rooms/${room.id}`}>
                  {/* Image */}
                  <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                      {room.name}
                    </h3>
                    
                    <div className="flex items-center gap-3 mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <FiUsers size={14} />
                        {room.capacity} guests
                      </span>
                      {room.size && (
                        <span className="flex items-center gap-1">
                          <FiMaximize2 size={14} />
                          {room.size} m²
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                      <div>
                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                          {formatPrice(room.price)}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400"> / night</span>
                      </div>
                      <Button variant="primary" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-800 rounded-full shadow-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Scroll right"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.div>
  );
};

export default SimilarRooms;