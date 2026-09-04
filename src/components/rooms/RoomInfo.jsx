import { motion } from 'framer-motion';
import { 
  FiUsers, 
  FiMaximize2, 
  FiInfo, 
  FiClock, 
  FiCalendar,
  FiCheckCircle
} from 'react-icons/fi';

/**
 * RoomInfo Component - Displays room information
 * 
 * @param {object} room - Room data object
 */
const RoomInfo = ({ room }) => {
  const {
    name,
    type,
    description,
    capacity,
    maxChildren,
    size,
    bedTypes,
    highlights,
    cancellationPolicy,
    checkInTime,
    checkOutTime,
    available,
  } = room;

  // Info items for display
  const infoItems = [
    { icon: FiUsers, label: 'Capacity', value: `${capacity} adults${maxChildren ? `, ${maxChildren} child` : ''}` },
    { icon: FiMaximize2, label: 'Room Size', value: `${size} m²` },
    { icon: FiClock, label: 'Check-in', value: checkInTime || '3:00 PM' },
    { icon: FiCalendar, label: 'Check-out', value: checkOutTime || '12:00 PM' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Room Name & Type */}
      <div>
        <div className="flex items-start justify-between flex-wrap gap-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {name}
          </h1>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            available 
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
              : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
          }`}>
            {available ? 'Available' : 'Sold Out'}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          {type}
        </p>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
            <item.icon className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={18} />
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{item.label}</div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">{item.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bed Types */}
      {bedTypes && bedTypes.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Bed Types
          </h3>
          <div className="flex flex-wrap gap-2">
            {bedTypes.map((bed, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 rounded-full">
                {bed}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Description
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Room Highlights
          </h3>
          <ul className="space-y-1.5">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <FiCheckCircle className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" size={16} />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Cancellation Policy */}
      {cancellationPolicy && (
        <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
          <FiInfo className="text-gray-400 dark:text-gray-500 flex-shrink-0 mt-0.5" size={16} />
          <span>Cancellation: {cancellationPolicy}</span>
        </div>
      )}
    </motion.div>
  );
};

export default RoomInfo;