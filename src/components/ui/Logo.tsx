import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const { theme } = useTheme();
  
  // Determine size classes based on prop
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-16',
  };
  
  return (
    <img 
      src={theme === 'light' 
        ? '/src/assets/images/logo-light.png' 
        : '/src/assets/images/logo-dark.png'} 
      alt="Gatistwam Logo" 
      className={`${sizeClasses[size]} transition-all duration-300 ${className}`}
    />
  );
};

export default Logo;