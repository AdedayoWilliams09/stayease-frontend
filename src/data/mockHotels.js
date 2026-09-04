// FILE: frontend/src/data/mockHotels.js
// COMPLETE: All hotels 1-8 with full room data

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

// ============================================
// DETAILED MOCK HOTELS WITH ROOM DATA
// ============================================

export const mockHotelsDetail = {
  // ==========================================
  // HOTEL 1: Grand Ocean Resort
  // ==========================================
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
        type: 'Deluxe Room',
        description: 'Experience unparalleled comfort in our Deluxe Ocean View room. Featuring a luxurious king-size bed, marble bathroom with rain shower, and panoramic ocean views. This room includes complimentary high-speed WiFi, a 55-inch smart TV, and a minibar stocked with premium beverages.',
        capacity: 2,
        maxChildren: 1,
        size: 45,
        bedTypes: ['King Size Bed (180cm x 200cm)'],
        amenities: ['King Bed', 'Ocean View', 'Marble Bathroom', 'Rain Shower', 'Free WiFi', 'Smart TV', 'Minibar', 'Safe', 'Air Conditioning', 'Room Service'],
        price: 450,
        image: hotel1Img,
        galleryImages: [hotel1Img, hotel2Img, hotel3Img, hotel4Img],
        available: true,
        highlights: [
          'Panoramic ocean views',
          'Marble bathroom with rain shower',
          'Complimentary premium minibar',
          '55-inch smart TV with streaming',
        ],
        cancellationPolicy: 'Free cancellation up to 48 hours before check-in',
        checkInTime: '3:00 PM',
        checkOutTime: '12:00 PM',
      },
      {
        id: 'r2',
        name: 'Overwater Villa',
        type: 'Villa',
        description: 'Luxurious villa on stilts over the crystal-clear lagoon with direct water access. Featuring a private infinity pool, glass floor panels for underwater viewing, and personal butler service. The ultimate luxury experience.',
        capacity: 3,
        maxChildren: 1,
        size: 85,
        bedTypes: ['King Size Bed (180cm x 200cm)', 'Day Bed (can convert to single)'],
        amenities: ['King Bed', 'Private Pool', 'Glass Floor', 'Direct Water Access', 'Butler Service', 'Free WiFi', 'Smart TV', 'Minibar', 'Safe', 'Air Conditioning', 'Room Service', 'Outdoor Shower'],
        price: 850,
        image: hotel2Img,
        galleryImages: [hotel2Img, hotel1Img, hotel4Img, hotel5Img, hotel6Img],
        available: true,
        highlights: [
          'Private infinity pool overlooking the ocean',
          'Glass floor panels for underwater viewing',
          'Personal butler service included',
          'Direct lagoon access from private deck',
        ],
        cancellationPolicy: 'Free cancellation up to 72 hours before check-in',
        checkInTime: '3:00 PM',
        checkOutTime: '12:00 PM',
      },
      {
        id: 'r3',
        name: 'Family Suite',
        type: 'Suite',
        description: 'Spacious suite with two bedrooms, living area, and garden views. Perfect for families or groups traveling together. Includes a kitchenette, kids club access, and complimentary breakfast for all guests.',
        capacity: 4,
        maxChildren: 2,
        size: 65,
        bedTypes: ['King Size Bed (180cm x 200cm)', 'Queen Size Bed (160cm x 200cm)', 'Sofa Bed'],
        amenities: ['Two Bedrooms', 'Living Area', 'Garden View', 'Kitchenette', 'Kids Club Access', 'Free WiFi', 'Smart TV', 'Minibar', 'Safe', 'Air Conditioning', 'Breakfast Included'],
        price: 620,
        image: hotel3Img,
        galleryImages: [hotel3Img, hotel1Img, hotel2Img, hotel5Img],
        available: false,
        highlights: [
          'Two separate bedrooms for privacy',
          'Full kitchenette with dining area',
          'Complimentary kids club access',
          'Daily breakfast included for all guests',
        ],
        cancellationPolicy: 'Free cancellation up to 48 hours before check-in',
        checkInTime: '3:00 PM',
        checkOutTime: '12:00 PM',
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

  // ==========================================
  // HOTEL 2: Mountain View Lodge
  // ==========================================
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
        type: 'Standard Room',
        description: 'Cozy room with mountain views, fireplace, and luxurious bath. The perfect retreat after a day on the slopes. Features traditional alpine decor with modern amenities.',
        capacity: 2,
        maxChildren: 1,
        size: 32,
        bedTypes: ['Queen Size Bed (160cm x 200cm)'],
        amenities: ['Queen Bed', 'Fireplace', 'Mountain View', 'Bath Tub', 'Free WiFi', 'Smart TV', 'Minibar', 'Safe', 'Air Conditioning'],
        price: 320,
        image: hotel2Img,
        galleryImages: [hotel2Img, hotel1Img, hotel4Img, hotel5Img],
        available: true,
        highlights: [
          'Cozy fireplace for winter evenings',
          'Stunning mountain views from your window',
          'Luxurious bath with mountain views',
          'Ski-in/ski-out access',
        ],
        cancellationPolicy: 'Free cancellation up to 72 hours before check-in',
        checkInTime: '3:00 PM',
        checkOutTime: '11:00 AM',
      },
      {
        id: 'r2',
        name: 'Ski-In Suite',
        type: 'Suite',
        description: 'Spacious suite with ski-in/ski-out access and panoramic alpine views. Features two bedrooms, a full kitchen, and a cozy fireplace. Perfect for families or groups of friends.',
        capacity: 4,
        maxChildren: 2,
        size: 55,
        bedTypes: ['King Size Bed (180cm x 200cm)', 'Queen Size Bed (160cm x 200cm)', 'Sofa Bed'],
        amenities: ['Two Bedrooms', 'Fireplace', 'Ski Storage', 'Mountain View', 'Kitchen', 'Free WiFi', 'Smart TV', 'Safe', 'Air Conditioning'],
        price: 550,
        image: hotel4Img,
        galleryImages: [hotel4Img, hotel2Img, hotel1Img, hotel3Img, hotel5Img],
        available: true,
        highlights: [
          'Direct ski-in/ski-out access',
          'Panoramic alpine views from every window',
          'Full kitchen with dining area',
          'Secure ski storage room',
        ],
        cancellationPolicy: 'Free cancellation up to 72 hours before check-in',
        checkInTime: '3:00 PM',
        checkOutTime: '11:00 AM',
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

  // ==========================================
  // HOTEL 3: City Central Suites
  // ==========================================
  3: {
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
    galleryImages: [hotel3Img, hotel5Img, hotel6Img, hotel2Img, hotel1Img],
    roomTypes: [
      {
        id: 'r1',
        name: 'Studio Suite',
        type: 'Studio',
        description: 'Modern studio suite with panoramic city views. Features a queen bed, work desk, and fully equipped kitchenette.',
        capacity: 2,
        maxChildren: 1,
        size: 35,
        bedTypes: ['Queen Size Bed (160cm x 200cm)'],
        amenities: ['Queen Bed', 'City View', 'Kitchenette', 'Free WiFi', 'Smart TV', 'Safe', 'Air Conditioning', 'Work Desk'],
        price: 280,
        image: hotel3Img,
        galleryImages: [hotel3Img, hotel5Img, hotel6Img, hotel1Img],
        available: true,
        highlights: [
          'Panoramic city views from floor-to-ceiling windows',
          'Fully equipped kitchenette for extended stays',
          'Prime location in Manhattan',
          'Access to rooftop terrace',
        ],
        cancellationPolicy: 'Free cancellation up to 48 hours before check-in',
        checkInTime: '3:00 PM',
        checkOutTime: '11:00 AM',
      },
      {
        id: 'r2',
        name: 'Executive Suite',
        type: 'Suite',
        description: 'Spacious executive suite with separate living room and bedroom. Features a king bed, dining area, and marble bathroom.',
        capacity: 3,
        maxChildren: 1,
        size: 55,
        bedTypes: ['King Size Bed (180cm x 200cm)', 'Sofa Bed'],
        amenities: ['King Bed', 'City View', 'Separate Living Room', 'Dining Area', 'Marble Bathroom', 'Free WiFi', 'Smart TV', 'Minibar', 'Safe', 'Air Conditioning'],
        price: 450,
        image: hotel5Img,
        galleryImages: [hotel5Img, hotel3Img, hotel6Img, hotel2Img],
        available: true,
        highlights: [
          'Separate living room for entertaining',
          'Marble bathroom with rain shower',
          'Complimentary breakfast included',
          'Access to executive lounge',
        ],
        cancellationPolicy: 'Free cancellation up to 48 hours before check-in',
        checkInTime: '3:00 PM',
        checkOutTime: '11:00 AM',
      },
    ],
    amenitiesDetails: {
      general: ['Free WiFi', 'Concierge', 'Daily Housekeeping', 'Laundry Service'],
      'food-drink': ['Restaurant', 'Bar', 'Room Service', 'Breakfast'],
      wellness: ['Fitness Center', 'Yoga Classes'],
      business: ['Meeting Rooms', 'Business Center', 'Co-working Space'],
      outdoor: ['Rooftop Terrace', 'City Views'],
    },
    policies: {
      checkIn: '3:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 48 hours before check-in',
      children: 'Children under 12 stay free',
      pets: 'Not allowed',
      payment: 'Credit card required at check-in',
    },
    contact: {
      phone: '+1 (212) 555-0100',
      email: 'info@citycentralsuites.com',
      website: 'www.citycentralsuites.com',
    },
    locationDetails: {
      address: '100 Park Avenue, New York, NY 10017',
      coordinates: { lat: 40.7506, lng: -73.9935 },
      nearby: [
        { name: 'Grand Central Station', distance: '0.5 km' },
        { name: 'Times Square', distance: '1.2 km' },
        { name: 'Central Park', distance: '2.0 km' },
        { name: 'Empire State Building', distance: '0.8 km' },
      ],
    },
    reviews: [
      {
        id: 'rev1',
        user: {
          name: 'John D.',
          avatar: '/src/assets/images/avatar-1.jpg',
          location: 'London, UK',
        },
        rating: 5,
        date: '2026-07-20',
        comment: 'Perfect location in Manhattan! The suite was spacious and clean. Great value for money.',
        verified: true,
        helpful: 12,
      },
      {
        id: 'rev2',
        user: {
          name: 'Maria S.',
          avatar: '/src/assets/images/avatar-2.jpg',
          location: 'Toronto, Canada',
        },
        rating: 4,
        date: '2026-06-15',
        comment: 'Lovely apartment in a great location. The kitchenette was very useful for our week-long stay.',
        verified: true,
        helpful: 8,
      },
    ],
  },

  // ==========================================
  // HOTEL 4: Sapphire Beach Club
  // ==========================================
  4: {
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
    galleryImages: [hotel4Img, hotel2Img, hotel1Img, hotel5Img, hotel6Img],
    roomTypes: [
      {
        id: 'r1',
        name: 'Garden View Room',
        type: 'Standard Room',
        description: 'Tropical garden view room with private terrace. Features a queen bed, outdoor shower, and direct access to the gardens.',
        capacity: 2,
        maxChildren: 1,
        size: 30,
        bedTypes: ['Queen Size Bed (160cm x 200cm)'],
        amenities: ['Queen Bed', 'Garden View', 'Private Terrace', 'Outdoor Shower', 'Free WiFi', 'Smart TV', 'Safe', 'Air Conditioning', 'Room Service'],
        price: 380,
        image: hotel4Img,
        galleryImages: [hotel4Img, hotel2Img, hotel1Img, hotel6Img],
        available: true,
        highlights: [
          'Private terrace overlooking tropical gardens',
          'Outdoor shower for a unique experience',
          'Steps away from the beach',
          'Complimentary water sports equipment',
        ],
        cancellationPolicy: 'Free cancellation up to 48 hours before check-in',
        checkInTime: '2:00 PM',
        checkOutTime: '12:00 PM',
      },
      {
        id: 'r2',
        name: 'Beachfront Villa',
        type: 'Villa',
        description: 'Luxury beachfront villa with private pool and direct beach access. Features a king bed, outdoor dining area, and personal concierge.',
        capacity: 4,
        maxChildren: 2,
        size: 75,
        bedTypes: ['King Size Bed (180cm x 200cm)', 'Queen Size Bed (160cm x 200cm)'],
        amenities: ['King Bed', 'Private Pool', 'Beachfront', 'Direct Beach Access', 'Outdoor Dining', 'Butler Service', 'Free WiFi', 'Smart TV', 'Minibar', 'Safe', 'Air Conditioning'],
        price: 750,
        image: hotel1Img,
        galleryImages: [hotel1Img, hotel4Img, hotel2Img, hotel5Img, hotel6Img],
        available: true,
        highlights: [
          'Private pool overlooking the beach',
          'Direct access to the beach from your villa',
          'Personal concierge and butler service',
          'Outdoor dining with ocean views',
        ],
        cancellationPolicy: 'Free cancellation up to 72 hours before check-in',
        checkInTime: '2:00 PM',
        checkOutTime: '12:00 PM',
      },
    ],
    amenitiesDetails: {
      general: ['Free WiFi', 'Concierge Service', 'Daily Housekeeping', 'Laundry Service'],
      'food-drink': ['Restaurant', 'Bar', 'Room Service', 'Beachside Dining'],
      wellness: ['Spa', 'Yoga Classes', 'Massage Services'],
      business: ['Meeting Room'],
      outdoor: ['Beachfront', 'Infinity Pool', 'Water Sports', 'Tennis Courts'],
    },
    policies: {
      checkIn: '2:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 48 hours before check-in',
      children: 'Children under 12 stay free',
      pets: 'Not allowed',
      payment: 'Credit card required at check-in',
    },
    contact: {
      phone: '+62 361 123 4567',
      email: 'reservations@sapphirebeach.com',
      website: 'www.sapphirebeachclub.com',
    },
    locationDetails: {
      address: 'Jl. Raya Uluwatu, Pecatu, Bali, Indonesia',
      coordinates: { lat: -8.7739, lng: 115.1664 },
      nearby: [
        { name: 'Ngurah Rai Airport', distance: '15 km' },
        { name: 'Uluwatu Temple', distance: '5 km' },
        { name: 'Jimbaran Bay', distance: '8 km' },
        { name: 'Kuta Beach', distance: '20 km' },
      ],
    },
    reviews: [
      {
        id: 'rev1',
        user: {
          name: 'Michael L.',
          avatar: '/src/assets/images/avatar-1.jpg',
          location: 'Sydney, Australia',
        },
        rating: 5,
        date: '2026-07-18',
        comment: 'Absolute paradise! The beachfront villa was stunning. Staff were incredibly attentive.',
        verified: true,
        helpful: 20,
      },
    ],
  },

  // ==========================================
  // HOTEL 5: Royal Palace Hotel
  // ==========================================
  5: {
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
    galleryImages: [hotel5Img, hotel3Img, hotel2Img, hotel1Img, hotel6Img],
    roomTypes: [
      {
        id: 'r1',
        name: 'Royal King Room',
        type: 'Deluxe Room',
        description: 'Luxurious room with gold-plated finishes and panoramic city views. Features a king bed, marble bathroom, and personal butler service.',
        capacity: 2,
        maxChildren: 1,
        size: 40,
        bedTypes: ['King Size Bed (180cm x 200cm)'],
        amenities: ['King Bed', 'City View', 'Marble Bathroom', 'Butler Service', 'Free WiFi', 'Smart TV', 'Minibar', 'Safe', 'Air Conditioning', 'Room Service'],
        price: 520,
        image: hotel5Img,
        galleryImages: [hotel5Img, hotel3Img, hotel2Img, hotel1Img],
        available: true,
        highlights: [
          'Personal butler service included',
          'Marble bathroom with Jacuzzi tub',
          'Floor-to-ceiling windows with city views',
          'Complimentary airport limousine service',
        ],
        cancellationPolicy: 'Free cancellation up to 72 hours before check-in',
        checkInTime: '3:00 PM',
        checkOutTime: '12:00 PM',
      },
      {
        id: 'r2',
        name: 'Royal Suite',
        type: 'Suite',
        description: 'The ultimate luxury suite with private study, dining room, and panoramic city views. Features a king bed, two bathrooms, and 24/7 butler service.',
        capacity: 4,
        maxChildren: 2,
        size: 95,
        bedTypes: ['King Size Bed (180cm x 200cm)', 'Queen Size Bed (160cm x 200cm)'],
        amenities: ['King Bed', 'Private Study', 'Dining Room', 'Two Bathrooms', 'City View', '24/7 Butler Service', 'Free WiFi', 'Smart TV', 'Minibar', 'Safe', 'Air Conditioning'],
        price: 1200,
        image: hotel6Img,
        galleryImages: [hotel6Img, hotel5Img, hotel3Img, hotel2Img, hotel1Img],
        available: false,
        highlights: [
          'Private study with executive desk',
          'Formal dining room for entertaining',
          'Two marble bathrooms',
          'Complimentary access to Royal Spa',
        ],
        cancellationPolicy: 'Free cancellation up to 72 hours before check-in',
        checkInTime: '3:00 PM',
        checkOutTime: '12:00 PM',
      },
    ],
    amenitiesDetails: {
      general: ['Free WiFi', '24/7 Butler Service', 'Laundry Service', 'Valet Parking'],
      'food-drink': ['Fine Dining Restaurant', 'Rooftop Bar', 'Afternoon Tea'],
      wellness: ['Royal Spa', 'Fitness Center', 'Pool'],
      business: ['Business Center', 'Meeting Rooms', 'Banquet Hall'],
      outdoor: ['City Views', 'Rooftop Pool'],
    },
    policies: {
      checkIn: '3:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 72 hours before check-in',
      children: 'Children under 6 stay free',
      pets: 'Not allowed',
      payment: 'Credit card required at check-in',
    },
    contact: {
      phone: '+971 4 123 4567',
      email: 'reservations@royalpalacedubai.com',
      website: 'www.royalpalacedubai.com',
    },
    locationDetails: {
      address: 'Sheikh Zayed Road, Dubai, UAE',
      coordinates: { lat: 25.2048, lng: 55.2708 },
      nearby: [
        { name: 'Dubai Mall', distance: '2 km' },
        { name: 'Burj Khalifa', distance: '2.5 km' },
        { name: 'Dubai International Airport', distance: '12 km' },
        { name: 'Palm Jumeirah', distance: '8 km' },
      ],
    },
    reviews: [
      {
        id: 'rev1',
        user: {
          name: 'Abdullah M.',
          avatar: '/src/assets/images/avatar-1.jpg',
          location: 'Riyadh, Saudi Arabia',
        },
        rating: 5,
        date: '2026-07-12',
        comment: 'Truly royal treatment! The service was impeccable and the room was absolutely stunning.',
        verified: true,
        helpful: 15,
      },
    ],
  },

  // ==========================================
  // HOTEL 6: Sunset Paradise
  // ==========================================
  6: {
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
    galleryImages: [hotel6Img, hotel4Img, hotel5Img, hotel3Img, hotel2Img],
    roomTypes: [
      {
        id: 'r1',
        name: 'Sunset View Room',
        type: 'Standard Room',
        description: 'Cliffside room with stunning sunset views. Features a queen bed, private balcony, and infinity pool access.',
        capacity: 2,
        maxChildren: 1,
        size: 28,
        bedTypes: ['Queen Size Bed (160cm x 200cm)'],
        amenities: ['Queen Bed', 'Sunset View', 'Private Balcony', 'Infinity Pool Access', 'Free WiFi', 'Smart TV', 'Safe', 'Air Conditioning'],
        price: 410,
        image: hotel6Img,
        galleryImages: [hotel6Img, hotel4Img, hotel5Img, hotel2Img],
        available: true,
        highlights: [
          'Private balcony with sunset views',
          'Access to cliffside infinity pool',
          'Panoramic views of the caldera',
          'Complimentary sunset cocktails',
        ],
        cancellationPolicy: 'Free cancellation up to 48 hours before check-in',
        checkInTime: '3:00 PM',
        checkOutTime: '11:00 AM',
      },
      {
        id: 'r2',
        name: 'Villa with Private Pool',
        type: 'Villa',
        description: 'Private villa with infinity pool and panoramic sunset views. Features a king bed, outdoor living area, and personal chef service.',
        capacity: 4,
        maxChildren: 2,
        size: 80,
        bedTypes: ['King Size Bed (180cm x 200cm)', 'Sofa Bed'],
        amenities: ['King Bed', 'Private Pool', 'Sunset View', 'Outdoor Living Area', 'Personal Chef', 'Free WiFi', 'Smart TV', 'Minibar', 'Safe', 'Air Conditioning'],
        price: 850,
        image: hotel5Img,
        galleryImages: [hotel5Img, hotel6Img, hotel4Img, hotel3Img, hotel1Img],
        available: true,
        highlights: [
          'Private infinity pool overlooking the sea',
          'Personal chef for in-villa dining',
          'Outdoor living and dining area',
          'Complimentary spa treatment',
        ],
        cancellationPolicy: 'Free cancellation up to 72 hours before check-in',
        checkInTime: '3:00 PM',
        checkOutTime: '11:00 AM',
      },
    ],
    amenitiesDetails: {
      general: ['Free WiFi', 'Concierge', 'Daily Housekeeping', 'Laundry Service'],
      'food-drink': ['Restaurant', 'Bar', 'Room Service', 'Sunset Cocktail Hour'],
      wellness: ['Spa', 'Fitness Center'],
      business: ['Meeting Room'],
      outdoor: ['Infinity Pool', 'Sunset Views', 'Hiking Trails'],
    },
    policies: {
      checkIn: '3:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 48 hours before check-in',
      children: 'Children under 12 stay free',
      pets: 'Not allowed',
      payment: 'Credit card required at check-in',
    },
    contact: {
      phone: '+30 2286 123 4567',
      email: 'info@sunsetparadise.gr',
      website: 'www.sunsetparadise.gr',
    },
    locationDetails: {
      address: 'Oia, Santorini, Greece',
      coordinates: { lat: 36.4613, lng: 25.3754 },
      nearby: [
        { name: 'Santorini Airport', distance: '15 km' },
        { name: 'Oia Village', distance: '1 km' },
        { name: 'Red Beach', distance: '8 km' },
        { name: 'Fira', distance: '12 km' },
      ],
    },
    reviews: [
      {
        id: 'rev1',
        user: {
          name: 'Elena K.',
          avatar: '/src/assets/images/avatar-1.jpg',
          location: 'Athens, Greece',
        },
        rating: 5,
        date: '2026-07-15',
        comment: 'The sunset views are absolutely breathtaking! The infinity pool is a dream. Highly recommend!',
        verified: true,
        helpful: 18,
      },
    ],
  },

  // ==========================================
  // HOTEL 7: Riverside Lodge
  // ==========================================
  7: {
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
    galleryImages: [hotel1Img, hotel6Img, hotel3Img, hotel5Img, hotel2Img],
    roomTypes: [
      {
        id: 'r1',
        name: 'River View Room',
        type: 'Standard Room',
        description: 'Charming room with Seine River and Eiffel Tower views. Features a queen bed, antique furniture, and Parisian decor.',
        capacity: 2,
        maxChildren: 1,
        size: 25,
        bedTypes: ['Queen Size Bed (160cm x 200cm)'],
        amenities: ['Queen Bed', 'River View', 'Eiffel Tower View', 'Antique Furniture', 'Free WiFi', 'Smart TV', 'Safe', 'Air Conditioning'],
        price: 250,
        image: hotel1Img,
        galleryImages: [hotel1Img, hotel6Img, hotel3Img, hotel5Img],
        available: true,
        highlights: [
          'Seine River and Eiffel Tower views',
          'Charming Parisian decor',
          'Prime location in the heart of Paris',
          'Complimentary French breakfast',
        ],
        cancellationPolicy: 'Free cancellation up to 48 hours before check-in',
        checkInTime: '3:00 PM',
        checkOutTime: '12:00 PM',
      },
      {
        id: 'r2',
        name: 'Suite with Terrace',
        type: 'Suite',
        description: 'Spacious suite with private terrace and Eiffel Tower views. Features a king bed, living area, and walk-in closet.',
        capacity: 3,
        maxChildren: 1,
        size: 45,
        bedTypes: ['King Size Bed (180cm x 200cm)', 'Sofa Bed'],
        amenities: ['King Bed', 'Private Terrace', 'Eiffel Tower View', 'Living Area', 'Walk-in Closet', 'Free WiFi', 'Smart TV', 'Minibar', 'Safe', 'Air Conditioning'],
        price: 420,
        image: hotel6Img,
        galleryImages: [hotel6Img, hotel1Img, hotel3Img, hotel5Img, hotel2Img],
        available: true,
        highlights: [
          'Private terrace with Eiffel Tower views',
          'Spacious living area for relaxation',
          'Walk-in closet with ample storage',
          'Complimentary champagne on arrival',
        ],
        cancellationPolicy: 'Free cancellation up to 48 hours before check-in',
        checkInTime: '3:00 PM',
        checkOutTime: '12:00 PM',
      },
    ],
    amenitiesDetails: {
      general: ['Free WiFi', 'Concierge', 'Daily Housekeeping'],
      'food-drink': ['Restaurant', 'Bar', 'Breakfast'],
      wellness: ['Spa'],
      business: ['Meeting Room'],
      outdoor: ['River Views', 'Eiffel Tower Views'],
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
      phone: '+33 1 42 34 56 78',
      email: 'info@riversidelodge.com',
      website: 'www.riversidelodge.com',
    },
    locationDetails: {
      address: '15 Rue de la Seine, 75006 Paris, France',
      coordinates: { lat: 48.8566, lng: 2.3522 },
      nearby: [
        { name: 'Eiffel Tower', distance: '1.5 km' },
        { name: 'Louvre Museum', distance: '2 km' },
        { name: 'Notre Dame', distance: '1 km' },
        { name: 'Latin Quarter', distance: '0.5 km' },
      ],
    },
    reviews: [
      {
        id: 'rev1',
        user: {
          name: 'Sophie M.',
          avatar: '/src/assets/images/avatar-1.jpg',
          location: 'Lyon, France',
        },
        rating: 5,
        date: '2026-07-08',
        comment: 'Perfect location right by the Seine! The Eiffel Tower views from the terrace are magical.',
        verified: true,
        helpful: 10,
      },
    ],
  },

  // ==========================================
  // HOTEL 8: Villa Serenity
  // ==========================================
  8: {
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
    galleryImages: [hotel2Img, hotel5Img, hotel1Img, hotel4Img, hotel6Img],
    roomTypes: [
      {
        id: 'r1',
        name: 'Garden Suite',
        type: 'Suite',
        description: 'Private suite with tropical garden views and personal concierge. Features a king bed, outdoor terrace, and spa bathroom.',
        capacity: 2,
        maxChildren: 1,
        size: 40,
        bedTypes: ['King Size Bed (180cm x 200cm)'],
        amenities: ['King Bed', 'Garden View', 'Outdoor Terrace', 'Spa Bathroom', 'Personal Concierge', 'Free WiFi', 'Smart TV', 'Minibar', 'Safe', 'Air Conditioning'],
        price: 390,
        image: hotel2Img,
        galleryImages: [hotel2Img, hotel5Img, hotel1Img, hotel4Img],
        available: true,
        highlights: [
          'Private outdoor terrace with garden views',
          'Spa bathroom with rain shower and bath tub',
          'Personal concierge service',
          'Access to villa gardens and pool',
        ],
        cancellationPolicy: 'Free cancellation up to 48 hours before check-in',
        checkInTime: '2:00 PM',
        checkOutTime: '12:00 PM',
      },
      {
        id: 'r2',
        name: 'Grand Villa',
        type: 'Villa',
        description: 'Private luxury villa with personal concierge, tropical gardens, and private pool. Features three bedrooms, a media room, and a gourmet kitchen.',
        capacity: 6,
        maxChildren: 3,
        size: 120,
        bedTypes: ['King Size Bed (180cm x 200cm)', 'Queen Size Bed (160cm x 200cm)', 'Queen Size Bed (160cm x 200cm)'],
        amenities: ['Three Bedrooms', 'Private Pool', 'Media Room', 'Gourmet Kitchen', 'Tropical Gardens', 'Personal Concierge', 'Free WiFi', 'Smart TV', 'Minibar', 'Safe', 'Air Conditioning'],
        price: 950,
        image: hotel5Img,
        galleryImages: [hotel5Img, hotel2Img, hotel1Img, hotel4Img, hotel3Img],
        available: true,
        highlights: [
          'Three spacious bedrooms with en-suite bathrooms',
          'Private pool surrounded by tropical gardens',
          'Media room for movie nights',
          'Gourmet kitchen for in-villa dining',
        ],
        cancellationPolicy: 'Free cancellation up to 72 hours before check-in',
        checkInTime: '2:00 PM',
        checkOutTime: '12:00 PM',
      },
    ],
    amenitiesDetails: {
      general: ['Free WiFi', 'Personal Concierge', 'Daily Housekeeping', 'Laundry Service'],
      'food-drink': ['Restaurant', 'In-Villa Dining', 'Breakfast'],
      wellness: ['Spa', 'Fitness Center', 'Yoga'],
      business: ['Business Center'],
      outdoor: ['Private Pool', 'Tropical Gardens', 'Outdoor Terrace'],
    },
    policies: {
      checkIn: '2:00 PM',
      checkOut: '12:00 PM',
      cancellation: 'Free cancellation up to 48 hours before check-in',
      children: 'Children under 12 stay free',
      pets: 'Not allowed',
      payment: 'Credit card required at check-in',
    },
    contact: {
      phone: '+65 6234 5678',
      email: 'reservations@villaserenity.com',
      website: 'www.villaserenity.com',
    },
    locationDetails: {
      address: '1 Garden Road, Singapore 248000',
      coordinates: { lat: 1.3084, lng: 103.8466 },
      nearby: [
        { name: 'Singapore Botanic Gardens', distance: '2 km' },
        { name: 'Orchard Road', distance: '4 km' },
        { name: 'Marina Bay Sands', distance: '6 km' },
        { name: 'Changi Airport', distance: '18 km' },
      ],
    },
    reviews: [
      {
        id: 'rev1',
        user: {
          name: 'Daniel W.',
          avatar: '/src/assets/images/avatar-1.jpg',
          location: 'Kuala Lumpur, Malaysia',
        },
        rating: 5,
        date: '2026-07-05',
        comment: 'Absolute serenity! The villa is stunning and the staff made us feel like royalty.',
        verified: true,
        helpful: 14,
      },
    ],
  },
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get hotel by ID with full details
 */
export const getHotelById = (id) => {
  // Convert id to number if it's a string
  const hotelId = typeof id === 'string' ? parseInt(id, 10) : id;
  
  // Check detailed data first
  if (mockHotelsDetail[hotelId]) {
    return mockHotelsDetail[hotelId];
  }
  
  // Fallback to base mock data
  const hotel = mockHotels.find((h) => h.id === hotelId);
  return hotel || null;
};

/**
 * Get a specific room by hotel ID and room ID
 */
export const getRoomById = (hotelId, roomId) => {
  // Convert hotelId to number if it's a string
  const hotelIdNum = typeof hotelId === 'string' ? parseInt(hotelId, 10) : hotelId;
  
  const hotel = getHotelById(hotelIdNum);
  if (!hotel) {
    console.warn(`Hotel with ID ${hotelId} not found`);
    return null;
  }

  // Check if hotel has roomTypes
  if (!hotel.roomTypes || !Array.isArray(hotel.roomTypes)) {
    console.warn(`Hotel ${hotelId} has no roomTypes defined`);
    return null;
  }

  // Find the room in the hotel's roomTypes array
  const room = hotel.roomTypes.find((r) => r.id === roomId);
  if (!room) {
    console.warn(`Room with ID ${roomId} not found in hotel ${hotelId}`);
    return null;
  }

  // Enrich room with hotel context
  return {
    ...room,
    hotelName: hotel.name,
    hotelLocation: hotel.location,
    hotelRating: hotel.rating,
    hotelId: hotelIdNum,
  };
};

/**
 * Get similar rooms (same hotel, different room types)
 */
export const getSimilarRooms = (hotelId, currentRoomId, limit = 3) => {
  const hotelIdNum = typeof hotelId === 'string' ? parseInt(hotelId, 10) : hotelId;
  const hotel = getHotelById(hotelIdNum);
  if (!hotel) return [];

  return hotel.roomTypes
    ?.filter((r) => r.id !== currentRoomId)
    ?.slice(0, limit) || [];
};

/**
 * Get similar hotels (exclude current)
 */
export const getSimilarHotels = (currentHotelId, limit = 4) => {
  const hotelIdNum = typeof currentHotelId === 'string' ? parseInt(currentHotelId, 10) : currentHotelId;
  return mockHotels
    .filter((h) => h.id !== hotelIdNum)
    .slice(0, limit);
};

/**
 * Get all amenities from a hotel's detailed data
 */
export const getAmenitiesList = (hotel) => {
  if (hotel?.amenitiesDetails) {
    return Object.values(hotel.amenitiesDetails).flat();
  }
  return hotel?.amenities || [];
};

export default mockHotels;