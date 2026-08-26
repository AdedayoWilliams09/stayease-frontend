import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';

// Import the image relative to src/components/home/
import ctaBg from '../../assets/images/cta-bg.jpg';

/**
 * CTASection Component - Call to action banner
 */
const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-blue-900"
        style={{
          backgroundImage: `url(${ctaBg})`,
        }}
      >
        {/* Dark Overlay over the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Ready to Plan Your Next Adventure?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who found their perfect stay
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/hotels')}
            className="px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Start Booking Now
            <span className="ml-2">→</span>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTASection;