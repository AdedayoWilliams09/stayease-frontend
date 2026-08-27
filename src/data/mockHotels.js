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
 * Mock Hotels Data
 * 
 * Each hotel has:
 * - id: Unique identifier
 * - name: Hotel name
 * - location: City, Country
 * - description: Short description
 * - images: Array of image imports (carousel)
 * - rating: 0-5 star rating
 * - reviewCount: Number of reviews
 * - price: Price per night in USD
 * - amenities: Array of amenity strings
 * - propertyType: Hotel, Resort, Villa, Apartment, Bed & Breakfast
 * - featured: Boolean for featured status
 * - distance: Distance from city center in km
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

export default mockHotels;