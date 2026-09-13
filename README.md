
# StayEase Frontend - Foundation Set up

 Hotel Booking Platform - Frontend Foundation


## What This Is

This is the **frontend foundation** for the StayEase hotel booking platform. It provides:

-  React 19 with Vite for fast development
-  Tailwind CSS 4.2.1 for styling
-  Redux Toolkit for state management
-  Axios for API communication
-  Test button to verify backend connection



##  Quick Start

### 1. Clone the repository

git clone https://github.com/AdedayoWilliams09/stayease-frontend.git


- cd frontend

### 2. Install dependencies
npm install

### 3. Set up environment variables

cp .env.example .env
# Edit .env with your backend URL

### 4. Start the development server

npm run dev

### 5. Test the backend connection

1. Open http://localhost:5173

2. Click the "🔗 Test Backend Connection" button

3. Open the browser console (F12)

4. Look for the response logs

### Folder Structure

frontend/
├── src/
│   ├── store/
│   │   ├── store.js          # Redux store configuration
│   │   └── apiSlice.js       # API test slice with thunk
│   ├── utils/
│   │   └── axiosConfig.js    # Axios instance configuration
│   ├── App.jsx               # Main App component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles with Tailwind
├── .env                      # Environment variables (not committed)
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore file
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
└── README.md                # This file

### Environment Variables

Variable	        Example	                 Purpose
VITE_API_URL	http://localhost:5000	Backend API base URL

### Testing

__Test Backend Connection__

1. Open your browser and go to http://localhost:5173

2. Press F12 to open DevTools

3. Click the "🔗 Test Backend Connection" button

4. In the console, you should see:

 [App] Testing backend connection...
 [App] Backend connection successful!
 [App] Response data: { success: true, ... }

__Failed Connection (Backend Off)__

1. Stop the backend server

2. Click the test button

3. Console should show:

 [App] Backend connection failed: Network Error

 __Tailwind CSS Verification__

 1. Open http://localhost:5173

2. The heading " StayEase" should be:

- Large (text-4xl)

- Bold (font-bold)

- Blue (text-blue-600)

## Troubleshooting

__Backend Connection Failed__

 [Axios] Network Error: No response received

 __Solution:__

 1. Verify backend is running: cd ../backend && npm run dev

2. Check VITE_API_URL in .env matches backend URL

3. Check CORS configuration in backend

### Tailwind CSS Not Working

[plugin:vite:css] @import 'tailwindcss' not found

__Solution:__

1. Verify Tailwind is installed: npm list tailwindcss

2. Check vite.config.js has tailwindcss() plugin

3. Check index.css starts with @import 'tailwindcss';

### Redux DevTools Not Showing

__Solution:__

1. Install Redux DevTools extension

2. Ensure devTools: import.meta.env.DEV is in store configuration

3. Open DevTools → Redux tab

### Tech Stack

- React: 19.3.0+

- Vite: 7.3.1+

- Tailwind CSS: 4.2.1+

- Redux Toolkit: 2.5.0+

- Axios: 1.8.0+



## Homepage Implementation (COMPLETED)

### Page Added
- **Homepage** (`/`) - Full landing page with 9 sections

### New Components Created

#### Common Components
| Component | Purpose | Location |
|-----------|---------|----------|
| `Button` | Reusable button with variants (primary, secondary, outline, ghost, danger) | `components/common/Button.jsx` |
| `Input` | Reusable input with label, error, and icon support | `components/common/Input.jsx` |
| `Logo` | Brand logo with text and icon | `components/common/Logo.jsx` |
| `Container` | Centered container with max-width | `components/common/Container.jsx` |
| `SectionHeader` | Section title with optional "View All" link | `components/common/SectionHeader.jsx` |

#### Layout Components
| Component | Purpose | Location |
|-----------|---------|----------|
| `Header` | Sticky navigation bar with logo, links, theme toggle, auth buttons | `components/layout/Header.jsx` |
| `Footer` | Global footer with links, social icons, newsletter | `components/layout/Footer.jsx` |
| `NavLinks` | Navigation links with active state | `components/layout/NavLinks.jsx` |
| `MobileMenu` | Slide-out drawer for mobile navigation | `components/layout/MobileMenu.jsx` |
| `ThemeToggle` | Dark/light mode toggle with persistence | `components/layout/ThemeToggle.jsx` |

