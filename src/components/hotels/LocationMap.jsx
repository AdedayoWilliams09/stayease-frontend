import { motion } from 'framer-motion';
import { FiMapPin, FiNavigation, FiExternalLink, FiMap } from 'react-icons/fi';
import Button from '../common/Button';

/**
 * LocationMap Component - Displays hotel location and nearby places
 * 
 * @param {object} locationDetails - Location details object
 * @param {string} hotelName - Hotel name for map link
 */
const LocationMap = ({ locationDetails, hotelName }) => {
  if (!locationDetails) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        Location information not available
      </div>
    );
  }

  const { address, nearby = [], coordinates } = locationDetails;

  // Generate Google Maps URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address || hotelName
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      {/* Map Placeholder */}
      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700">
        {/* Placeholder map with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center flex-col">
          <FiMap className="text-blue-400 dark:text-blue-500" size={48} />
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm font-medium">
            Map View
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Interactive map coming soon
          </p>
        </div>

        {/* Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-6 h-6 bg-red-500 rounded-full shadow-lg animate-pulse" />
            <div className="absolute -inset-1 bg-red-500/20 rounded-full animate-ping" />
          </div>
        </div>

        {/* Open in Google Maps button */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:shadow-lg transition-shadow flex items-center gap-1.5"
        >
          <FiExternalLink size={14} />
          Open in Maps
        </a>
      </div>

      {/* Address */}
      <div className="flex items-start gap-2 text-sm">
        <FiMapPin className="text-gray-400 dark:text-gray-500 flex-shrink-0 mt-0.5" size={18} />
        <div>
          <span className="text-gray-700 dark:text-gray-300 font-medium">Address:</span>
          <span className="text-gray-600 dark:text-gray-400 ml-1">{address}</span>
        </div>
      </div>

      {/* Nearby Places */}
      {nearby && nearby.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <FiNavigation size={16} className="text-blue-600 dark:text-blue-400" />
            Nearby Landmarks
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {nearby.map((place, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50"
              >
                <span className="text-sm text-gray-700 dark:text-gray-300">{place.name}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 px-2 py-0.5 rounded-full">
                  {place.distance}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Button */}
      <Button variant="outline" onClick={() => window.open(googleMapsUrl, '_blank')}>
        <FiMap className="mr-2" />
        View on Google Maps
      </Button>
    </motion.div>
  );
};

export default LocationMap;