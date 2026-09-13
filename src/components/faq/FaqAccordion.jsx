import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

/**
 * FaqAccordion Component - Accordion of Q&A items
 *
 * @param {Array} items - Array of { id, question, answer }
 * @param {string} categoryId - Used to namespace aria ids
 *
 * Features:
 * - Single-open accordion (one item open at a time)
 * - Accessible: aria-expanded, aria-controls, role="region"
 * - Keyboard: Enter/Space to toggle, Tab to navigate
 * - Framer Motion height animation
 * - Chevron rotates on open
 * - Dark mode support
 * - Touch-friendly (44px+)
 */
const FaqAccordion = ({ items = [], categoryId = 'faq' }) => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  if (!items.length) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 py-8">
        No questions in this category yet.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const headerId = `${categoryId}-${item.id}-header`;
        const panelId = `${categoryId}-${item.id}-panel`;

        return (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-shadow hover:shadow-md"
          >
            {/* Header (button) */}
            <button
              type="button"
              id={headerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
            >
              <span className="font-medium text-gray-900 dark:text-white text-base">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 text-gray-500 dark:text-gray-400"
              >
                <FiChevronDown size={20} />
              </motion.span>
            </button>

            {/* Panel */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-700">
                    <p className="pt-4">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;