#### Homepage Section Components
| Component | Purpose | Location |
|-----------|---------|----------|
| `HeroSection` | Hero with search form and trust indicators | `components/home/HeroSection.jsx` |
| `CategorySection` | Featured categories grid | `components/home/CategorySection.jsx` |
| `HotelSection` | Featured hotels carousel | `components/home/HotelSection.jsx` |
| `FeatureSection` | "Why StayEase" feature cards | `components/home/FeatureSection.jsx` |
| `DestinationSection` | Popular destinations grid | `components/home/DestinationSection.jsx` |
| `TestimonialSection` | User reviews carousel | `components/home/TestimonialSection.jsx` |
| `CTASection` | Call to action banner | `components/home/CTASection.jsx` |

### New Dependencies Installed
| Package | Purpose |
|---------|---------|
| `react-router-dom@7.0.0+` | Client-side routing |
| `framer-motion@12.0.0+` | Animations and transitions |
| `react-helmet-async@2.0.0+` | SEO meta tags |
| `react-hook-form@7.50.0+` | Form validation |
| `react-icons@5.5.0+` | Icon library |
| `react-intersection-observer@9.8.0+` | Scroll animations |

### Routing
- Root route (`/`) → `HomePage` (lazy loaded)
- Header and Footer wrap all pages

### Images Required
The following images should be added to `frontend/src/assets/images/`:

| Image | Size | Description |
|-------|------|-------------|
| `hero-bg.jpg` | 1920x1080 | Hero background |
| `cta-bg.jpg` | 1920x600 | CTA background |
| `hotel-1.jpg` ~ `hotel-6.jpg` | 800x450 | Hotel cards |
| `paris.jpg`, `tokyo.jpg`, etc. | 600x400 | Destination cards |
| `avatar-1.jpg` ~ `avatar-5.jpg` | 80x80 | Testimonial avatars |
| `favicon.svg` | 64x64 | Favicon |

**Note:** Images are currently using placeholder paths. Real images should be added before deployment.

### Features Implemented
-  Full responsive design (mobile-first)
-  Dark mode with persistence
-  Sticky header with glass effect
-  Mobile hamburger menu with animation
-  Hero section with search form
-  Category grid with hover effects
-  Hotel carousel with scroll controls
-  Feature cards with trust indicators
-  Destination grid with overlay text
-  Testimonial carousel with auto-rotate
-  CTA section with background image
-  SEO meta tags (Helmet)
-  Structured data (JSON-LD)
-  Accessibility (ARIA, semantic HTML)
-  Lazy loading for images and routes
-  Touch-friendly buttons (44px+)

### Known Issues
- Images are using placeholder paths (real images needed)
- Search form navigates to `/hotels` but page doesn't exist yet
- Auth buttons don't navigate anywhere yet
- Newsletter signup only logs to console

### Next Phase
**Phase 3: Authentication Pages** - Login, Register, and auth state management

### Backend README
[Link to backend README](../backend/README.md)

---

## Step 10: Deployment Preparation

###  Files Affected:
- `frontend/.env` (MODIFIED - if needed)
- `frontend/.env.example` (MODIFIED - if needed)


### Implementation:

env
# FILE: frontend/.env
# Development environment variables

VITE_API_URL=http://localhost:5000/api



##  Hotels (Explore) Page (COMPLETED)

### Page Added
- **Hotels Page** (`/hotels`) - Full hotel listing with search, filters, sorting, and pagination

### New Components Created

#### Hotel Components
| Component | Purpose | Location |
|-----------|---------|----------|
| `HotelCard` | Individual hotel card with image carousel | `components/hotels/HotelCard.jsx` |
| `HotelCardSkeleton` | Loading placeholder for hotel cards | `components/hotels/HotelCardSkeleton.jsx` |
| `SearchBar` | Sticky search form with date and guest inputs | `components/hotels/SearchBar.jsx` |
| `FiltersSidebar` | Filter panel with price, rating, amenities, property type | `components/hotels/FiltersSidebar.jsx` |
| `PriceSlider` | Range slider for price filtering | `components/hotels/PriceSlider.jsx` |
| `RatingFilter` | Star rating filter (1-5 stars) | `components/hotels/RatingFilter.jsx` |
| `AmenityFilter` | Amenity checkbox filter | `components/hotels/AmenityFilter.jsx` |
| `PropertyTypeFilter` | Property type checkbox filter | `components/hotels/PropertyTypeFilter.jsx` |
| `ResultsSummary` | Results count, sort dropdown, view toggle | `components/hotels/ResultsSummary.jsx` |
| `EmptyState` | No results message with actions | `components/hotels/EmptyState.jsx` |
| `Pagination` | Page navigation controls | `components/hotels/Pagination.jsx` |

