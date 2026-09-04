import { motion } from 'framer-motion';
import {
  FiWifi,
  FiCoffee,
  FiTv,
  FiLock,
  FiWind,
  FiUsers,
  FiSun,
  FiCloud,
  FiHeart,
  FiDroplet,
  FiZap,
  FiAward,
  FiHome,
  FiSmartphone,
  FiClock,
  FiMonitor,
} from 'react-icons/fi';

// Map amenity names to icons
const amenityIconMap = {
  'King Bed': FiHome,
  'Queen Bed': FiHome,
  'King Size Bed (180cm x 200cm)': FiHome,
  'Queen Size Bed (160cm x 200cm)': FiHome,
  'Day Bed (can convert to single)': FiHome,
  'Sofa Bed': FiHome,
  'Ocean View': FiSun,
  'Mountain View': FiCloud,
  'City View': FiMonitor,
  'Garden View': FiSun,
  'Panoramic View': FiSun,
  'Marble Bathroom': FiDroplet,
  'Rain Shower': FiDroplet,
  'Bath Tub': FiDroplet,
  'Outdoor Shower': FiDroplet,
  'Private Pool': FiDroplet,
  'Glass Floor': FiAward,
  'Direct Water Access': FiDroplet,
  'Butler Service': FiAward,
  'Free WiFi': FiWifi,
  'WiFi': FiWifi,
  'Smart TV': FiTv,
  'TV': FiTv,
  'Minibar': FiCoffee,
  'Safe': FiLock,
  'Air Conditioning': FiWind,
  'Room Service': FiCoffee,
  'Kitchenette': FiCoffee,
  'Kitchen': FiCoffee,
  'Fireplace': FiHeart,
  'Balcony': FiSun,
  'Ski Storage': FiCloud,
  'Living Area': FiHome,
  'Kids Club Access': FiUsers,
  'Breakfast Included': FiCoffee,
  'Secure Storage': FiLock,
  'Soundproofing': FiZap,
  'Premium Bedding': FiAward,
  'Work Desk': FiSmartphone,
  'Alarm Clock': FiClock,
  'Private Entrance': FiHome,
};

/**
 * RoomAmenitiesList Component - Displays room amenities
 * 
 * @param {array} amenities - Array of amenity strings
 */
const RoomAmenitiesList = ({ amenities = [] }) => {
  if (!amenities || amenities.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        No amenities listed
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
    >
      {amenities.map((amenity, index) => {
        const Icon = amenityIconMap[amenity] || FiAward;
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700"
          >
            <Icon className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={18} />
            <span className="text-sm text-gray-700 dark:text-gray-300">{amenity}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default RoomAmenitiesList;