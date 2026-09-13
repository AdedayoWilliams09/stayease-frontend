import { Helmet } from 'react-helmet-async';
import FaqHero from '../components/faq/FaqHero';
import FaqCategories from '../components/faq/FaqCategories';
import FaqContact from '../components/faq/FaqContact';
import CTASection from '../components/home/CTASection';
import mockFaqs from '../data/mockFaqs';

/**
 * FaqPage Component - Frequently Asked Questions
 *
 * Sections:
 * 1. FaqHero - "Frequently Asked Questions" headline
 * 2. FaqCategories - Tabbed categories + accordion
 * 3. FaqContact - "Still have questions?" support callout
 * 4. CTASection - Call to action (reused from homepage)
 *
 * SEO:
 * - Helmet meta tags
 * - FAQPage JSON-LD structured data (rich results in Google)
 */
const FaqPage = () => {
  // Build FAQPage structured data from the same source the UI uses,
  // so structured data always matches on-page content.
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mockFaqs.flatMap((category) =>
      category.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      }))
    ),
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>FAQ - StayEase Help Center</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about booking, payments, cancellations, accounts, and hosting with StayEase."
        />
        <meta
          property="og:title"
          content="FAQ - StayEase Help Center"
        />
        <meta
          property="og:description"
          content="Find answers to frequently asked questions about booking, payments, cancellations, accounts, and hosting with StayEase."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={window.location.href} />

        {/* Structured Data — FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Page Content */}
      <main>
        <FaqHero />
        <FaqCategories />
        <FaqContact />
        <CTASection />
      </main>
    </>
  );
};

export default FaqPage;