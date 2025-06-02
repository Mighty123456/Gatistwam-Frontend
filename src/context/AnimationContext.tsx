import React, { createContext, useContext, useEffect, useRef } from 'react';

interface AnimationContextType {
  registerAnimationElement: (element: HTMLElement) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
}

interface AnimationProviderProps {
  children: React.ReactNode;
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<Set<HTMLElement>>(new Set());

  useEffect(() => {
    // Initialize IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            // Stop observing after animation is triggered
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    // Clean up on unmount
    return () => {
      if (observerRef.current) {
        elementsRef.current.forEach(element => {
          observerRef.current?.unobserve(element);
        });
        observerRef.current.disconnect();
      }
    };
  }, []);

  const registerAnimationElement = (element: HTMLElement) => {
    if (element && observerRef.current) {
      elementsRef.current.add(element);
      observerRef.current.observe(element);
    }
  };

  return (
    <AnimationContext.Provider value={{ registerAnimationElement }}>
      {children}
    </AnimationContext.Provider>
  );
}