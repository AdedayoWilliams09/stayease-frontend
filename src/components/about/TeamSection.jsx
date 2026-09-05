import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiGithub, FiDribbble } from 'react-icons/fi';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import mockTeam from '../../data/mockTeam';

/**
 * TeamSection Component - Displays team members
 * 
 * Features:
 * - Responsive grid layout
 * - Team member cards with avatar, name, role, bio
 * - Social media icons (LinkedIn, Twitter, GitHub, Dribbble)
 * - Staggered fade-in animations on scroll
 * - Dark mode support
 */
const TeamSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Get social media icon
  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'linkedin':
        return FiLinkedin;
      case 'twitter':
        return FiTwitter;
      case 'github':
        return FiGithub;
      case 'dribbble':
        return FiDribbble;
      default:
        return null;
    }
  };

  // Get user initials for avatar fallback
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <Container>
        <SectionHeader
          title="Meet Our Team"
          subtitle="The people dedicated to making your travel experience exceptional"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {mockTeam.map((member) => {
            const socialEntries = member.social ? Object.entries(member.social) : [];
            
            return (
              <motion.div
                key={member.id}
                variants={cardVariants}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden bg-gray-200 dark:bg-gray-700 mb-4 ring-4 ring-blue-100 dark:ring-blue-900/30">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-500 dark:text-gray-400">
                      {getInitials(member.name)}
                    </div>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Links */}
                {socialEntries.length > 0 && (
                  <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {socialEntries.map(([platform, url]) => {
                      const Icon = getSocialIcon(platform);
                      if (!Icon) return null;
                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
                          aria-label={`${member.name} on ${platform}`}
                        >
                          <Icon size={18} />
                        </a>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default TeamSection;