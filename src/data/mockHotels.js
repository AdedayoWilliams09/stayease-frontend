// FILE: frontend/src/data/mockHotels.js

// Import hotel images
import hotel1Img from '../assets/images/hotel-1.jpg';
import hotel2Img from '../assets/images/hotel-2.jpg';
import hotel3Img from '../assets/images/hotel-3.jpg';
import hotel4Img from '../assets/images/hotel-4.jpg';
import hotel5Img from '../assets/images/hotel-5.jpg';
import hotel6Img from '../assets/images/hotel-6.jpg';

// Import destination images (for location thumbnails)
import parisImg from '../assets/images/paris.jpg';
import tokyoImg from '../assets/images/tokyo.jpg';
import newyorkImg from '../assets/images/newyork.jpg';
import dubaiImg from '../assets/images/dubai.jpg';
import singaporeImg from '../assets/images/singapore.jpg';
import sydneyImg from '../assets/images/sydney.jpg';

/**
 * Base Mock Hotels Data List
 */
const mockHotels = [
  {
    id: 1,
    name: 'Grand Ocean Resort',
    location: 'Maldives',
    description: 'Luxury beachfront resort with overwater villas and world-class spa.',
    images: [hotel1Img, hotel2Img, hotel3Img],
    rating: 4.9,
    reviewCount: 234,
    price: 450,
    amenities: ['WiFi', 'Pool', 'Spa', 'Beachfront', 'Restaurant', 'Gym'],
    propertyType: 'Resort',
    featured: true,
    distance: 0.5,
  },
  {
    id: 2,
    name: 'Mountain View Lodge',
    location: 'Swiss Alps',
    description: 'Cozy mountain retreat with breathtaking alpine views and ski-in/ski-out access.',
    images: [hotel2Img, hotel1Img, hotel4Img],
    rating: 4.8,
    reviewCount: 189,
    price: 320,
    amenities: ['WiFi', 'Restaurant', 'Gym', 'Parking'],
    propertyType: 'Hotel',
    featured: false,
    distance: 1.2,
  },
  {
    id: 3,
    name: 'City Central Suites',
    location: 'New York',
    description: 'Modern suites in the heart of Manhattan with panoramic city views.',
    images: [hotel3Img, hotel5Img, hotel6Img],
    rating: 4.7,
    reviewCount: 456,
    price: 280,
    amenities: ['WiFi', 'Gym', 'Restaurant', 'Parking'],
    propertyType: 'Apartment',
    featured: false,
    distance: 0.3,
  },
  {
    id: 4,
    name: 'Sapphire Beach Club',
    location: 'Bali',
    description: 'Tropical paradise with private beach, infinity pool, and traditional spa.',
    images: [hotel4Img, hotel2Img, hotel1Img],
    rating: 4.9,
    reviewCount: 312,
    price: 380,
    amenities: ['WiFi', 'Pool', 'Spa', 'Beachfront', 'Restaurant'],
    propertyType: 'Resort',
    featured: true,
    distance: 0.8,
  },
  {
    id: 5,
    name: 'Royal Palace Hotel',
    location: 'Dubai',
    description: 'Ultra-luxury hotel with gold-plated finishes and private butler service.',
    images: [hotel5Img, hotel3Img, hotel2Img],
    rating: 4.6,
    reviewCount: 278,
    price: 520,
    amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Gym', 'Parking'],
    propertyType: 'Hotel',
    featured: false,
    distance: 2.1,
  },
  {
    id: 6,
    name: 'Sunset Paradise',
    location: 'Santorini',
    description: 'Cliffside hotel with stunning sunset views and private infinity pools.',
    images: [hotel6Img, hotel4Img, hotel5Img],
    rating: 4.8,
    reviewCount: 345,
    price: 410,
    amenities: ['WiFi', 'Pool', 'Restaurant', 'Spa'],
    propertyType: 'Hotel',
    featured: false,
    distance: 1.5,
  },
  {
    id: 7,
    name: 'Riverside Lodge',
    location: 'Paris',
    description: 'Charming boutique hotel on the Seine with Eiffel Tower views.',
    images: [hotel1Img, hotel6Img, hotel3Img],
    rating: 4.5,
    reviewCount: 198,
    price: 250,
    amenities: ['WiFi', 'Restaurant', 'Parking'],
    propertyType: 'Bed & Breakfast',
    featured: false,
    distance: 0.7,
  },
  {
    id: 8,
    name: 'Villa Serenity',
    location: 'Singapore',
    description: 'Private luxury villa with tropical gardens and personal concierge.',
    images: [hotel2Img, hotel5Img, hotel1Img],
    rating: 4.7,
    reviewCount: 167,
    price: 390,
    amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Gym', 'Parking'],
    propertyType: 'Villa',
    featured: false,
    distance: 3.2,
  },
];

// All unique amenities for filter options
export const allAmenities = [
  'WiFi',
  'Pool',
  'Parking',
  'Restaurant',
  'Gym',
  'Spa',
  'Beachfront',
];

