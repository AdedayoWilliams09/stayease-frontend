import { motion } from 'framer-motion';
import { FiStar, FiMapPin, FiPhone, FiMail, FiGlobe, FiClock, FiInfo } from 'react-icons/fi';

/**
 * HotelInfo Component - Displays hotel information
 * 
 * @param {object} hotel - Hotel data object
 * @param {function} onViewReviews - Callback to scroll to reviews
 */
const HotelInfo = ({ hotel, onViewReviews }) => {
  const {
    name,
    location,
    rating,
    reviewCount,
    description,
    policies,
    contact,
    propertyType,
  } = hotel;

  // Render star rating display
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <FiStar key={`full-${i}`} className="text-yellow-400 fill-yellow-400" size={18} />
        ))}
        {hasHalfStar && (
          <FiStar key="half" className="text-yellow-400 fill-yellow-400" size={18} />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <FiStar key={`empty-${i}`} className="text-gray-300 dark:text-gray-600" size={18} />
        ))}
      </div>
    );
  };

  // Policy items with icons
  const policyItems = policies ? [
    { icon: FiClock, label: 'Check-in', value: policies.checkIn },
    { icon: FiClock, label: 'Check-out', value: policies.checkOut },
    { icon: FiInfo, label: 'Cancellation', value: policies.cancellation },
    { icon: FiInfo, label: 'Children', value: policies.children },
    { icon: FiInfo, label: 'Pets', value: policies.pets },
  ] : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Hotel Name & Location */}
      <div>
        <div className="flex items-start justify-between flex-wrap gap-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {name}
          </h1>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
            {propertyType}
          </span>
        </div>
        
        <div className="flex items-center gap-2 mt-1 text-gray-600 dark:text-gray-400">
          <FiMapPin size={18} className="flex-shrink-0" />
          <span>{location}</span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          {renderStars()}
          <span className="font-semibold text-gray-900 dark:text-white">{rating}</span>
        </div>
        <button
          onClick={onViewReviews}
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
        >
          {reviewCount} reviews
        </button>
      </div>

      {/* Description */}
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Policies */}
      {policies && (
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 space-y-2">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
            Hotel Policies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {policyItems.map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <item.icon className="text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" size={16} />
                <div>
                  <span className="text-gray-500 dark:text-gray-400">{item.label}:</span>
                  <span className="text-gray-700 dark:text-gray-300 ml-1">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Information */}
      {contact && (
        <div className="flex flex-wrap gap-4 text-sm">
          {contact.phone && (
            <a href={`tel:${contact.phone}`} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FiPhone size={16} />
              <span>{contact.phone}</span>
            </a>
          )}
          {contact.email && (
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FiMail size={16} />
              <span>{contact.email}</span>
            </a>
          )}
          {contact.website && (
            <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FiGlobe size={16} />
              <span>{contact.website}</span>
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default HotelInfo;