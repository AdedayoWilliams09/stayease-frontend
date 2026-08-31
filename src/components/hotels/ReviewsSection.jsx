import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiEdit2, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ReviewCard from './ReviewCard';
import Button from '../common/Button';

/**
 * ReviewsSection Component - Displays all reviews with summary
 * 
 * @param {array} reviews - Array of review objects
 * @param {number} rating - Overall rating
 * @param {number} reviewCount - Total number of reviews
 * @param {boolean} isAuthenticated - Whether user is authenticated
 * @param {boolean} hasStayed - Whether user has stayed at the hotel
 */
const ReviewsSection = ({
  reviews = [],
  rating = 0,
  reviewCount = 0,
  isAuthenticated = false,
  hasStayed = false,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showWriteReview, setShowWriteReview] = useState(false);

  const REVIEWS_PER_PAGE = 3;
  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);

  // Get current page reviews
  const getCurrentReviews = () => {
    const start = (currentPage - 1) * REVIEWS_PER_PAGE;
    const end = start + REVIEWS_PER_PAGE;
    return reviews.slice(start, end);
  };

  const currentReviews = getCurrentReviews();

  // Pagination controls
  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const goToPrevious = () => goToPage(currentPage - 1);
  const goToNext = () => goToPage(currentPage + 1);

  // Calculate rating breakdown
  const ratingBreakdown = {
    cleanliness: 4.8,
    location: 4.7,
    service: 4.9,
    value: 4.5,
  };

  // Rating breakdown component
  const RatingBreakdownItem = ({ label, value }) => {
    const percentage = (value / 5) * 100;
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600 dark:text-gray-400 w-20">{label}</span>
        <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 dark:bg-blue-400 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-sm font-medium text-gray-900 dark:text-white w-8 text-right">
          {value.toFixed(1)}
        </span>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Rating Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Overall Rating */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="text-5xl font-bold text-gray-900 dark:text-white">{rating.toFixed(1)}</div>
          <div className="flex justify-center gap-0.5 my-2">
            {Array.from({ length: 5 }, (_, i) => (
              <FiStar
                key={i}
                className={`${i < Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                size={20}
              />
            ))}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Based on {reviewCount} reviews
          </div>
        </div>

        {/* Rating Breakdown */}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Rating Breakdown
          </h4>
          <div className="space-y-2">
            <RatingBreakdownItem label="Cleanliness" value={ratingBreakdown.cleanliness} />
            <RatingBreakdownItem label="Location" value={ratingBreakdown.location} />
            <RatingBreakdownItem label="Service" value={ratingBreakdown.service} />
            <RatingBreakdownItem label="Value" value={ratingBreakdown.value} />
          </div>
        </div>
      </div>

      {/* Write Review Button */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Guest Reviews
        </h3>
        {isAuthenticated && hasStayed && (
          <Button variant="outline" size="sm" onClick={() => setShowWriteReview(!showWriteReview)}>
            <FiEdit2 className="mr-2" />
            Write a Review
          </Button>
        )}
      </div>

      {/* Write Review Form (placeholder) */}
      <AnimatePresence>
        {showWriteReview && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Review functionality will be available in a future phase. This will allow verified guests to share their experience.
              </p>
              <Button variant="ghost" size="sm" className="mt-3" onClick={() => setShowWriteReview(false)}>
                Close
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reviews List */}
      <div className="space-y-3">
        <AnimatePresence>
          {currentReviews.map((review, index) => (
            <ReviewCard key={review.id || index} review={review} />
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            onClick={goToPrevious}
            disabled={currentPage === 1}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <FiChevronLeft size={20} />
          </button>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      )}

      {/* No reviews message */}
      {reviews.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          No reviews yet. Be the first to share your experience!
        </div>
      )}
    </motion.div>
  );
};

export default ReviewsSection;