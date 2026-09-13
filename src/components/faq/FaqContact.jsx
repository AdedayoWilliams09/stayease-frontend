import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMessageCircle, FiMail } from 'react-icons/fi';
import Container from '../common/Container';
import Button from '../common/Button';

/**
 * FaqContact Component - "Still have questions?" callout
 *
 * Links the user to the Contact page when the FAQ
 * doesn't answer their question.
 *
 * Features:
 * - Card layout with icon, heading, description
 * - Reuses Button component
 * - Internal navigation via <Link> (not <a>)
 * - Framer Motion scroll reveal
 * - Dark mode support
 */
const FaqContact = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 md:p-10 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
            <FiMessageCircle size={32} />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Still have questions?
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
            Can't find the answer you're looking for? Our support team is here
            to help you 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                <FiMail className="mr-2" />
                Contact Support
              </Button>
            </Link>
            <a
              href="mailto:support@stayease.com"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              or email support@stayease.com
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FaqContact;