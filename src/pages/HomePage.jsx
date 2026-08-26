import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
import HotelSection from '../components/home/HotelSection';
import FeatureSection from '../components/home/FeatureSection';
import DestinationSection from '../components/home/DestinationSection';
import TestimonialSection from '../components/home/TestimonialSection';
import CTASection from '../components/home/CTASection';

/**
 * HomePage Component - Main landing page
 * 
 * Assembled from multiple sections:
 * - HeroSection: Search and brand messaging
 * - CategorySection: Browse by category
 * - HotelSection: Featured hotels carousel
 * - FeatureSection: Why StayEase features
 * - DestinationSection: Popular destinations grid
 * - TestimonialSection: User reviews
 * - CTASection: Call to action
 */
const HomePage = () => {
  // Structured data for rich search engine snippets
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'StayEase',
    url: window.location.origin,
    description: 'Book hotels, resorts, and vacation rentals worldwide with the best price guarantee.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${window.location.origin}/hotels?location={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      {/* SEO Meta Tags & Structured Data */}
      <Helmet>
        <title>StayEase - Book Hotels, Resorts & Vacation Rentals Worldwide</title>
        <meta 
          name="description" 
          content="Find the perfect hotel, resort, or vacation rental with StayEase. Best price guarantee, free cancellation, and 24/7 support. Book your stay today!" 
        />
        <meta 
          property="og:title" 
          content="StayEase - Book Hotels, Resorts & Vacation Rentals Worldwide" 
        />
        <meta 
          property="og:description" 
          content="Find the perfect hotel, resort, or vacation rental with StayEase. Best price guarantee, free cancellation, and 24/7 support. Book your stay today!" 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta 
          name="twitter:card" 
          content="summary_large_image" 
        />
        <link rel="canonical" href={window.location.href} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Page Content */}
      <main>
        <HeroSection />
        <CategorySection />
        <HotelSection />
        <FeatureSection />
        <DestinationSection />
        <TestimonialSection />
        <CTASection />
      </main>
    </>
  );
};

export default HomePage;