### New Dependencies Installed
| Package | Purpose |
|---------|---------|
| `@radix-ui/react-slider` | Accessible range slider for price filter |

### Data Layer
- `mockHotels.js` - Mock hotel data with imported images
- All amenities and property types exported for filters

### Features Implemented
-  Sticky search bar with persistent parameters
-  Price range slider with min/max values
-  Star rating filter (1-5 stars)
-  Amenity filters (WiFi, Pool, Parking, Restaurant, Gym, Spa, Beachfront)
-  Property type filters (Hotel, Resort, Villa, Apartment, Bed & Breakfast)
-  Results count with location display
-  Sort by: Recommended, Price (low-high), Price (high-low), Rating, Distance
-  View toggle: List / Map (Map placeholder)
-  Hotel card with image carousel
-  Hotel card with rating, amenities, price, total price calculation
-  Pagination with page numbers
-  Empty state when no results
-  Loading skeletons
-  URL query parameter sync (shareable links)
-  Responsive design (mobile-first)
-  Dark mode support
-  Framer Motion animations
-  SEO meta tags
-  Accessibility (ARIA labels, semantic HTML)

### Images Required
The following images should be added to `frontend/src/assets/images/`:

| Image | Size | Description |
|-------|------|-------------|
| `hotel-1.jpg` ~ `hotel-6.jpg` | 800x450 | Hotel card images |

### URL Query Parameters
| Parameter | Description | Example |
|-----------|-------------|---------|
| `location` | Search location | `Paris` |
| `checkIn` | Check-in date | `2026-09-01` |
| `checkOut` | Check-out date | `2026-09-05` |
| `guests` | Number of guests | `2` |
| `sort` | Sort option | `price_asc` |
| `priceMin` | Minimum price | `100` |
| `priceMax` | Maximum price | `500` |
| `rating` | Minimum rating | `4` |
| `amenities` | Comma-separated amenities | `WiFi,Pool` |
| `propertyTypes` | Comma-separated property types | `Hotel,Resort` |
| `page` | Page number | `2` |




## Phase 4: Hotel Detail Page (COMPLETED)

### Page Added
- **Hotel Detail Page** (`/hotels/:id`) - Complete hotel detail view with booking widget

### New Components Created

#### Hotel Detail Components
| Component | Purpose | Location |
|-----------|---------|----------|
| `ImageGallery` | Full-width gallery with thumbnails and lightbox | `components/hotels/ImageGallery.jsx` |
| `HotelInfo` | Hotel information with policies and contact | `components/hotels/HotelInfo.jsx` |
| `BookingWidget` | Sticky booking form with availability checking | `components/hotels/BookingWidget.jsx` |
| `AmenitiesList` | Categorized amenities with icons | `components/hotels/AmenitiesList.jsx` |
| `RoomTypes` | Room cards with selection and expandable details | `components/hotels/RoomTypes.jsx` |
| `LocationMap` | Location display with nearby places | `components/hotels/LocationMap.jsx` |
| `ReviewsSection` | Reviews with rating breakdown and pagination | `components/hotels/ReviewsSection.jsx` |
| `ReviewCard` | Individual review display | `components/hotels/ReviewCard.jsx` |
| `SimilarHotels` | Carousel of recommended hotels | `components/hotels/SimilarHotels.jsx` |

### Data Updates
- Extended `mockHotels.js` with detail fields:
  - `galleryImages`: Additional images for gallery
  - `roomTypes`: Array of room objects with amenities and prices
  - `amenitiesDetails`: Categorized amenities
  - `policies`: Check-in/out, cancellation, children, pets
  - `contact`: Phone, email, website
  - `locationDetails`: Address, coordinates, nearby places
  - `reviews`: Array of review objects
- Added `getHotelById()` helper function
- Added `getSimilarHotels()` helper function

### Features Implemented
-  Image gallery with thumbnail navigation
-  Lightbox for full-screen image viewing
-  Hotel information display with policies
-  Sticky booking widget with date/guest/room selection
-  Availability checking (simulated)
-  Real-time price calculation
-  Categorized amenities with icons
-  Room types with expandable details
-  Room selection with visual feedback
-  Location display with nearby places
-  Google Maps integration link
-  Reviews with rating breakdown
-  Review pagination
-  Similar hotels carousel
-  Breadcrumb navigation
-  Back to search button
-  Loading skeleton states
-  Not found state
-  SEO meta tags
-  Responsive design (mobile-first)
-  Dark mode support
-  Framer Motion animations

