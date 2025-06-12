import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle,
  bgImage = 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
}) => {
  return (
    <div 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(14, 42, 97, 0.85), rgba(14, 42, 97, 0.85)), url(${bgImage})`
      }}
    >
      <div className="max-w-screen-xl w-full mx-auto px-4 text-center relative z-10 min-w-0">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;