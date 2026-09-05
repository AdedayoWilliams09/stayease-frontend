import { Helmet } from 'react-helmet-async';
import AboutHero from '../components/about/AboutHero';
import MissionValues from '../components/about/MissionValues';
import StatsSection from '../components/about/StatsSection';
import TeamSection from '../components/about/TeamSection';
import CTASection from '../components/home/CTASection';

/**
 * AboutPage Component - About StayEase
 * 
 * Sections:
 * 1. AboutHero - Story headline and subheadline
 * 2. MissionValues - Mission statement and core values
 * 3. StatsSection - Platform statistics
 * 4. TeamSection - Team members
 * 5. CTASection - Call to action (reused from homepage)
 */
const AboutPage = () => {
  // Structured data for rich snippets
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About StayEase',
    description: 'Learn about StayEase, our mission to connect travelers with exceptional stays, and our commitment to trust, quality, and customer satisfaction.',
    url: window.location.href,
    mainEntity: {
      '@type': 'Organization',
      name: 'StayEase',
      description: 'Hotel booking platform connecting travelers with exceptional stays worldwide.',
      foundingDate: '2020',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: 50,
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'Global',
      },
    },
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About StayEase - Our Story, Mission & Values</title>
        <meta 
          name="description" 
          content="Learn about StayEase, our mission to connect travelers with exceptional stays, and our commitment to trust, quality, and customer satisfaction." 
        />
        <meta 
          property="og:title" 
          content="About StayEase - Our Story, Mission & Values" 
        />
        <meta 
          property="og:description" 
          content="Learn about StayEase, our mission to connect travelers with exceptional stays, and our commitment to trust, quality, and customer satisfaction." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={window.location.href} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Page Content */}
      <main>
        <AboutHero />
        <MissionValues />
        <StatsSection />
        <TeamSection />
        <CTASection />
      </main>
    </>
  );
};

export default AboutPage;