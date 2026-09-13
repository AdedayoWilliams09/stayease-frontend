/**
 * Mock Terms of Service data
 *
 * Structure:
 * - Section: { id, title, paragraphs: [string, ...] }
 *
 * `id` is used for anchor navigation (#id) and the sticky TOC.
 * `paragraphs` items render as <p> unless prefixed with "- ", in which
 * case they render as a <li> inside a <ul> (see TermsSection.jsx).
 *
 * This mirrors mockFaqs.js and can be replaced by an API call
 * (e.g., GET /api/terms) in a future phase.
 *
 * NOTE: This is placeholder legal copy for development. Before
 * production launch, replace with copy reviewed by legal counsel.
 */
const mockTerms = {
  lastUpdated: '2026-01-15',
  intro:
    'Welcome to StayEase. These Terms of Service ("Terms") govern your access to and use of the StayEase website, mobile applications, and services (collectively, the "Platform"). By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree, please do not use the Platform.',
  sections: [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      paragraphs: [
        'By creating an account, making a booking, or otherwise using the Platform, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.',
        'You must be at least 18 years old and legally capable of entering into binding contracts to use the Platform. If you are using the Platform on behalf of an organization, you represent that you have authority to bind that organization.',
        'We may update these Terms from time to time. Continued use of the Platform after changes take effect constitutes acceptance of the revised Terms.',
      ],
    },
    {
      id: 'accounts',
      title: '2. Eligibility and Accounts',
      paragraphs: [
        'To make a booking, you must create a StayEase account. You agree to provide accurate, current, and complete information during registration and to keep it up to date.',
        'You are responsible for safeguarding your account credentials and for all activity that occurs under your account. Notify us immediately at support@stayease.com if you suspect unauthorized access.',
        'We reserve the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or are used in a manner that harms other users or the Platform.',
      ],
    },
    {
      id: 'bookings',
      title: '3. Bookings and Reservations',
      paragraphs: [
        'StayEase acts as an intermediary between you and the accommodation provider ("Property"). When you make a booking, you enter into a direct contractual relationship with the Property for the stay itself.',
        'Booking confirmations are sent by email once payment is processed. A booking is not guaranteed until you receive a confirmation.',
        'You agree to provide accurate guest details at checkout. Incorrect details may result in denied check-in. Some Properties require a valid ID and credit card at check-in.',
        'Prices shown include the Property rate and any applicable StayEase service fees. Taxes and resort fees may be charged separately by the Property.',
      ],
    },
    {
      id: 'payments',
      title: '4. Payments, Fees, and Taxes',
      paragraphs: [
        'All payments are processed securely by our PCI-DSS-compliant payment partners. We accept major credit and debit cards and other methods shown at checkout.',
        'You authorize StayEase to charge your selected payment method for the total booking amount, including service fees.',
        'For certain Properties, payment may be collected at the Property. The exact timing is shown clearly before you confirm your booking.',
        'Currency conversion may apply if your card is issued in a different currency. Your bank may apply additional foreign transaction fees.',
        'Taxes are calculated based on local regulations and may vary by jurisdiction. Some Properties charge resort, city, or occupancy fees directly.',
      ],
    },
    {
      id: 'cancellations',
      title: '5. Cancellations and Refunds',
      paragraphs: [
        'Cancellation policies vary by Property and are displayed on the Property page and in your booking confirmation before you pay. Please review them carefully.',
        'Free cancellation, when offered, generally applies up to 48 hours before check-in unless otherwise stated by the Property.',
        'Refunds are issued to the original payment method within 5–10 business days after cancellation. Bank processing times may vary.',
        'No-shows and cancellations made after the free-cancellation deadline may be charged the full amount or a penalty as stated in the Property policy.',
        'StayEase service fees are non-refundable unless the booking is cancelled within the free-cancellation window or the Property cancels the stay.',
      ],
    },
    {
      id: 'conduct',
      title: '6. User Conduct',
      paragraphs: [
        'You agree not to use the Platform to:',
        '- Violate any applicable law or regulation.',
        '- Post false, misleading, or defamatory content in reviews or messages.',
        '- Impersonate another person or misrepresent your affiliation with any entity.',
        '- Interfere with the Platform\'s operation, security, or availability.',
        '- Scrape, harvest, or collect user data without consent.',
        '- Attempt to reverse engineer any part of the Platform.',
        'We may remove content or suspend accounts that violate these rules.',
      ],
    },
    {
      id: 'content',
      title: '7. User-Generated Content',
      paragraphs: [
        'You retain ownership of reviews, photos, and other content you submit. By submitting content, you grant StayEase a worldwide, non-exclusive, royalty-free license to use, display, and distribute it on the Platform.',
        'You represent that you have all rights necessary to grant this license and that your content does not infringe third-party rights.',
        'We reserve the right to moderate, edit, or remove user content that violates these Terms or our content guidelines.',
      ],
    },
    {
      id: 'ip',
      title: '8. Intellectual Property',
      paragraphs: [
        'The Platform, including its design, logos, text, graphics, and software, is owned by StayEase or its licensors and is protected by copyright, trademark, and other intellectual property laws.',
        'You may not copy, modify, distribute, sell, or lease any part of the Platform without our prior written consent.',
        'The StayEase name, logo, and related marks are trademarks of StayEase. You may not use them without permission.',
      ],
    },
    {
      id: 'liability',
      title: '9. Limitation of Liability',
      paragraphs: [
        'StayEase acts as an intermediary and is not responsible for the acts, omissions, or conduct of Properties or other users.',
        'To the maximum extent permitted by law, StayEase is not liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform.',
        'Our total liability for any claim arising out of or related to these Terms or the Platform is limited to the amount you paid to StayEase for the booking giving rise to the claim.',
        'Nothing in these Terms limits liability that cannot be limited under applicable law.',
      ],
    },
    {
      id: 'indemnification',
      title: '10. Indemnification',
      paragraphs: [
        'You agree to indemnify and hold harmless StayEase, its affiliates, officers, directors, employees, and agents from any claims, damages, liabilities, and expenses (including reasonable legal fees) arising from:',
        '- Your use of the Platform.',
        '- Your violation of these Terms.',
        '- Your violation of any third-party rights, including intellectual property or privacy rights.',
        '- Content you submit to the Platform.',
      ],
    },
    {
      id: 'termination',
      title: '11. Termination',
      paragraphs: [
        'We may suspend or terminate your access to the Platform at any time, with or without notice, if we reasonably believe you have violated these Terms or applicable law.',
        'You may close your account at any time from your Profile settings. Closing your account does not relieve you of obligations under any active bookings.',
        'Sections that by their nature should survive termination — including Intellectual Property, Limitation of Liability, Indemnification, and Governing Law — will survive.',
      ],
    },
    {
      id: 'governing-law',
      title: '12. Governing Law and Disputes',
      paragraphs: [
        'These Terms are governed by the laws of the jurisdiction in which StayEase is incorporated, without regard to conflict-of-law principles.',
        'Any dispute arising out of or relating to these Terms or the Platform will be resolved exclusively in the courts of that jurisdiction, unless applicable consumer law grants you the right to bring proceedings elsewhere.',
        'Before initiating formal proceedings, you agree to attempt to resolve the dispute informally by contacting us at legal@stayease.com.',
      ],
    },
    {
      id: 'contact',
      title: '13. Contact Us',
      paragraphs: [
        'If you have questions about these Terms, please contact us:',
        '- Email: legal@stayease.com',
        '- Support: support@stayease.com',
        '- Phone: +1 (800) 555-0123',
        '- Mail: StayEase Legal, 123 Travel Street, City, Country',
      ],
    },
  ],
};

export default mockTerms;