import { motion } from 'framer-motion';
import Container from '../common/Container';

/**
 * ContactHero Component - Hero section for Contact page
 * 
 * Displays the main headline and subheadline with a gradient background
 * Features:
 * - Full-width gradient background
 * - Centered text content
 * - Fade-in animation on load
 * - Dark mode support
 */
const ContactHero = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 dark:from-blue-800 dark:via-blue-900 dark:to-purple-900">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyek0zNiAxNHYySDI0di0yaDEyek0xNCAzNHYySDJ2LTJoMTJ6TTE0IDI0djJIMnYtMmgxMnpNMTQgMTR2Mkgydi0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      </div>

      {/* Fallback gradient if image doesn't load */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-800 to-purple-800" />

      {/* Content */}
      <Container className="relative z-10 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          {/* Small badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-4"
          >
            Contact Us
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
          >
            Get in <span className="text-blue-300">Touch</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto"
          >
            We're here to help. Reach out to us anytime.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '80px' }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="h-1 bg-blue-300/60 rounded-full mx-auto mt-6"
          />
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactHero;