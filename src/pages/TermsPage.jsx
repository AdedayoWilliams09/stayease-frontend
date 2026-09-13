import { Helmet } from 'react-helmet-async';
import TermsHero from '../components/terms/TermsHero';
import TermsNav from '../components/terms/TermsNav';
import TermsSection from '../components/terms/TermsSection';
import BackToTopButton from '../components/terms/BackToTopButton';
import CTASection from '../components/home/CTASection';
import Container from '../components/common/Container';
import mockTerms from '../data/mockTerms';

/**
 * TermsPage Component - Terms of Service
 *
 * Sections:
 * 1. TermsHero - "Terms of Service" headline + last updated
 * 2. TermsNav + TermsSection list - sticky TOC + document body
 * 3. CTASection - Call to action (reused from homepage)
 * 4. BackToTopButton - Fixed scroll-to-top affordance
 *
 * SEO:
 * - Helmet meta tags
 * - WebPage JSON-LD schema (safe, non-spammy; Terms is
 *   not a rich-result type so no FAQ/Article-style schema)
 */
const TermsPage = () => {
  const { lastUpdated, intro, sections } = mockTerms;

  // Build WebPage structured data. We intentionally do NOT emit
  // a FAQPage or Article schema — Terms is not a rich-result
  // type, and misusing schemas can trigger manual penalties.
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Service - StayEase',
    description:
      'Read the Terms of Service that govern your use of the StayEase hotel booking platform.',
    url: window.location.href,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      name: 'StayEase',
      url: window.location.origin,
    },
    dateModified: lastUpdated,
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Terms of Service - StayEase</title>
        <meta
          name="description"
          content="Read the Terms of Service that govern your use of the StayEase hotel booking platform."
        />
        <meta property="og:title" content="Terms of Service - StayEase" />
        <meta
          property="og:description"
          content="Read the Terms of Service that govern your use of the StayEase hotel booking platform."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={window.location.href} />

        {/* Structured Data — WebPage */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Page Content */}
      <main>
        <TermsHero lastUpdated={lastUpdated} />

        <section className="py-12 sm:py-16 bg-white dark:bg-gray-900">
          <Container>
            {/* Intro paragraph (above the TOC/content grid) */}
            <div className="max-w-3xl mb-10">
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {intro}
              </p>
            </div>

            {/* Two-column grid: TOC + content */}
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] lg:gap-12">
              {/* TOC — sidebar on desktop, pill bar on mobile */}
              <TermsNav sections={sections} />

              {/* Content column */}
              <article className="max-w-3xl space-y-10">
                {sections.map((section) => (
                  <TermsSection
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    paragraphs={section.paragraphs}
                  />
                ))}

                {/* Footer note */}
                <p className="text-sm text-gray-500 dark:text-gray-400 pt-6 border-t border-gray-200 dark:border-gray-700">
                  These Terms were last updated on {lastUpdated}. Continued
                  use of StayEase after changes take effect constitutes
                  acceptance of the revised Terms.
                </p>
              </article>
            </div>
          </Container>
        </section>

        <CTASection />
        <BackToTopButton />
      </main>
    </>
  );
};

export default TermsPage;