### URL Parameters
| Parameter | Description | Example |
|-----------|-------------|---------|
| `id` | Hotel ID | `1` |

### Dependencies
No new dependencies were added in this phase.

### Known Issues
- Map is a placeholder (Google Maps integration coming in future phase)
- Write review functionality is a placeholder (requires authentication)
- Real availability checking requires backend API (Phase 4)
- Checkout page not yet implemented
- Wishlist requires authentication 



## Phase 5: Room Detail Page (COMPLETED)

### Page Added
- **Room Detail Page** (`/hotels/:hotelId/rooms/:roomId`) - Complete room detail with gallery, information, booking, amenities, availability calendar, and similar rooms

### New Components Created

#### Room Components
| Component | Purpose | Location |
|-----------|---------|----------|
| `RoomImageGallery` | Room-specific image gallery with lightbox | `components/rooms/RoomImageGallery.jsx` |
| `RoomInfo` | Room information with capacity, size, bed types | `components/rooms/RoomInfo.jsx` |
| `RoomBookingWidget` | Booking form for room with availability checking | `components/rooms/RoomBookingWidget.jsx` |
| `RoomAmenitiesList` | Categorized amenities with icons | `components/rooms/RoomAmenitiesList.jsx` |
| `AvailabilityCalendar` | Monthly calendar showing room availability | `components/rooms/AvailabilityCalendar.jsx` |
| `SimilarRooms` | Carousel of recommended rooms in same hotel | `components/rooms/SimilarRooms.jsx` |

### Data Layer Updates
- Extended `mockHotels.js` with room detail fields
- Added `getRoomById()` helper function
- Added `getSimilarRooms()` helper function
- Room types now include: galleryImages, size, bedTypes, highlights, cancellationPolicy, checkInTime, checkOutTime

### Modified Components
- `RoomTypes.jsx` - "View Details" button now navigates to room detail page

### Features Implemented
-  Room image gallery with thumbnail navigation and lightbox
-  Room information (name, type, capacity, size, bed types, description)
-  Room highlights (key selling points)
-  Booking widget with date selection, guest selection, price calculation
-  Availability checking (simulated)
-  Room amenities list with icons
-  Availability calendar with mock availability data
-  Similar rooms carousel
-  Breadcrumb navigation
-  Loading skeletons
-  Not found state
-  SEO meta tags
-  Responsive design (mobile-first)
-  Dark mode support
-  Framer Motion animations




## Phase 5: About Page (COMPLETED)

### Page Added
- **About Page** (`/about`) - Company story, mission, values, team, and stats

### New Components Created

#### About Components
| Component | Purpose | Location |
|-----------|---------|----------|
| `AboutHero` | Hero section with "Our Story" headline and gradient background | `components/about/AboutHero.jsx` |
| `MissionValues` | Mission statement and 4 core values with icons | `components/about/MissionValues.jsx` |
| `StatsSection` | Platform statistics with animated counters | `components/about/StatsSection.jsx` |
| `TeamSection` | Team member cards with photos, roles, and social links | `components/about/TeamSection.jsx` |

#### New Data Files
| File | Purpose | Location |
|------|---------|----------|
| `mockTeam.js` | Mock team member data with names, roles, bios, and social links | `data/mockTeam.js` |

### Reused Components
| Component | From | Usage |
|-----------|------|-------|
| `CTASection` | Homepage | Call to action at bottom of About page |
| `Container` | Common | Consistent layout wrapper |
| `SectionHeader` | Common | Section title with optional subtitle |

### Features Implemented
-  Full responsive design (mobile-first)
-  Dark mode with persistence
-  Framer Motion animations (hero fade-in, staggered scroll animations)
-  SEO meta tags (Helmet)
-  Structured data (JSON-LD for Organization)
-  Accessibility (ARIA, semantic HTML)
-  Lazy loading for images and route
-  Touch-friendly buttons (44px+)
-  Team member cards with social media links
-  Animated stats counters (counts up on scroll)

### Content
#### Mission Statement
"To make travel seamless and memorable by connecting travelers with the perfect accommodations at the best prices, backed by exceptional service and support."