// All unique property types for filter options
export const allPropertyTypes = [
  'Hotel',
  'Resort',
  'Villa',
  'Apartment',
  'Bed & Breakfast',
];

// Detailed mock hotels lookup map
export const mockHotelsDetail = {
  1: {
    id: 1,
    name: 'Grand Ocean Resort',
    location: 'Maldives',
    description: 'Luxury beachfront resort with overwater villas and world-class spa.',
    images: [hotel1Img, hotel2Img, hotel3Img],
    rating: 4.9,
    reviewCount: 234,
    price: 450,
    amenities: ['WiFi', 'Pool', 'Spa', 'Beachfront', 'Restaurant', 'Gym'],
    propertyType: 'Resort',
    featured: true,
    distance: 0.5,
    galleryImages: [hotel1Img, hotel2Img, hotel3Img, hotel4Img, hotel5Img, hotel6Img],
    roomTypes: [
      {
        id: 'r1',
        name: 'Deluxe Ocean View',
        description: 'Spacious room with king bed, private balcony, and panoramic ocean views.',
        capacity: 2,
        amenities: ['King Bed', 'Balcony', 'Ocean View', 'Marble Bathroom', 'Mini Bar'],
        price: 450,
        image: hotel1Img,
        available: true,
      },
      {
        id: 'r2',
        name: 'Overwater Villa',
        description: 'Luxurious villa on stilts over the crystal-clear lagoon with direct water access.',
        capacity: 3,
        amenities: ['King Bed', 'Private Pool', 'Glass Floor', 'Direct Water Access', 'Butler Service'],
        price: 850,
        image: hotel2Img,
        available: true,
      },
      {
        id: 'r3',
        name: 'Family Suite',
        description: 'Spacious suite with two bedrooms, living area, and garden views.',
        capacity: 4,
        amenities: ['Two Bedrooms', 'Living Area', 'Garden View', 'Kitchenette', 'Kids Club Access'],
        price: 620,
        image: hotel3Img,
        available: false,
      },
    ],
    amenitiesDetails: {
      general: ['Free WiFi', 'Concierge Service', 'Daily Housekeeping', 'Laundry Service'],
      'food-drink': ['On-site Restaurant', 'Bar/Lounge', 'Room Service', 'Breakfast Buffet'],
      wellness: ['Spa', 'Fitness Center', 'Yoga Classes', 'Massage Services'],
      business: ['Meeting Rooms', 'Business Center', 'Secretarial Services'],
      outdoor: ['Beachfront', 'Infinity Pool', 'Tennis Courts', 'Water Sports'],
    },
    policies: {
      checkIn: '3:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 48 hours before check-in',
      children: 'Children under 12 stay free',
      pets: 'Pets allowed (fee applies)',
      payment: 'Credit card required at check-in',
    },
    contact: {
      phone: '+1 (555) 123-4567',
      email: 'reservations@grandocean.com',
      website: 'www.grandoceanresort.com',
    },
    locationDetails: {
      address: 'North Male Atoll, Maldives',
      coordinates: { lat: 4.1755, lng: 73.5093 },
      nearby: [
        { name: 'Male International Airport', distance: '25 km' },
        { name: 'Male City Center', distance: '30 km' },
        { name: 'Banana Reef', distance: '5 km' },
        { name: 'Local Island Market', distance: '15 km' },
      ],
    },
    reviews: [
      {
        id: 'rev1',
        user: {
          name: 'Sarah M.',
          avatar: '/src/assets/images/avatar-1.jpg',
          location: 'New York, USA',
        },
        rating: 5,
        date: '2026-07-15',
        comment: 'Absolutely amazing! The overwater villa was a dream come true. The staff went above and beyond to make our stay special. The food was incredible and the views were breathtaking.',
        verified: true,
        helpful: 24,
      },
      {
        id: 'rev2',
        user: {
          name: 'James K.',
          avatar: '/src/assets/images/avatar-2.jpg',
          location: 'London, UK',
        },
        rating: 4,
        date: '2026-06-28',
        comment: 'Beautiful resort with excellent service. The spa treatments were world-class. Only minor complaint was the Wi-Fi was a bit spotty in the villas, but overall a fantastic experience.',
        verified: true,
        helpful: 12,
      },
      {
        id: 'rev3',
        user: {
          name: 'Emily R.',
          avatar: '/src/assets/images/avatar-3.jpg',
          location: 'Sydney, Australia',
        },
        rating: 5,
        date: '2026-06-10',
        comment: "Paradise on Earth! The overwater villa with glass floor was incredible. Snorkeling right from our villa was a highlight. Can't wait to come back!",
        verified: true,
        helpful: 18,
      },
      {
        id: 'rev4',
        user: {
          name: 'Michael T.',
          avatar: '/src/assets/images/avatar-4.jpg',
          location: 'Toronto, Canada',
        },
        rating: 5,
        date: '2026-05-22',
        comment: 'This resort exceeded all expectations. The staff remembered our names and preferences. The food was Michelin-star quality. Highly recommend the sunset cruise.',
        verified: true,
        helpful: 9,
      },
      {
        id: 'rev5',
        user: {
          name: 'Jessica L.',
          avatar: '/src/assets/images/avatar-5.jpg',
          location: 'Singapore',
        },
        rating: 4,
        date: '2026-05-05',
        comment: 'Lovely resort with stunning views. The infinity pool is gorgeous. Would have given 5 stars if the spa prices were more reasonable, but still a wonderful stay.',
        verified: true,
        helpful: 6,
      },
    ],
  },
  2: {
    id: 2,
    name: 'Mountain View Lodge',
    location: 'Swiss Alps',
    description: 'Cozy mountain retreat with breathtaking alpine views and ski-in/ski-out access.',
    images: [hotel2Img, hotel1Img, hotel4Img],
    rating: 4.8,
    reviewCount: 189,
    price: 320,
    amenities: ['WiFi', 'Restaurant', 'Gym', 'Parking'],
    propertyType: 'Hotel',
    featured: false,
    distance: 1.2,
    galleryImages: [hotel2Img, hotel1Img, hotel4Img, hotel5Img, hotel6Img, hotel3Img],
    roomTypes: [
      {
        id: 'r1',
        name: 'Alpine View Room',
        description: 'Cozy room with mountain views, fireplace, and luxurious bath.',
        capacity: 2,
        amenities: ['Queen Bed', 'Fireplace', 'Mountain View', 'Bath Tub'],
        price: 320,
        image: hotel2Img,
        available: true,
      },
      {
        id: 'r2',
        name: 'Ski-In Suite',
        description: 'Spacious suite with ski-in/ski-out access and panoramic alpine views.',
        capacity: 4,
        amenities: ['Two Bedrooms', 'Fireplace', 'Ski Storage', 'Mountain View', 'Kitchen'],
        price: 550,
        image: hotel4Img,
        available: true,
      },
    ],
    amenitiesDetails: {
      general: ['Free WiFi', 'Ski Storage', 'Laundry Service', 'Concierge'],
      'food-drink': ['Restaurant', 'Bar', 'Breakfast', 'Room Service'],
      wellness: ['Spa', 'Sauna', 'Hot Tub', 'Massage'],
      business: ['Meeting Room', 'Business Center'],
      outdoor: ['Ski Access', 'Hiking Trails', 'Mountain Views'],
    },
    policies: {
      checkIn: '3:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 72 hours before check-in',
      children: 'Children under 6 stay free',
      pets: 'Not allowed',
      payment: 'Credit card required at check-in',
    },
    contact: {
      phone: '+41 22 123 4567',
      email: 'info@mountainviewlodge.ch',
      website: 'www.mountainviewlodge.ch',
    },
    locationDetails: {
      address: 'Route des Alpes, 1234, Zermatt, Switzerland',
      coordinates: { lat: 46.0207, lng: 7.7491 },
      nearby: [
        { name: 'Zermatt Train Station', distance: '2 km' },
        { name: 'Matterhorn', distance: '8 km' },
        { name: 'Gornergrat', distance: '5 km' },
        { name: 'Zermatt Village', distance: '1.5 km' },
      ],
    },
    reviews: [
      {
        id: 'rev1',
        user: {
          name: 'Anna S.',
          avatar: '/src/assets/images/avatar-1.jpg',
          location: 'Berlin, Germany',
        },
        rating: 5,
        date: '2026-07-10',
        comment: 'Incredible views and perfect location for skiing! The staff was so friendly and helpful. The sauna after a day of skiing was a real treat.',
        verified: true,
        helpful: 15,
      },
      {
        id: 'rev2',
        user: {
          name: 'David P.',
          avatar: '/src/assets/images/avatar-2.jpg',
          location: 'Vienna, Austria',
        },
        rating: 4,
        date: '2026-06-20',
        comment: 'Beautiful lodge with amazing mountain views. The restaurant served excellent Swiss cuisine. Would love to visit again in summer for hiking.',
        verified: true,
        helpful: 8,
      },
    ],
  },
};

// Helper function to get hotel by ID with full details
export const getHotelById = (id) => {
  if (mockHotelsDetail[id]) {
    return mockHotelsDetail[id];
  }
  const hotel = mockHotels.find((h) => h.id === parseInt(id, 10));
  return hotel || null;
};

// Helper to get similar hotels (exclude current)
export const getSimilarHotels = (currentHotelId, limit = 4) => {
  return mockHotels
    .filter((h) => h.id !== parseInt(currentHotelId, 10))
    .slice(0, limit);
};

// Helper to get all amenities from a hotel's detailed data
export const getAmenitiesList = (hotel) => {
  if (hotel?.amenitiesDetails) {
    return Object.values(hotel.amenitiesDetails).flat();
  }
  return hotel?.amenities || [];
};

export default mockHotels;