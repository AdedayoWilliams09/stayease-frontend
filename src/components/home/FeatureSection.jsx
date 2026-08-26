import { motion } from 'framer-motion';
import { FiShield, FiCalendar, FiHeadphones, FiStar } from 'react-icons/fi';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';

/**
 * FeatureSection Component - Why StayEase features
 */
const FeatureSection = () => {
  const features = [
    {
      id: 1,
      icon: FiShield,
      title: 'Best Price Guarantee',
      description: 'Find a lower price? We\'ll match it and give you $50 credit',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      id: 2,
      icon: FiCalendar,
      title: 'Free Cancellation',
      description: 'Most bookings include free cancellation up to 48 hours before check-in',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      id: 3,
      icon: FiHeadphones,
      title: '24/7 Support',
      description: 'Our team is available around the clock to assist you',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    },
    {
      id: 4,
      icon: FiStar,
      title: 'Verified Reviews',
      description: 'All reviews are from verified guests who have stayed at the property',
      color: 'text-yellow-600 dark:text-yellow-400',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
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
        <SectionHeader
          title="Why Choose StayEase"
          subtitle="We make booking hotels simple, secure, and affordable"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`${feature.color}`} size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default FeatureSection;