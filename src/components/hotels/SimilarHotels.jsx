import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import HotelCard from './HotelCard';

/**
 * SimilarHotels Component - Displays recommended hotels
 * 
 * @param {array} hotels - Array of similar hotel objects
 * @param {string} title - Section title
 * @param {string} subtitle - Section subtitle
 */
const SimilarHotels = ({ 
  hotels = [], 
  title = 'Similar Hotels You Might Like',
  subtitle = 'Find your perfect stay'
}) => {
  const carouselRef = useRef(null);

  if (!hotels || hotels.length === 0) {
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
        {subtitle && (
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{subtitle}</p>
        )}
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
          {hotels.map((hotel) => (
            <div key={hotel.id} className="flex-shrink-0 w-[280px] sm:w-[300px]">
              <HotelCard hotel={hotel} showWishlist={false} />
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

export default SimilarHotels;