import avatar1 from '../assets/images/avatar-1.jpg';
import avatar2 from '../assets/images/avatar-2.jpg';
import avatar3 from '../assets/images/avatar-3.jpg';
import avatar4 from '../assets/images/avatar-4.jpg';
import avatar5 from '../assets/images/avatar-5.jpg';

/**
 * Mock Team Data - About page team members
 * 
 * Each team member has:
 * - id: Unique identifier
 * - name: Full name
 * - role: Job title
 * - bio: Short description (1-2 sentences)
 * - image: Avatar image URL
 * - social: Optional social media links
 */
const mockTeam = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO & Co-Founder',
    bio: 'Former hospitality executive with 15+ years of experience. Passionate about making travel accessible to everyone.',
    image: avatar1,
    social: {
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      twitter: 'https://twitter.com/sarahjohnson',
    },
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO & Co-Founder',
    bio: 'Tech visionary with a background in AI and machine learning. Leads our engineering team to build seamless booking experiences.',
    image: avatar2,
    social: {
      linkedin: 'https://linkedin.com/in/michaelchen',
      github: 'https://github.com/michaelchen',
    },
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Head of Customer Experience',
    bio: 'Customer-centric leader dedicated to ensuring every traveler has a memorable stay. Former hotel manager turned tech innovator.',
    image: avatar3,
    social: {
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      twitter: 'https://twitter.com/emilyrodriguez',
    },
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Lead Product Designer',
    bio: 'Award-winning designer with a focus on intuitive user interfaces. Creates experiences that make booking feel effortless.',
    image: avatar4,
    social: {
      linkedin: 'https://linkedin.com/in/davidkim',
      dribbble: 'https://dribbble.com/davidkim',
    },
  },
  {
    id: 5,
    name: 'Aisha Patel',
    role: 'Head of Partnerships',
    bio: 'Builds relationships with hotels worldwide. Ensures every property meets our high standards of quality and service.',
    image: avatar5,
    social: {
      linkedin: 'https://linkedin.com/in/aishapatel',
      twitter: 'https://twitter.com/aishapatel',
    },
  },
  {
    id: 6,
    name: 'James Okafor',
    role: 'Lead Software Engineer',
    bio: 'Full-stack developer passionate about creating scalable solutions. Leads the team building the StayEase platform.',
    image: avatar1,
    social: {
      linkedin: 'https://linkedin.com/in/jamesokafor',
      github: 'https://github.com/jamesokafor',
    },
  },
];

export default mockTeam;