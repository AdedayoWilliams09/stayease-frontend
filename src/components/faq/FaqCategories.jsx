import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import FaqAccordion from './FaqAccordion';
import mockFaqs from '../../data/mockFaqs';

/**
 * FaqCategories Component - Category tabs + accordion
 *
 * Renders:
 * - Horizontal scrollable tab bar (General, Booking, Payments,
 *   Cancellation, Account, Hosts)
 * - The FaqAccordion for the active category
 *
 * Features:
 * - Single active category (useState)
 * - Accessible tabs (role="tablist"/"tab", aria-selected, aria-controls)
 * - Horizontal scroll on mobile, wraps on desktop
 * - Framer Motion crossfade when switching categories
 * - Dark mode support
 */
const FaqCategories = () => {
  const [activeCategory, setActiveCategory] = useState(mockFaqs[0].id);

  const current = mockFaqs.find((c) => c.id === activeCategory) || mockFaqs[0];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Browse by Category"
            subtitle="Select a category to find the answers you need"
          />
        </motion.div>

        {/* Tab bar */}
        <div
          role="tablist"
          aria-label="FAQ categories"
          className="flex gap-2 overflow-x-auto pb-2 mb-8 -mx-1 px-1 md:flex-wrap md:justify-center md:overflow-visible"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {mockFaqs.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                role="tab"
                id={`tab-${category.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${category.id}`}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium
                  min-h-[44px] transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md dark:bg-blue-500'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }
                `}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Active panel */}
        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="max-w-3xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <FaqAccordion items={current.items} categoryId={current.id} />
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>

      {/* Hide horizontal scrollbar on mobile */}
      <style>{`
        [role="tablist"]::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default FaqCategories;