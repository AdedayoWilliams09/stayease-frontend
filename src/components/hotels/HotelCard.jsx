import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiStar, 
  FiMapPin, 
  FiChevronLeft, 
  FiChevronRight,
  FiWifi,
  FiCoffee,
  FiTruck,
  FiUsers,
  FiDroplet,
  FiSun,
  FiAward,
  FiHeart
} from 'react-icons/fi';
import Button from '../common/Button';

// Map amenity names to icons
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
 * HotelCard Component - Individual hotel card with image carousel
 * 
 * @param {object} hotel - Hotel data object
 * @param {number} checkIn - Check-in date (for total price calculation)
 * @param {number} checkOut - Check-out date (for total price calculation)
 * @param {number} guests - Number of guests
 * @param {boolean} showWishlist - Show wishlist button
 * @param {function} onWishlistToggle - Wishlist toggle handler
 */
const HotelCard = ({ 
  hotel, 
  checkIn = null, 
  checkOut = null, 
  guests = 2,
  showWishlist = false,
  onWishlistToggle = null,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const {
    id,
    name,
    location,
    description,
    images,
    rating,
    reviewCount,
    price,
    amenities,
    propertyType,
    featured,
    distance,
  } = hotel;

  // Calculate total price (if dates provided)
  const calculateTotalPrice = () => {
    if (!checkIn || !checkOut) return null;
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    if (nights <= 0) return null;
    return price * nights;
  };

  const totalPrice = calculateTotalPrice();
  const nights = totalPrice ? Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)) : null;

  // Image carousel navigation
  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  // Wishlist toggle
  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    if (onWishlistToggle) {
      onWishlistToggle(hotel.id);
    }
  };

  // Render star rating
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <FiStar key={`full-${i}`} className="text-yellow-400 fill-yellow-400" size={16} />
        ))}
        {hasHalfStar && (
          <FiStar key="half" className="text-yellow-400 fill-yellow-400" size={16} />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <FiStar key={`empty-${i}`} className="text-gray-300 dark:text-gray-600" size={16} />
        ))}
      </div>
    );
  };

  // Render amenity badges (show first 4)
  const renderAmenities = () => {
    const displayAmenities = amenities.slice(0, 4);
    return displayAmenities.map((amenity) => {
      const Icon = amenityIcons[amenity];
      return Icon ? (
        <div
          key={amenity}
          className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
          title={amenity}
        >
          <Icon size={14} />
        </div>
      ) : null;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
    >
      <Link to={`/hotels/${id}`} className="block flex-1">
        {/* Image Gallery */}
        <div className="relative h-52 sm:h-56 bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`${name} in ${location} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              loading="lazy"
            />
          </AnimatePresence>

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </div>
          )}

          {/* Wishlist Button */}
          {showWishlist && (
            <button
              onClick={handleWishlistToggle}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <FiHeart
                className={`transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-400'}`}
                size={20}
              />
            </button>
          )}

          {/* Image Navigation Controls */}
          {images.length > 1 && (
            <>
              {/* Left Arrow */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous image"
              >
                <FiChevronLeft size={18} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next image"
              >
                <FiChevronRight size={18} />
              </button>

              {/* Thumbnail Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => goToImage(e, index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'w-6 bg-white'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 flex flex-col flex-1">
          {/* Property Type & Distance */}
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1.5">
            <span className="uppercase tracking-wider">{propertyType}</span>
            <span>{distance} km from center</span>
          </div>

          {/* Name */}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
            {name}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mt-0.5">
            <FiMapPin size={14} />
            <span>{location}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            {renderStars()}
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {rating}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              ({reviewCount} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2 flex-1">
            {description}
          </p>

          {/* Amenities */}
          <div className="flex gap-1.5 mt-3">
            {renderAmenities()}
            {amenities.length > 4 && (
              <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                +{amenities.length - 4} more
              </span>
            )}
          </div>

          {/* Price & Action */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
            <div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ${price}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400"> / night</span>
              {totalPrice && nights && (
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Total: ${totalPrice} for {nights} night{nights > 1 ? 's' : ''}
                </div>
              )}
            </div>
            <Button variant="primary" size="sm">
              View Details
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default HotelCard;