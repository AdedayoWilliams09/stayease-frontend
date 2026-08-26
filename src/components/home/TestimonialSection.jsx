import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight, FiCheckCircle } from 'react-icons/fi';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import avatar1Img from "../../assets/images/avatar-1.jpg";
import avatar2Img from "../../assets/images/avatar-2.jpg";
import avatar3Img from "../../assets/images/avatar-3.jpg";
import avatar4Img from "../../assets/images/avatar-4.jpg";
import avatar5Img from "../../assets/images/avatar-5.jpg";

/**
 * TestimonialSection Component - User reviews carousel
 */
const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      location: 'New York',
      rating: 5,
      text: 'The best booking experience I\'ve ever had. The process was seamless and the hotel was perfect!',
      avatar: avatar1Img,
      verified: true,
    },
    {
      id: 2,
      name: 'James K.',
      location: 'London',
      rating: 5,
      text: 'Found the most beautiful beach resort at an amazing price. Highly recommend!',
      avatar: avatar2Img,
      verified: true,
    },
    {
      id: 3,
      name: 'Emily R.',
      location: 'Sydney',
      rating: 5,
      text: 'The customer support team went above and beyond to help with our booking. Five stars!',
      avatar: avatar3Img,
      verified: true,
    },
    {
      id: 4,
      name: 'Michael T.',
      location: 'Toronto',
      rating: 4,
      text: 'Great selection of hotels. Easy to use and the prices are competitive.',
      avatar: avatar4Img,
      verified: true,
    },
    {
      id: 5,
      name: 'Jessica L.',
      location: 'Singapore',
      rating: 5,
      text: 'This platform made planning my vacation so easy. Everything was perfect from start to finish.',
      avatar: avatar5Img,
      verified: true,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar
        key={i}
        className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
        size={18}
      />
    ));
  };

  return (
    <section 
      className="py-16 bg-gray-50 dark:bg-gray-900/50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Container>
        <SectionHeader
          title="What Our Guests Say"
          subtitle="Real reviews from real travelers"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-10"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </span>
                    {testimonials[currentIndex].verified && (
                      <FiCheckCircle className="text-blue-600 dark:text-blue-400" size={16} />
                    )}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonials[currentIndex].location}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-blue-600 dark:bg-blue-400' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;