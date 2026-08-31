import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiHeart, FiShare2 } from 'react-icons/fi';

/**
 * ImageGallery Component - Full-width gallery with thumbnails
 * 
 * @param {array} images - Array of image URLs
 * @param {string} hotelName - Hotel name for alt text
 * @param {boolean} showWishlist - Show wishlist button
 * @param {boolean} isWishlisted - Whether hotel is wishlisted
 * @param {function} onWishlistToggle - Wishlist toggle handler
 * @param {function} onShare - Share handler
 */
const ImageGallery = ({
  images = [],
  hotelName = 'Hotel',
  showWishlist = false,
  isWishlisted = false,
  onWishlistToggle,
  onShare,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-2xl">
        <span className="text-gray-500 dark:text-gray-400">No images available</span>
      </div>
    );
  }

  const goToPrevious = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    if (onWishlistToggle) {
      onWishlistToggle();
    }
  };

  const handleShare = (e) => {
    e.stopPropagation();
    if (onShare) {
      onShare();
    } else if (navigator.share) {
      navigator.share({
        title: hotelName,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // Show a toast notification (will be implemented later)
    }
  };

  // Main Gallery Content
  const GalleryContent = () => (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-900 rounded-2xl overflow-hidden">
      {/* Main Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${hotelName} - Image ${currentIndex + 1}`}
          className="w-full h-full object-cover cursor-pointer"
          initial={{ opacity: 0.5, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.5, scale: 1.02 }}
          transition={{ duration: 0.4 }}
          onClick={openLightbox}
          loading="lazy"
        />
      </AnimatePresence>

      {/* Gradient Overlay (bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Image Counter */}
      <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-medium">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Action Buttons */}
      <div className="absolute top-4 right-4 flex gap-2">
        {/* Wishlist Button */}
        {showWishlist && (
          <button
            onClick={handleWishlist}
            className="p-3 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <FiHeart
              className={`transition-colors ${
                isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-700 dark:text-gray-300'
              }`}
              size={22}
            />
          </button>
        )}

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="p-3 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Share"
        >
          <FiShare2 size={22} className="text-gray-700 dark:text-gray-300" />
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={openLightbox}
          className="p-3 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="View fullscreen"
        >
          <FiMaximize2 size={22} className="text-gray-700 dark:text-gray-300" />
        </button>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous image"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next image"
          >
            <FiChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );

  // Thumbnail Strip
  const ThumbnailStrip = () => (
    <div className="flex gap-2 mt-3 overflow-x-auto pb-2 scrollbar-thin">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => goToImage(index)}
          className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all duration-200 ${
            index === currentIndex
              ? 'ring-2 ring-blue-600 dark:ring-blue-400 ring-offset-2 dark:ring-offset-gray-900'
              : 'opacity-70 hover:opacity-100'
          }`}
          aria-label={`Go to image ${index + 1}`}
          aria-current={index === currentIndex ? 'true' : 'false'}
        >
          <img
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </button>
      ))}
    </div>
  );

  // Lightbox Modal
  const Lightbox = () => (
    <AnimatePresence>
      {isLightboxOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center z-10"
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Main Image */}
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${hotelName} - Full screen image ${currentIndex + 1}`}
              className="max-w-[95vw] max-h-[90vh] object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navigation Arrows (Lightbox) */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Previous image"
                >
                  <FiChevronLeft size={32} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Next image"
                >
                  <FiChevronRight size={32} />
                </button>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div className="group">
      <GalleryContent />
      <ThumbnailStrip />
      <Lightbox />
    </div>
  );
};

export default ImageGallery;