#### Core Values
1. **Trust** - Transparency, secure bookings, verified reviews
2. **Quality** - Only finest accommodations meeting high standards
3. **Innovation** - Continuously improving the platform
4. **Customer Focus** - Satisfaction from search to stay

#### Stats
- 10,000+ Hotels Worldwide
- 500,000+ Bookings Made
- 4.8/5 Average Rating
- 100+ Countries Worldwide

#### Team
6 team members with:
- Name
- Role
- Bio
- Photo (avatar placeholder)
- Social media links (LinkedIn, Twitter, GitHub, Dribbble)

### Images Required
The following images are used in the About page:

| Image | Size | Description |
|-------|------|-------------|
| `avatar-1.jpg` ~ `avatar-5.jpg` | 80x80 | Team member avatars (reused from homepage) |

**Note:** Team avatars currently use placeholder images from the homepage. Real team photos should be added before deployment.

### New Dependencies Installed
No new dependencies were added in this phase.

### Routing
- About route (`/about`) added with lazy loading

### Known Issues
- Team avatars are using placeholder images (real photos needed)
- Stats are hardcoded (will be API-driven in a future phase)
- No real API integration yet



## Phase 6: Contact Page (COMPLETED)

### Page Added
- **Contact Page** (`/contact`) - Contact form, contact information, and support channels

### New Components Created

#### Contact Components
| Component | Purpose | Location |
|-----------|---------|----------|
| `ContactHero` | Hero section with "Get in Touch" headline and gradient background | `components/contact/ContactHero.jsx` |
| `ContactForm` | Contact form with validation (name, email, subject, message) | `components/contact/ContactForm.jsx` |
| `ContactInfo` | Contact details (email, phone, address) and social media links | `components/contact/ContactInfo.jsx` |

### Reused Components
| Component | From | Usage |
|-----------|------|-------|
| `CTASection` | Homepage | Call to action at bottom of Contact page |
| `Container` | Common | Consistent layout wrapper |
| `SectionHeader` | Common | Section title with optional subtitle |
| `Input` | Common | Form input fields (name, email) |
| `Button` | Common | Form submit button |

### Features Implemented
-  Full responsive design (mobile-first)
-  Dark mode with persistence
-  Framer Motion animations (hero fade-in, form stagger, contact info stagger)
-  Form validation:
  - Required fields (name, email, subject, message)
  - Email format validation
  - Minimum message length (10 characters)
-  Loading state on form submission
-  Success message after submission
-  SEO meta tags (Helmet)
-  Structured data (JSON-LD for ContactPage and Organization)
-  Accessibility (ARIA labels, semantic HTML)
-  Lazy loading for route
-  Touch-friendly buttons (44px+)
-  Social media links (Facebook, Twitter, Instagram, YouTube)

### Content

#### Contact Information
| Type | Value |
|------|-------|
| Email | support@stayease.com |
| Phone | +1 (800) 555-0123 |
| Address | 123 Travel St, New York, NY 10001 |
| Support Hours | Mon-Fri 9am-6pm EST |
| Response Time | Within 24 hours |

#### Form Subjects
- General Inquiry
- Booking Support
- Cancellation
- Feedback
- Partnership

#### Success Message
"Thank you for your message! We'll get back to you within 24 hours."

### Form Validation Rules
| Field | Validation |
|-------|------------|
| Name | Required |
| Email | Required, valid email format |
| Subject | Required |
| Message | Required, minimum 10 characters |

### Images Required
No images are used on the Contact page. All visuals use icons from React Icons.

### New Dependencies Installed
No new dependencies were added in this phase. Reused:
- `react-icons` (for contact icons and social icons)
- `framer-motion` (for animations)
- `react-helmet-async` (for SEO)

### Routing
- Contact route (`/contact`) added with lazy loading
- NavLinks already has "Contact" link 

### SEO Meta Tags
- **Title:** "Contact StayEase - Get in Touch with Our Support Team"
- **Description:** "Have questions or need assistance? Contact the StayEase support team. We're here to help with bookings, cancellations, and travel inquiries."
- **Structured Data:** ContactPage schema with Organization contact point

### Vercel Deployment Fix
Added `vercel.json` to fix 404 errors on page refresh:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}










##  Links

- Backend Repository: [View Backend Code](https://github.com/AdedayoWilliams09/stayease-backend.git)

- Live Frontend (Vercel): https://stayease-frontend-pi.vercel.app/

- Live API (Render): https://stayease-backend-3fy1.onrender.com

### License

Proprietary - All rights reserved

