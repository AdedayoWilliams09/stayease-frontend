

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiMapPin, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';

// Mock data for featured hotels
const mockHotels = [
  {
    id: 1,
    name: 'Grand Ocean Resort',
    location: 'Maldives',
    rating: 4.9,
    reviews: 234,
    price: 450,
    image: '/src/assets/images/hotel-1.jpg',
    discount: 20,
  },
  {
    id: 2,
    name: 'Mountain View Lodge',
    location: 'Swiss Alps',
    rating: 4.8,
    reviews: 189,
    price: 320,
    image: '/src/assets/images/hotel-2.jpg',
    discount: 15,
  },
  {
    id: 3,
    name: 'City Central Suites',
    location: 'New York',
    rating: 4.7,
    reviews: 456,
    price: 280,
    image: '/src/assets/images/hotel-3.jpg',
    discount: null,
  },
  {
    id: 4,
    name: 'Sapphire Beach Club',
    location: 'Bali',
    rating: 4.9,
    reviews: 312,
    price: 380,
    image: '/src/assets/images/hotel-4.jpg',
    discount: 25,
  },
  {
    id: 5,
    name: 'Royal Palace Hotel',
    location: 'Dubai',
    rating: 4.6,
    reviews: 278,
    price: 520,
    image: '/src/assets/images/hotel-5.jpg',
    discount: null,
  },
  {
    id: 6,
    name: 'Sunset Paradise',
    location: 'Santorini',
    rating: 4.8,
    reviews: 345,
    price: 410,
    image: '/src/assets/images/hotel-6.jpg',
    discount: 10,
  },
];

/**
 * HotelCard Component - Individual hotel card
 */
const HotelCard = ({ hotel }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="flex-shrink-0 w-[280px] sm:w-[300px] bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <Link to={`/hotels/${hotel.id}`} className="block">
        {/* Image */}
        <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
          <img
            src={hotel.image}
            alt={`${hotel.name} in ${hotel.location}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {hotel.discount && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {hotel.discount}% OFF
            </div>
          )}
          {/* Rating badge */}
          <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <FiStar className="text-yellow-400 fill-yellow-400" size={14} />
            {hotel.rating}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
            {hotel.name}
          </h3>
          
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm mt-1">
            <FiMapPin size={14} />
            <span>{hotel.location}</span>
          </div>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
            <div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                ${hotel.price}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400"> / night</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {hotel.reviews} reviews
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

/**
 * HotelSection Component - Featured hotels carousel
 */
const HotelSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    const newPosition = direction === 'left' 
      ? scrollPosition - scrollAmount 
      : scrollPosition + scrollAmount;
    
    container.scrollTo({
      left: newPosition,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setScrollPosition(scrollLeft);
    setShowLeftArrow(scrollLeft > 20);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      // Re-check on resize
      window.addEventListener('resize', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <Container>
        <SectionHeader
          title="Top Rated Properties"
          subtitle="Our guests' favorite hotels around the world"
          viewAllLink="/hotels"
        />

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <AnimatePresence>
            {showLeftArrow && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-800 rounded-full shadow-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Scroll left"
              >
                <FiChevronLeft size={24} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-1 hide-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {mockHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>

          {/* Right Arrow */}
          <AnimatePresence>
            {showRightArrow && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-800 rounded-full shadow-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Scroll right"
              >
                <FiChevronRight size={24} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Carousel Dots (optional) */}
        <div className="flex justify-center gap-2 mt-8">
          {mockHotels.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === 0 ? 'w-8 bg-blue-600 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Container>

      {/* Hide scrollbar CSS */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default HotelSection;