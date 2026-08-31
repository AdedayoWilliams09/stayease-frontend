import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiHome, FiChevronRight } from 'react-icons/fi';
import Container from '../components/common/Container';
import ImageGallery from '../components/hotels/ImageGallery';
import HotelInfo from '../components/hotels/HotelInfo';
import BookingWidget from '../components/hotels/BookingWidget';
import AmenitiesList from '../components/hotels/AmenitiesList';
import RoomTypes from '../components/hotels/RoomTypes';
import LocationMap from '../components/hotels/LocationMap';
import ReviewsSection from '../components/hotels/ReviewsSection';
import SimilarHotels from '../components/hotels/SimilarHotels';
import Button from '../components/common/Button';
import { getHotelById, getSimilarHotels } from '../data/mockHotels';

/**
 * HotelDetailPage Component - Complete hotel detail page
 * 
 * Features:
 * - Image gallery with lightbox
 * - Hotel information with policies
 * - Booking widget with availability checking
 * - Categorized amenities
 * - Room types with selection
 * - Location map with nearby places
 * - Reviews with rating breakdown
 * - Similar hotels carousel
 */
const HotelDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRoomId, setSelectedRoomId] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [similarHotels, setSimilarHotels] = useState([]);

  // Scroll to sections
  const scrollToReviews = () => {
    const element = document.getElementById('reviews-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fetch hotel data
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const hotelData = getHotelById(id);
      if (hotelData) {
        setHotel(hotelData);
        setSelectedRoomId(hotelData.roomTypes?.[0]?.id || '');
        // Get similar hotels
        const similar = getSimilarHotels(id, 4);
        setSimilarHotels(similar);
      }
      setIsLoading(false);
    }, 500);
  }, [id]);

  // Handle room selection
  const handleRoomSelect = (roomId) => {
    setSelectedRoomId(roomId);
    // Scroll to booking widget on mobile
    if (window.innerWidth < 768) {
      const widget = document.getElementById('booking-widget');
      if (widget) {
        widget.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle wishlist toggle
  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    // In a future phase, this would dispatch to Redux
    console.log('Wishlist toggled:', !isWishlisted);
  };

  // Breadcrumb items
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Hotels', path: '/hotels' },
    { label: hotel?.name || 'Loading...', path: '' },
  ];

  // Loading state
  if (isLoading) {
    return (
      <Container className="py-8">
        <div className="space-y-6">
          {/* Skeleton for gallery */}
          <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
          {/* Skeleton for content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="h-[300px] bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </Container>
    );
  }

  // Not found state
  if (!hotel) {
    return (
      <Container className="py-16 text-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Hotel Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400">
            We couldn't find the hotel you're looking for.
          </p>
          <Button variant="primary" onClick={() => navigate('/hotels')}>
            Back to Hotels
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{hotel.name} - Book Your Stay | StayEase</title>
        <meta 
          name="description" 
          content={`Book ${hotel.name} in ${hotel.location}. Read reviews, view photos, and get the best price guaranteed. Free cancellation available.`} 
        />
        <meta property="og:title" content={`${hotel.name} - Book Your Stay | StayEase`} />
        <meta property="og:description" content={`Book ${hotel.name} in ${hotel.location}. Read reviews, view photos, and get the best price guaranteed.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        {hotel.images && hotel.images.length > 0 && (
          <meta property="og:image" content={hotel.images[0]} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
        <Container className="py-3">
          <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <FiChevronRight className="text-gray-400" size={14} />}
                {item.path ? (
                  <Link to={item.path} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-900 dark:text-white font-medium" aria-current="page">
                    {item.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-6 md:py-8">
        {/* Back button */}
        <button
          onClick={() => navigate('/hotels')}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-4"
        >
          <FiArrowLeft size={18} />
          <span>Back to search</span>
        </button>

        {/* Image Gallery */}
        <ImageGallery
          images={hotel.galleryImages || hotel.images || []}
          hotelName={hotel.name}
          showWishlist={true}
          isWishlisted={isWishlisted}
          onWishlistToggle={handleWishlistToggle}
        />

        {/* Hotel Info + Booking Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          <div className="lg:col-span-2">
            <HotelInfo hotel={hotel} onViewReviews={scrollToReviews} />
          </div>
          <div className="lg:col-span-1" id="booking-widget">
            <BookingWidget
              hotel={hotel}
              roomTypes={hotel.roomTypes || []}
              isSticky={true}
            />
          </div>
        </div>

        {/* Amenities Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Amenities & Services
          </h2>
          <AmenitiesList amenitiesDetails={hotel.amenitiesDetails} />
        </section>

        {/* Room Types Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Room Types
          </h2>
          <RoomTypes
            rooms={hotel.roomTypes || []}
            selectedRoomId={selectedRoomId}
            onSelectRoom={handleRoomSelect}
          />
        </section>

        {/* Location Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Location
          </h2>
          <LocationMap locationDetails={hotel.locationDetails} hotelName={hotel.name} />
        </section>

        {/* Reviews Section */}
        <section className="mt-12" id="reviews-section">
          <ReviewsSection
            reviews={hotel.reviews || []}
            rating={hotel.rating}
            reviewCount={hotel.reviewCount}
            isAuthenticated={false} // Will be connected in auth phase
            hasStayed={false} // Will be connected in auth phase
          />
        </section>

        {/* Similar Hotels */}
        {similarHotels.length > 0 && (
          <section className="mt-12">
            <SimilarHotels hotels={similarHotels} />
          </section>
        )}
      </Container>
    </>
  );
};

export default HotelDetailPage;