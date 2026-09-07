import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiYoutube,
  FiSend
} from 'react-icons/fi';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';

/**
 * ContactInfo Component - Contact information and social links
 * 
 * Displays:
 * - Email: support@stayease.com
 * - Phone: +1 (800) 555-0123
 * - Address: 123 Travel St, New York, NY 10001
 * - Social media links
 * 
 * Features:
 * - Responsive grid layout
 * - Hover effects on cards
 * - Framer Motion animations
 * - Dark mode support
 */
const ContactInfo = () => {
  const contactDetails = [
    {
      id: 1,
      icon: FiMail,
      title: 'Email Us',
      details: 'support@stayease.com',
      description: 'We respond within 24 hours',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      id: 2,
      icon: FiPhone,
      title: 'Call Us',
      details: '+1 (800) 555-0123',
      description: 'Mon-Fri 9am-6pm EST',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      id: 3,
      icon: FiMapPin,
      title: 'Visit Us',
      details: '123 Travel St',
      description: 'New York, NY 10001',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    },
  ];

  const socialLinks = [
    { icon: FiFacebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: FiInstagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: FiYoutube, href: 'https://youtube.com', label: 'YouTube', color: 'hover:text-red-600' },
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
          title="Contact Information"
          subtitle="Reach out to us through any of these channels"
        />

        {/* Contact Details Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {contactDetails.map((detail) => (
            <motion.div
              key={detail.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl ${detail.bgColor} flex items-center justify-center mx-auto mb-4`}>
                <detail.icon className={detail.color} size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {detail.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {detail.details}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {detail.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl mx-auto text-center"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Connect With Us
          </h3>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 ${social.color} transition-all duration-200 shadow-sm hover:shadow-md min-h-[44px] min-w-[44px] flex items-center justify-center`}
                aria-label={social.label}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Follow us for travel tips, exclusive deals, and updates
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactInfo;