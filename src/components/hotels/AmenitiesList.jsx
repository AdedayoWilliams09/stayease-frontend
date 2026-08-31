import { motion } from 'framer-motion';
import {
  FiWifi,
  FiCoffee,
  FiTruck,
  FiSun,
  FiDroplet,
  FiAward,
  FiUsers,
  FiHome,
  FiActivity,
  FiShoppingBag,
  FiBriefcase,
  FiHeart,
  FiStar,
  FiSmile,
 
  FiPackage,
  FiCloud,
} from 'react-icons/fi';

// Map amenity names to icons
const amenityIconMap = {
  'Free WiFi': FiWifi,
  'WiFi': FiWifi,
  'Concierge Service': FiSmile,
  'Daily Housekeeping': FiHome,
  'Laundry Service': FiPackage,
  'On-site Restaurant': FiCoffee,
  'Restaurant': FiCoffee,
  'Bar/Lounge': FiCoffee,
  'Room Service': FiTruck,
  'Breakfast Buffet': FiCoffee,
  'Spa': FiAward,
  'Fitness Center': FiActivity,
  'Yoga Classes': FiActivity,
  'Massage Services': FiHeart,
  'Meeting Rooms': FiBriefcase,
  'Business Center': FiBriefcase,
  'Secretarial Services': FiBriefcase,
  'Beachfront': FiSun,
  'Infinity Pool': FiDroplet,
  'Pool': FiDroplet,
  'Tennis Courts': FiActivity,
  'Water Sports': FiActivity,
  'Parking': FiTruck,
  'Gym': FiActivity,
};

// Category display names and icons
const categoryConfig = {
  general: { label: 'General', icon: FiHome },
  'food-drink': { label: 'Food & Drink', icon: FiCoffee },
  wellness: { label: 'Wellness', icon: FiHeart },
  business: { label: 'Business', icon: FiBriefcase },
  outdoor: { label: 'Outdoor', icon: FiSun },
};

/**
 * AmenitiesList Component - Displays categorized amenities
 * 
 * @param {object} amenitiesDetails - Categorized amenities object
 */
const AmenitiesList = ({ amenitiesDetails }) => {
  if (!amenitiesDetails || Object.keys(amenitiesDetails).length === 0) {
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
      className="space-y-6"
    >
      {Object.entries(amenitiesDetails).map(([categoryKey, amenities]) => {
        const config = categoryConfig[categoryKey] || { label: categoryKey, icon: FiStar };
        const Icon = config.icon;

        return (
          <motion.div key={categoryKey} variants={itemVariants}>
            <div className="flex items-center gap-2 mb-3">
              <Icon className="text-blue-600 dark:text-blue-400" size={20} />
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                {config.label}
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {amenities.map((amenity, index) => {
                const AmenityIcon = amenityIconMap[amenity] || FiStar;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                  >
                    <AmenityIcon className="text-gray-600 dark:text-gray-400" size={16} />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{amenity}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default AmenitiesList;