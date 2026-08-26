import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiCalendar, FiUsers, FiMapPin } from 'react-icons/fi';
import Container from '../common/Container';
import Button from '../common/Button';
import Input from '../common/Input';
import heroBg from "../../assets/images/hero-bg.jpg";

/**
 * HeroSection Component - Main hero with search form
 */
const HeroSection = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
  });
  const [isLoading, setIsLoading] = useState(false);

  // Trust indicators
  const trustStats = [
    { value: '10,000+', label: 'Hotels Worldwide' },
    { value: '500,000+', label: 'Happy Guests' },
    { value: '4.8/5', label: 'Average Rating' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Navigate to hotels page with search params
    const params = new URLSearchParams();
    if (searchData.location) params.append('location', searchData.location);
    if (searchData.checkIn) params.append('checkIn', searchData.checkIn);
    if (searchData.checkOut) params.append('checkOut', searchData.checkOut);
    if (searchData.guests) params.append('guests', searchData.guests);
    
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/hotels?${params.toString()}`);
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-blue-900"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Dark Overlay over the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 dark:from-black/80 dark:via-black/60 dark:to-black/40" />
      </div>

      {/* Content */}
      <Container className="relative z-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            Discover Your <span className="text-blue-400">Perfect Stay</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book unique hotels, resorts, and vacation rentals worldwide with the best price guarantee
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-10">
            {trustStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/10 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 dark:border-gray-700/50"
          >
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Location */}
              <div className="relative">
                <Input
                  type="text"
                  name="location"
                  placeholder="Destination"
                  value={searchData.location}
                  onChange={handleInputChange}
                  icon={FiMapPin}
                  className="bg-white/90 dark:bg-gray-800/90 border-white/30 dark:border-gray-600/30"
                />
              </div>

              {/* Check-in */}
              <div className="relative">
                <Input
                  type="date"
                  name="checkIn"
                  value={searchData.checkIn}
                  onChange={handleInputChange}
                  icon={FiCalendar}
                  className="bg-white/90 dark:bg-gray-800/90 border-white/30 dark:border-gray-600/30"
                />
              </div>

              {/* Check-out */}
              <div className="relative">
                <Input
                  type="date"
                  name="checkOut"
                  value={searchData.checkOut}
                  onChange={handleInputChange}
                  icon={FiCalendar}
                  className="bg-white/90 dark:bg-gray-800/90 border-white/30 dark:border-gray-600/30"
                />
              </div>

              {/* Guests + Search Button */}
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Input
                    type="number"
                    name="guests"
                    value={searchData.guests}
                    onChange={handleInputChange}
                    icon={FiUsers}
                    min={1}
                    max={20}
                    className="bg-white/90 dark:bg-gray-800/90 border-white/30 dark:border-gray-600/30"
                  />
                </div>
                <Button 
                  type="submit" 
                  isLoading={isLoading}
                  className="flex-1 md:flex-none"
                >
                  <FiSearch className="mr-2" />
                  Search
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;