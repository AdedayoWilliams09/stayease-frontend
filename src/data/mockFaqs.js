/**
 * Mock FAQ Data - FAQ page categories and questions
 *
 * Structure:
 * - Category: { id, name, items: [{ id, question, answer }] }
 *
 * This mirrors the mockTeam.js pattern and can be replaced
 * by an API call (e.g., GET /api/faqs) in a future phase.
 */
const mockFaqs = [
  {
    id: 'general',
    name: 'General',
    items: [
      {
        id: 'g1',
        question: 'What is StayEase?',
        answer:
          'StayEase is a hotel booking platform that connects travelers with exceptional accommodations worldwide. We partner with thousands of hotels, resorts, and vacation rentals to bring you the best prices and a seamless booking experience.',
      },
      {
        id: 'g2',
        question: 'Is StayEase free to use?',
        answer:
          'Yes, booking through StayEase is completely free. We charge a small service fee only when a booking is confirmed. There are no hidden charges — the price you see is the price you pay.',
      },
      {
        id: 'g3',
        question: 'Which countries does StayEase cover?',
        answer:
          'StayEase covers over 100 countries worldwide, with properties in major cities, beach destinations, mountain retreats, and more. We are constantly adding new destinations.',
      },
      {
        id: 'g4',
        question: 'How do I contact customer support?',
        answer:
          'You can reach our 24/7 support team via the Contact page, by email at support@stayease.com, or by phone at +1 (800) 555-0123. We typically respond within a few hours.',
      },
    ],
  },
  {
    id: 'booking',
    name: 'Booking',
    items: [
      {
        id: 'b1',
        question: 'How do I book a hotel?',
        answer:
          'Search for your destination, select a hotel, choose your dates and room type, and complete your booking. You will receive an instant confirmation email with all the details of your stay.',
      },
      {
        id: 'b2',
        question: 'Can I modify my booking?',
        answer:
          'Yes, you can modify your booking up to 48 hours before check-in. Changes are subject to availability. Log into your account and go to "My Bookings" to make changes.',
      },
      {
        id: 'b3',
        question: 'Can I book for someone else?',
        answer:
          'Yes. Simply enter the guest\'s name in the guest details section during checkout. The booking confirmation will be sent to your email, and you can forward it to the guest.',
      },
      {
        id: 'b4',
        question: 'Do I need to create an account to book?',
        answer:
          'You can browse and search without an account, but you will need to create a free account to complete a booking. This lets you manage your reservations, access your booking history, and receive exclusive member deals.',
      },
    ],
  },
  {
    id: 'payments',
    name: 'Payments',
    items: [
      {
        id: 'p1',
        question: 'What payment methods do you accept?',
        answer:
          'We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and PayPal. All payments are processed securely.',
      },
      {
        id: 'p2',
        question: 'Is my payment information secure?',
        answer:
          'Yes. We use industry-standard encryption (SSL/TLS) and security protocols. We never store your full card details on our servers — all payments are processed by PCI-DSS-compliant payment providers.',
      },
      {
        id: 'p3',
        question: 'When will I be charged?',
        answer:
          'For most bookings, your card is charged at the time of booking. For some properties, you may pay at the hotel. The exact payment timing is shown clearly before you confirm your booking.',
      },
      {
        id: 'p4',
        question: 'Can I pay in my local currency?',
        answer:
          'Yes. We support multiple currencies. Select your preferred currency from the dropdown in the header, and all prices will be displayed in that currency.',
      },
    ],
  },
  {
    id: 'cancellation',
    name: 'Cancellation',
    items: [
      {
        id: 'c1',
        question: 'What is your cancellation policy?',
        answer:
          'Most bookings offer free cancellation up to 48 hours before check-in. Please check the specific policy shown on your booking confirmation, as some properties have different rules.',
      },
      {
        id: 'c2',
        question: 'How do I cancel my booking?',
        answer:
          'Log into your account, go to "My Bookings", find the booking you want to cancel, and click "Cancel Booking". You will receive a confirmation email once the cancellation is processed.',
      },
      {
        id: 'c3',
        question: 'How long do refunds take?',
        answer:
          'Refunds are typically processed within 5–10 business days, depending on your bank or payment provider. You will receive an email once the refund has been issued.',
      },
      {
        id: 'c4',
        question: 'Can I get a refund for a no-show?',
        answer:
          'No-shows are generally non-refundable. If you cannot make your stay, please cancel before the free-cancellation deadline to avoid being charged.',
      },
    ],
  },
  {
    id: 'account',
    name: 'Account',
    items: [
      {
        id: 'a1',
        question: 'How do I create an account?',
        answer:
          'Click "Register" on the navigation bar and fill in your details. It takes less than a minute, and you can start booking right away.',
      },
      {
        id: 'a2',
        question: 'How do I reset my password?',
        answer:
          'Click "Forgot Password" on the login page and follow the instructions. We will email you a secure link to reset your password.',
      },
      {
        id: 'a3',
        question: 'How do I update my profile information?',
        answer:
          'Log into your account and go to "Profile" from the user menu. From there you can update your name, email, phone number, and preferences.',
      },
      {
        id: 'a4',
        question: 'Can I delete my account?',
        answer:
          'Yes. Go to Profile → Settings → Delete Account. Please note that deleting your account will remove your booking history. Any upcoming bookings must be cancelled first.',
      },
    ],
  },
  {
    id: 'hosts',
    name: 'Hosts',
    items: [
      {
        id: 'h1',
        question: 'How do I list my property on StayEase?',
        answer:
          'Click "Become a Host" in the footer, fill out the property listing form, and our team will review your submission within 3–5 business days. Once approved, your property goes live.',
      },
      {
        id: 'h2',
        question: 'What are the fees for hosts?',
        answer:
          'StayEase charges a small commission on each confirmed booking. There are no listing fees and no monthly charges. You only pay when you earn.',
      },
      {
        id: 'h3',
        question: 'When do hosts get paid?',
        answer:
          'Hosts receive payouts within 24 hours of guest check-in. Payouts are made directly to your registered bank account.',
      },
      {
        id: 'h4',
        question: 'How do I manage my property listings?',
        answer:
          'Once you are approved as a host, you will get access to the Host Dashboard, where you can manage availability, pricing, photos, and guest communications.',
      },
    ],
  },
];

export default mockFaqs;