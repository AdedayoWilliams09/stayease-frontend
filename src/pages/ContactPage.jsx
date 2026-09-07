import { Helmet } from 'react-helmet-async';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import CTASection from '../components/home/CTASection';

/**
 * ContactPage Component - Contact StayEase
 * 
 * Sections:
 * 1. ContactHero - "Get in Touch" headline and subheadline
 * 2. ContactForm - Contact form with validation
 * 3. ContactInfo - Contact details and social links
 * 4. CTASection - Call to action (reused from homepage)
 */
const ContactPage = () => {
  // Structured data for rich snippets
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact StayEase',
    description: 'Get in touch with the StayEase support team for assistance with bookings, cancellations, and travel inquiries.',
    url: window.location.href,
    mainEntity: {
      '@type': 'Organization',
      name: 'StayEase',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-800-555-0123',
        contactType: 'Customer Service',
        email: 'support@stayease.com',
        availableLanguage: ['English'],
      },
    },
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact StayEase - Get in Touch with Our Support Team</title>
        <meta 
          name="description" 
          content="Have questions or need assistance? Contact the StayEase support team. We're here to help with bookings, cancellations, and travel inquiries." 
        />
        <meta 
          property="og:title" 
          content="Contact StayEase - Get in Touch with Our Support Team" 
        />
        <meta 
          property="og:description" 
          content="Have questions or need assistance? Contact the StayEase support team. We're here to help with bookings, cancellations, and travel inquiries." 
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
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <CTASection />
      </main>
    </>
  );
};

export default ContactPage;