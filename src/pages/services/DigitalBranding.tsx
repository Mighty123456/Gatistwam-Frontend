import React from 'react';
import { FaMobileAlt, FaSearch, FaLaptopCode, FaPalette, FaBullhorn, FaGoogle, FaBullseye, FaList, FaArrowRight } from 'react-icons/fa';
import ServicePageTemplate from '../../components/templates/ServicePageTemplate';
import { useTheme } from '../../context/ThemeContext';
import ServiceCard from '../../components/services/ServiceCard';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import digitalBrandingImage from '../../assets/images/Digital Branding/digital-branding.jpg';

// To manually add images, use this pattern:
// import imageName from '../../assets/images/your-folder/image-name.extension';
// Supported formats: .jpg, .jpeg, .png, .webp, .gif
// Example: import myImage from '../../assets/images/services/my-image.jpg';

const digitalBrandingServices = [
  { 
    name: 'Social Media Marketing', 
    icon: <FaMobileAlt className="w-8 h-8" />, 
    description: 'Boost your brand presence and engage with your audience on social media.',
    link: '/services/digital-branding/social-media-marketing'
  },
  { 
    name: 'SEO', 
    icon: <FaSearch className="w-8 h-8" />, 
    description: 'Improve your search engine rankings and drive organic traffic.',
    link: '/services/digital-branding/seo'
  },
  { 
    name: 'Web Development', 
    icon: <FaLaptopCode className="w-8 h-8" />, 
    description: 'Build responsive and modern websites tailored to your needs.',
    link: '/services/digital-branding/web-development'
  },
  { 
    name: 'UI/UX Design', 
    icon: <FaPalette className="w-8 h-8" />, 
    description: 'Create intuitive and engaging user interfaces.',
    link: '/services/digital-branding/ui-ux-design'
  },
  { 
    name: 'Social Media Advertising', 
    icon: <FaBullhorn className="w-8 h-8" />, 
    description: 'Reach your target audience effectively through paid social campaigns.',
    link: '/services/digital-branding/social-media-advertising'
  },
  { 
    name: 'Google Ads', 
    icon: <FaGoogle className="w-8 h-8" />, 
    description: 'Run effective Google Ads campaigns to generate leads and sales.',
    link: '/services/digital-branding/google-ads-ppc'
  },
  { 
    name: 'Quality Lead Generation', 
    icon: <FaBullseye className="w-8 h-8" />, 
    description: 'Implement strategies to attract and capture high-quality leads.',
    link: '/services/digital-branding/leads-generation'
  },
  { 
    name: 'View All Services', 
    icon: <FaList className="w-8 h-8" />, 
    description: 'Explore the full range of services we offer.',
    link: '/services'
  },
];

const features = [
  {
    title: "Expert Team",
    icon: <FaSearch className="w-6 h-6" />
  },
  {
    title: "Data-Driven Approach",
    icon: <FaSearch className="w-6 h-6" />
  },
  {
    title: "Customized Strategies",
    icon: <FaSearch className="w-6 h-6" />
  },
  {
    title: "Proven Results",
    icon: <FaSearch className="w-6 h-6" />
  },
  {
    title: "24/7 Support",
    icon: <FaSearch className="w-6 h-6" />
  },
  {
    title: "Competitive Pricing",
    icon: <FaSearch className="w-6 h-6" />
  }
];

const DigitalBranding: React.FC = () => {
  const theme = useTheme();

  return (
    <ServicePageTemplate
      title="Digital Branding"
      description="Transform your digital presence with our comprehensive branding solutions"
      services={digitalBrandingServices}
      features={features}
      IconComponent={FaArrowRight}
    />
  );
};

export default DigitalBranding; 