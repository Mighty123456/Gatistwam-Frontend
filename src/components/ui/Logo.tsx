import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const { theme } = useTheme();
  const [imgError, setImgError] = useState(false);
  
  // Determine size classes based on prop
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-16',
  };

  const handleImageError = () => {
    setImgError(true);
  };
  
  return (
    <img 
      src={imgError 
        ? (theme === 'light' ? '/logo-light.png' : '/logo-dark.png')
        : (theme === 'light' 
          ? '/images/logo-light.png' 
          : '/images/logo-dark.png')}
      alt="Gatistwam Logo" 
      className={`${sizeClasses[size]} transition-all duration-300 ${className}`}
      onError={handleImageError}
    />
  );
};

export default Logo;