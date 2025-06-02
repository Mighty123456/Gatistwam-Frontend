import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, benefits, image }) => {
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
      scale: 1.1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
        theme === 'light' 
          ? 'bg-white hover:shadow-xl' 
          : 'bg-gray-800 hover:bg-gray-700'
      }`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <motion.img 
          variants={imageVariants}
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://via.placeholder.com/800x400/2a2a2a/ffffff?text=${encodeURIComponent(title)}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      <div className="p-8">
        <motion.h3 
          className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {description}
        </p>
        
        <div className="space-y-3">
          <h4 className="font-medium text-gray-700 dark:text-gray-300">Key Benefits:</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, idx) => (
              <motion.li 
                key={idx} 
                className="flex items-center text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <span className="w-2 h-2 bg-primary-500 dark:bg-secondary-500 rounded-full mr-3"></span>
                {benefit}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard; 