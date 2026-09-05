import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FiHome, 
  FiCalendar, 
  FiStar, 
  FiGlobe 
} from 'react-icons/fi';
import Container from '../common/Container';

/**
 * StatsSection Component - Displays platform statistics
 * 
 * Stats displayed:
 * - Hotels: 10,000+
 * - Bookings: 500,000+
 * - Rating: 4.8/5
 * - Countries: 100+
 * 
 * Features:
 * - Animated counters (numbers count up on scroll)
 * - Icons for each stat
 * - Dark mode support
 */
const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: FiHome,
      value: 10000,
      suffix: '+',
      label: 'Hotels Worldwide',
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 2,
      icon: FiCalendar,
      value: 500000,
      suffix: '+',
      label: 'Bookings Made',
      color: 'text-green-600 dark:text-green-400',
    },
    {
      id: 3,
      icon: FiStar,
      value: 4.8,
      suffix: '/5',
      label: 'Average Rating',
      color: 'text-yellow-600 dark:text-yellow-400',
    },
    {
      id: 4,
      icon: FiGlobe,
      value: 100,
      suffix: '+',
      label: 'Countries Worldwide',
      color: 'text-purple-600 dark:text-purple-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-3">
                <stat.icon className={`${stat.color}`} size={36} />
              </div>
              <AnimatedNumber 
                value={stat.value} 
                suffix={stat.suffix}
                className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

/**
 * AnimatedNumber Component - Counts up to the target value
 * 
 * @param {number} value - Target number
 * @param {string} suffix - Text after the number
 * @param {string} className - Additional classes
 */
const AnimatedNumber = ({ value, suffix = '', className = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      // Handle decimal numbers (like 4.8)
      const isDecimal = !Number.isInteger(value);
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.round(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  // Format large numbers with commas
  const formatNumber = (num) => {
    if (typeof num !== 'number') return num;
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return (
    <span ref={ref} className={className}>
      {isInView ? formatNumber(count) : '0'}
      {suffix}
    </span>
  );
};

export default StatsSection;