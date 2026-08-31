import { motion } from 'framer-motion';
import { FiStar, FiCheckCircle, FiThumbsUp } from 'react-icons/fi';

/**
 * ReviewCard Component - Individual review display
 * 
 * @param {object} review - Review data object
 */
const ReviewCard = ({ review }) => {
  const { user, rating, date, comment, verified, helpful } = review;

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Render star rating
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar
        key={i}
        className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
        size={14}
      />
    ));
  };

  // Get user initials for avatar fallback
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden flex-shrink-0 flex items-center justify-center text-sm font-semibold text-gray-600 dark:text-gray-400">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
          ) : (
            getInitials(user.name)
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">{user.name}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                {user.location || ''}
              </span>
            </div>
            <div className="flex items-center gap-1">
              {renderStars()}
            </div>
          </div>

          {/* Verified badge and date */}
          <div className="flex items-center gap-3 mt-0.5 text-xs text-gray-500 dark:text-gray-400">
            {verified && (
              <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
                <FiCheckCircle size={12} />
                Verified Stay
              </span>
            )}
            <span>{formatDate(date)}</span>
          </div>

          {/* Comment */}
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
            {comment}
          </p>

          {/* Helpful count */}
          {helpful > 0 && (
            <div className="flex items-center gap-1 mt-2 text-xs text-gray-400 dark:text-gray-500">
              <FiThumbsUp size={12} />
              <span>{helpful} people found this helpful</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;