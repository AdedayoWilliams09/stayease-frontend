import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiHome, FiChevronRight } from 'react-icons/fi';
import Container from '../components/common/Container';
import RoomImageGallery from '../components/rooms/RoomImageGallery';
import RoomInfo from '../components/rooms/RoomInfo';
import RoomBookingWidget from '../components/rooms/RoomBookingWidget';
import RoomAmenitiesList from '../components/rooms/RoomAmenitiesList';
import SimilarRooms from '../components/rooms/SimilarRooms';
import AvailabilityCalendar from '../components/rooms/AvailabilityCalendar';
import Button from '../components/common/Button';
import { getRoomById, getSimilarRooms } from '../data/mockHotels';

/**
 * RoomDetailPage Component - Complete room detail page
 * 
 * Features:
 * - Room image gallery with lightbox
 * - Room information with capacity, size, bed types
 * - Booking widget with availability checking
 * - Categorized amenities
 * - Availability calendar
 * - Similar rooms carousel
 */
const RoomDetailPage = () => {
  const { hotelId, roomId } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [similarRooms, setSimilarRooms] = useState([]);
  const [selectedDates, setSelectedDates] = useState({ checkIn: null, checkOut: null });

  // Fetch room data
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const roomData = getRoomById(hotelId, roomId);
      if (roomData) {
        setRoom(roomData);
        // Get similar rooms
        const similar = getSimilarRooms(hotelId, roomId, 3);
        setSimilarRooms(similar);
      }
      setIsLoading(false);
    }, 500);
  }, [hotelId, roomId]);

  // Handle date selection from calendar
  const handleDateSelect = (dates) => {
    setSelectedDates(dates);
  };

  // Breadcrumb items
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Hotels', path: '/hotels' },
    { label: room?.hotelName || 'Loading...', path: `/hotels/${hotelId}` },
    { label: room?.name || 'Loading...', path: '' },
  ];

  // Loading state
  if (isLoading) {
    return (
      <Container className="py-8">
        <div className="space-y-6">
          {/* Skeleton for gallery */}
          <div className="w-full h-[350px] md:h-[450px] lg:h-[500px] bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
          {/* Skeleton for content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                ))}
              </div>
              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="h-[400px] bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </Container>
    );
  }

  // Not found state
  if (!room) {
    return (
      <Container className="py-16 text-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Room Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400">
            We couldn't find the room you're looking for.
          </p>
          <Button variant="primary" onClick={() => navigate(`/hotels/${hotelId}`)}>
            Back to Hotel
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{room.name} - Book Your Stay | StayEase</title>
        <meta 
          name="description" 
          content={`Book ${room.name} at ${room.hotelName}. ${room.description?.slice(0, 150)}... Read room details, view photos, and get the best price guaranteed.`} 
        />
        <meta property="og:title" content={`${room.name} - Book Your Stay | StayEase`} />
        <meta property="og:description" content={`Book ${room.name} at ${room.hotelName}. Read room details, view photos, and get the best price guaranteed.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        {room.image && <meta property="og:image" content={room.image} />}
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
          onClick={() => navigate(`/hotels/${hotelId}`)}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-4"
        >
          <FiArrowLeft size={18} />
          <span>Back to hotel</span>
        </button>

        {/* Image Gallery */}
        <RoomImageGallery
          images={room.galleryImages || [room.image]}
          roomName={room.name}
        />

        {/* Room Info + Booking Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          <div className="lg:col-span-2">
            <RoomInfo room={room} />
          </div>
          <div className="lg:col-span-1">
            <RoomBookingWidget
              room={room}
              hotelId={parseInt(hotelId)}
              hotelName={room.hotelName}
            />
          </div>
        </div>

        {/* Amenities Section */}
        {room.amenities && room.amenities.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Room Amenities
            </h2>
            <RoomAmenitiesList amenities={room.amenities} />
          </section>
        )}

        {/* Availability Calendar Section */}
        <section className="mt-12">
          <AvailabilityCalendar
            roomId={room.id}
            onDateSelect={handleDateSelect}
          />
        </section>

        {/* Similar Rooms */}
        {similarRooms.length > 0 && (
          <section className="mt-12">
            <SimilarRooms
              rooms={similarRooms}
              hotelId={parseInt(hotelId)}
            />
          </section>
        )}
      </Container>
    </>
  );
};

export default RoomDetailPage;