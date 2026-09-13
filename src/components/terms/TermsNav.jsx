import { useEffect, useState } from 'react';
import { FiList } from 'react-icons/fi';

/**
 * TermsNav Component - Sticky table of contents
 *
 * @param {Array} sections - Array of { id, title }
 *
 * Renders:
 * - Desktop: sticky sidebar (lg:) with all section links
 * - Mobile/tablet: horizontal scrollable pill bar
 *
 * Tracks the active section via IntersectionObserver so the
 * corresponding link is highlighted as the user scrolls.
 *
 * Anchor links (#id) are intentional — this is same-page
 * navigation, which is what <a href="#..."> is for. The
 * "use <Link> not <a>" rule applies to in-app routes.
 */
const TermsNav = ({ sections = [] }) => {
  const [activeId, setActiveId] = useState(sections[0]?.id || '');

  // Smooth-scroll to a section without letting the URL hash
  // produce a jarring jump. We still update the hash so the
  // link is shareable.
  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -96; // account for the fixed header
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    // Update hash without triggering another jump
    window.history.replaceState(null, '', `#${id}`);
    setActiveId(id);
  };

  // IntersectionObserver: highlight the topmost visible section.
  useEffect(() => {
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        // Keep track of which sections are currently intersecting.
        // We pick the one closest to the top of the viewport.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // Fire when a section crosses the top area of the viewport.
        // Bottom margin is negative so a section counts as "active"
        // once its top reaches ~1/3 of the viewport.
        rootMargin: '-96px 0px -66% 0px',
        threshold: 0,
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (!sections.length) return null;

  return (
    <>
      {/* Mobile / tablet: horizontal pill bar */}
      <div className="lg:hidden mb-6">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
          <FiList size={16} />
          <span>On this page</span>
        </div>
        <div
          className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {sections.map((s) => {
            const isActive = s.id === activeId;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => handleClick(e, s.id)}
                className={`
                  flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium
                  min-h-[44px] flex items-center
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md dark:bg-blue-500'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }
                `}
              >
                {s.title}
              </a>
            );
          })}
        </div>
      </div>

      {/* Desktop: sticky sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
            <FiList size={16} />
            <span>On this page</span>
          </div>
          <nav aria-label="Terms sections" className="border-l-2 border-gray-200 dark:border-gray-700">
            <ul className="space-y-1">
              {sections.map((s) => {
                const isActive = s.id === activeId;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      onClick={(e) => handleClick(e, s.id)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`
                        block pl-4 pr-3 py-2 text-sm rounded-r-md
                        border-l-2 -ml-[2px]
                        transition-all duration-200
                        focus:outline-none focus:ring-2 focus:ring-blue-500
                        ${
                          isActive
                            ? 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/20'
                            : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-400 dark:hover:border-gray-500'
                        }
                      `}
                    >
                      {s.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Hide horizontal scrollbar on mobile pill bar */}
      <style>{`
        .terms-nav-scroll::-webkit-scrollbar { display: none; }
      `}</style>
    </>
  );
};

export default TermsNav;