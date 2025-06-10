import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  benefits?: string[];
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, benefits = [], image }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  // Check if the image is a social media platform logo
  const isSocialMediaLogo = image.includes('cdn-icons-png.flaticon.com');

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
        theme === 'light' 
          ? 'bg-white hover:shadow-2xl' 
          : 'bg-gray-800 hover:bg-gray-700'
      }`}
    >
      <div className={`relative ${isSocialMediaLogo ? 'h-48' : 'h-72'} w-full overflow-hidden flex items-center justify-center bg-gray-50 dark:bg-gray-900`}>
        <motion.img 
          variants={imageVariants}
          src={image} 
          alt={title}
          className={`${isSocialMediaLogo ? 'w-24 h-24 object-contain' : 'w-full h-full object-cover object-center'}`}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://via.placeholder.com/800x400/2a2a2a/ffffff?text=${encodeURIComponent(title)}`;
          }}
        />
        {!isSocialMediaLogo && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        )}
      </div>
      
      <div className="p-8">
        <motion.h3 
          className="text-2xl font-bold mb-4 text-primary-600 dark:text-secondary-500"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          {description}
        </p>
        
        {benefits.length > 0 && (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center">
              <span className="w-2 h-2 bg-primary-500 dark:bg-secondary-500 rounded-full mr-2"></span>
              Key Benefits
            </h4>
            <ul className="space-y-3">
            {benefits.map((benefit, idx) => (
              <motion.li 
                key={idx} 
                className="flex items-center text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                  <svg 
                    className="w-5 h-5 text-primary-500 dark:text-secondary-500 mr-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                {benefit}
              </motion.li>
            ))}
          </ul>
        </div>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard; 