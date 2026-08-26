import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiSun, 
  FiCloud, 
  FiHome, 
  FiAward, 
  FiDollarSign, 
  FiUsers 
} from 'react-icons/fi';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';

/**
 * CategorySection Component - Featured categories grid
 */
const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: 'Beach Resorts',
      icon: FiSun,
      description: 'Sun, sand, and sea',
      color: 'from-blue-400 to-cyan-400',
      category: 'beach',
    },
    {
      id: 2,
      name: 'Mountain Retreats',
      icon: FiCloud,
      description: 'Fresh air and stunning views',
      color: 'from-green-400 to-emerald-400',
      category: 'mountain',
    },
    {
      id: 3,
      name: 'City Hotels',
      icon: FiHome,
      description: 'Stay in the heart of the action',
      color: 'from-purple-400 to-pink-400',
      category: 'city',
    },
    {
      id: 4,
      name: 'Luxury Stays',
      icon: FiAward,
      description: 'Premium accommodations',
      color: 'from-yellow-400 to-orange-400',
      category: 'luxury',
    },
    {
      id: 5,
      name: 'Budget Stays',
      icon: FiDollarSign,
      description: 'Great value for money',
      color: 'from-green-400 to-teal-400',
      category: 'budget',
    },
    {
      id: 6,
      name: 'Family Friendly',
      icon: FiUsers,
      description: 'Perfect for the whole family',
      color: 'from-red-400 to-pink-400',
      category: 'family',
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
          title="Explore by Category"
          subtitle="Find the perfect stay for your next adventure"
          viewAllLink="/hotels"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Link
                to={`/hotels?category=${category.category}`}
                className="block p-6"
              >
                <div className="flex items-start gap-4">
                  {/* Icon with gradient background */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon size={28} />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                {/* Arrow indicator on hover */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-blue-600 dark:text-blue-400 text-xl">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default CategorySection;