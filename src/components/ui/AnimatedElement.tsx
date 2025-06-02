import React, { useEffect, useRef } from 'react';
import { useAnimation } from '../../context/AnimationContext';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  className = '',
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { registerAnimationElement } = useAnimation();
  
  useEffect(() => {
    if (ref.current) {
      // Add delay style if specified
      if (delay > 0) {
        ref.current.style.transitionDelay = `${delay}ms`;
      }
      
      registerAnimationElement(ref.current);
    }
    
    // Clean up transition delay
    return () => {
      if (ref.current) {
        ref.current.style.transitionDelay = '';
      }
    };
  }, [registerAnimationElement, delay]);
  
  return (
    <div ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedElement;