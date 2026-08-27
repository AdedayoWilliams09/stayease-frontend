
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

### 📋 Files Affected:
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






##  Links

- Backend Repository: [View Backend Code](https://github.com/AdedayoWilliams09/stayease-backend.git)

- Live Frontend (Vercel): https://stayease-frontend-pi.vercel.app/

- Live API (Render): https://stayease-backend-3fy1.onrender.com

### License

Proprietary - All rights reserved

