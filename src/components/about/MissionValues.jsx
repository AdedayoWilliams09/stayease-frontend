import { motion } from 'framer-motion';
import { 
  FiShield, 
  FiStar, 
  FiSun, 
  FiHeart,
  FiTarget
} from 'react-icons/fi';
import Container from '../common/Container';

/**
 * MissionValues Component - Mission statement and core values
 * 
 * Displays:
 * - Mission statement with icon
 * - 4 core values with icons and descriptions
 * - Staggered fade-in animations on scroll
 */
const MissionValues = () => {
  const values = [
    {
      id: 1,
      icon: FiShield,
      title: 'Trust',
      description: 'We build trust through transparency, secure bookings, and verified reviews from real travelers.',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      id: 2,
      icon: FiStar,
      title: 'Quality',
      description: 'We curate only the finest accommodations that meet our high standards of comfort and service.',
      color: 'text-yellow-600 dark:text-yellow-400',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    },
    {
      id: 3,
      icon: FiSun,
      title: 'Innovation',
      description: 'We continuously improve our platform to make booking effortless and travel more enjoyable.',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    },
    {
      id: 4,
      icon: FiHeart,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority, from search to stay. We\'re here to help every step of the way.',
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900/30',
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
    <section className="py-16 bg-white dark:bg-gray-900">
      <Container>
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
            <FiTarget size={32} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            To make travel seamless and memorable by connecting travelers with 
            the perfect accommodations at the best prices, backed by exceptional 
            service and support.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value) => (
            <motion.div
              key={value.id}
              variants={itemVariants}
              className="group bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl ${value.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className={value.color} size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default MissionValues;