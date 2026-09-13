import { motion } from 'framer-motion';

/**
 * TermsSection Component - One section of the Terms document
 *
 * @param {string} id - Anchor id (also used by TermsNav)
 * @param {string} title - Section heading
 * @param {Array<string>} paragraphs - Paragraph strings.
 *   Strings starting with "- " are grouped into a <ul><li>.
 *
 * Renders an <h2> title and the section body with comfortable
 * long-form typography. `scroll-mt-24` offsets the fixed header
 * when the TOC jumps to this section.
 */
const TermsSection = ({ id, title, paragraphs = [] }) => {
  // Group consecutive "- " strings into a single list, so the
  // data file stays as plain strings without JSX.
  const blocks = [];
  let currentList = null;

  paragraphs.forEach((p) => {
    if (p.startsWith('- ')) {
      if (!currentList) {
        currentList = [];
        blocks.push({ type: 'list', items: currentList });
      }
      currentList.push(p.slice(2)); // strip "- "
    } else {
      currentList = null;
      blocks.push({ type: 'p', text: p });
    }
  });

  const headingId = `${id}-heading`;

  return (
    <motion.section
      id={id}
      aria-labelledby={headingId}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-24"
    >
      <h2
        id={headingId}
        className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4"
      >
        {title}
      </h2>

      <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        {blocks.map((block, i) =>
          block.type === 'p' ? (
            <p key={i}>{block.text}</p>
          ) : (
            <ul key={i} className="list-disc pl-6 space-y-2">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )
        )}
      </div>
    </motion.section>
  );
};

export default TermsSection;