import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/common/Container';
import SearchBar from '../components/hotels/SearchBar';
import FiltersSidebar from '../components/hotels/FiltersSidebar';
import ResultsSummary from '../components/hotels/ResultsSummary';
import HotelCard from '../components/hotels/HotelCard';
import HotelCardSkeleton from '../components/hotels/HotelCardSkeleton';
import EmptyState from '../components/hotels/EmptyState';
import Pagination from '../components/hotels/Pagination';
import mockHotels, { allAmenities, allPropertyTypes } from '../data/mockHotels';

// Number of items per page
const ITEMS_PER_PAGE = 6;

/**
 * HotelsPage Component - Main hotel listing page
 * 
 * Features:
 * - Sticky search bar with persistent parameters
 * - Filter sidebar (price, rating, amenities, property type)
 * - Results summary with sort and view toggle
 * - Hotel grid with pagination
 * - URL query parameter sync
 */
const HotelsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get initial values from URL
  const initialLocation = searchParams.get('location') || '';
  const initialCheckIn = searchParams.get('checkIn') || '';
  const initialCheckOut = searchParams.get('checkOut') || '';
  const initialGuests = parseInt(searchParams.get('guests')) || 2;
  const initialSort = searchParams.get('sort') || 'recommended';
  const initialPage = parseInt(searchParams.get('page')) || 1;
  const initialPriceMin = parseInt(searchParams.get('priceMin')) || 0;
  const initialPriceMax = parseInt(searchParams.get('priceMax')) || 1000;
  const initialRating = parseInt(searchParams.get('rating')) || 0;
  const initialAmenities = searchParams.get('amenities') 
    ? searchParams.get('amenities').split(',') 
    : [];
  const initialPropertyTypes = searchParams.get('propertyTypes')
    ? searchParams.get('propertyTypes').split(',')
    : [];

  // State
  const [searchData, setSearchData] = useState({
    location: initialLocation,
    checkIn: initialCheckIn,
    checkOut: initialCheckOut,
    guests: initialGuests,
  });
  
  const [filters, setFilters] = useState({
    priceRange: { min: initialPriceMin, max: initialPriceMax },
    rating: initialRating,
    amenities: initialAmenities,
    propertyTypes: initialPropertyTypes,
  });
  
  const [sortBy, setSortBy] = useState(initialSort);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [viewMode, setViewMode] = useState('list');
  const [isLoading, setIsLoading] = useState(false);

  // Helper: Filter hotels
  const filteredHotels = useMemo(() => {
    let results = [...mockHotels];

    // Location filter (simple search in name and location)
    if (searchData.location) {
      const query = searchData.location.toLowerCase();
      results = results.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(query) ||
          hotel.location.toLowerCase().includes(query)
      );
    }

    // Price range filter
    const { min, max } = filters.priceRange;
    results = results.filter(
      (hotel) => hotel.price >= min && hotel.price <= max
    );

    // Rating filter
    if (filters.rating > 0) {
      results = results.filter((hotel) => hotel.rating >= filters.rating);
    }

    // Amenities filter
    if (filters.amenities.length > 0) {
      results = results.filter((hotel) =>
        filters.amenities.every((amenity) =>
          hotel.amenities.includes(amenity)
        )
      );
    }

    // Property type filter
    if (filters.propertyTypes.length > 0) {
      results = results.filter((hotel) =>
        filters.propertyTypes.includes(hotel.propertyType)
      );
    }

    return results;
  }, [mockHotels, searchData.location, filters]);

  // Helper: Sort hotels
  const sortedHotels = useMemo(() => {
    const results = [...filteredHotels];

    switch (sortBy) {
      case 'price_asc':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'distance':
        results.sort((a, b) => a.distance - b.distance);
        break;
      case 'recommended':
      default:
        // Keep original order (featured first, then by rating)
        results.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.rating - a.rating;
        });
        break;
    }

    return results;
  }, [filteredHotels, sortBy]);

  // Pagination
  const totalResults = sortedHotels.length;
  const totalPages = Math.ceil(totalResults / ITEMS_PER_PAGE);
  const paginatedHotels = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return sortedHotels.slice(startIndex, endIndex);
  }, [sortedHotels, currentPage]);

  // Update URL when state changes
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (searchData.location) params.set('location', searchData.location);
    if (searchData.checkIn) params.set('checkIn', searchData.checkIn);
    if (searchData.checkOut) params.set('checkOut', searchData.checkOut);
    if (searchData.guests > 1) params.set('guests', searchData.guests.toString());
    
    if (filters.priceRange.min > 0) params.set('priceMin', filters.priceRange.min.toString());
    if (filters.priceRange.max < 1000) params.set('priceMax', filters.priceRange.max.toString());
    if (filters.rating > 0) params.set('rating', filters.rating.toString());
    if (filters.amenities.length > 0) params.set('amenities', filters.amenities.join(','));
    if (filters.propertyTypes.length > 0) params.set('propertyTypes', filters.propertyTypes.join(','));
    
    if (sortBy !== 'recommended') params.set('sort', sortBy);
    if (currentPage > 1) params.set('page', currentPage.toString());

    setSearchParams(params, { replace: true });
  }, [searchData, filters, sortBy, currentPage, setSearchParams]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Handlers
  const handleSearch = (newSearchData) => {
    setSearchData(newSearchData);
    setCurrentPage(1);
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  const handleClearFilters = () => {
    setFilters({
      priceRange: { min: 0, max: 1000 },
      rating: 0,
      amenities: [],
      propertyTypes: [],
    });
    setCurrentPage(1);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const handleModifySearch = () => {
    // Scroll to search bar
    document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Get location for SEO
  const locationDisplay = searchData.location || 'Worldwide';

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Hotels in {locationDisplay} - Book Hotels Worldwide | StayEase</title>
        <meta 
          name="description" 
          content={`Find and book the best hotels in ${locationDisplay}. Compare prices, read reviews, and book with confidence. Best price guarantee.`} 
        />
        <meta 
          property="og:title" 
          content={`Hotels in ${locationDisplay} - Book Hotels Worldwide | StayEase`} 
        />
        <meta 
          property="og:description" 
          content={`Find and book the best hotels in ${locationDisplay}. Compare prices, read reviews, and book with confidence. Best price guarantee.`} 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      {/* Search Bar */}
      <SearchBar initialValues={searchData} onSearch={handleSearch} />

      {/* Main Content */}
      <Container className="py-4 md:py-6">
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <FiltersSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />

          {/* Results Area */}
          <div className="flex-1 min-w-0">
            {/* Results Summary */}
            <ResultsSummary
              totalResults={totalResults}
              location={searchData.location}
              sortBy={sortBy}
              onSortChange={handleSortChange}
              viewMode={viewMode}
              onViewModeChange={handleViewModeChange}
            />

            {/* Hotel Grid */}
            <AnimatePresence mode="wait">
              {isLoading ? (
                // Loading skeletons
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <HotelCardSkeleton key={index} />
                  ))}
                </div>
              ) : paginatedHotels.length > 0 ? (
                // Hotel cards
                <motion.div
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6"
                >
                  {paginatedHotels.map((hotel) => (
                    <HotelCard
                      key={hotel.id}
                      hotel={hotel}
                      checkIn={searchData.checkIn}
                      checkOut={searchData.checkOut}
                      guests={searchData.guests}
                      showWishlist={false} // Will be enabled with auth
                    />
                  ))}
                </motion.div>
              ) : (
                // Empty state
                <EmptyState
                  onClearFilters={handleClearFilters}
                  onModifySearch={handleModifySearch}
                />
              )}
            </AnimatePresence>

            {/* Pagination */}
            {!isLoading && paginatedHotels.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default HotelsPage;