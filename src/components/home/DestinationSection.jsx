import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import parisImg from '../../assets/images/paris.jpg';
import tokyoImg from '../../assets/images/tokyo.jpg';
import newyorkImg from '../../assets/images/newyork.jpg';
import dubaiImg from '../../assets/images/dubai.jpg';
import singaporeImg from '../../assets/images/singapore.jpg';
import sydneyImg from '../../assets/images/sydney.jpg';

/**
 * DestinationSection Component - Popular destinations grid
 */
const DestinationSection = () => {
  const destinations = [
    {
      id: 1,
      name: 'Paris',
      country: 'France',
      image: parisImg,
      hotels: 342,
    },
    {
      id: 2,
      name: 'Tokyo',
      country: 'Japan',
      image: tokyoImg,
      hotels: 567,
    },
    {
      id: 3,
      name: 'New York',
      country: 'USA',
      image: newyorkImg,
      hotels: 823,
    },
    {
      id: 4,
      name: 'Dubai',
      country: 'UAE',
      image: dubaiImg,
      hotels: 456,
    },
    {
      id: 5,
      name: 'Singapore',
      country: 'Singapore',
      image: singaporeImg,
      hotels: 289,
    },
    {
      id: 6,
      name: 'Sydney',
      country: 'Australia',
      image: sydneyImg,
      hotels: 378,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <Container>
        <SectionHeader
          title="Popular Destinations"
          subtitle="Explore the world's most sought-after travel spots"
          viewAllLink="/hotels"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <Link to={`/hotels?destination=${destination.name}`} className="block w-full h-full">
                {/* Image */}
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700">
                  <img
                    src={destination.image}
                    alt={`${destination.name}, ${destination.country}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-gray-300">{destination.country}</p>
                  <p className="text-xs text-gray-400 mt-1">{destination.hotels} hotels</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default DestinationSection;