import React, { useEffect, useState } from 'react';
import Logo from './ui/Logo';

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center transform transition-transform duration-300 hover:scale-105">
        {/* Main loading container */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          {/* Outer animated ring */}
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full animate-pulse"></div>
          
          {/* Spinning ring */}
          <div className={`absolute inset-0 border-4 border-blue-500 rounded-full transition-all duration-300 ${
            isHovered ? 'animate-spin-slow' : 'animate-spin'
          } border-t-transparent`}></div>
          
          {/* Inner pulsing ring */}
          <div className="absolute inset-4 border-4 border-purple-500 rounded-full animate-pulse-slow opacity-50"></div>
          
          {/* Logo container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Logo 
              size="md"
              className={`transition-all duration-300 ${
                isHovered ? 'animate-bounce-slow' : 'animate-pulse'
              }`}
            />
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-2 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading text with animated dots */}
        <div className="text-gray-600 dark:text-gray-300 font-medium">
          <span className="inline-block animate-bounce">L</span>
          <span className="inline-block animate-bounce delay-100">o</span>
          <span className="inline-block animate-bounce delay-200">a</span>
          <span className="inline-block animate-bounce delay-300">d</span>
          <span className="inline-block animate-bounce delay-400">i</span>
          <span className="inline-block animate-bounce delay-500">n</span>
          <span className="inline-block animate-bounce delay-600">g</span>
          <span className="inline-block animate-bounce delay-700">.</span>
          <span className="inline-block animate-bounce delay-800">.</span>
          <span className="inline-block animate-bounce delay-900">.</span>
        </div>

        {/* Progress percentage */}
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          {progress}%
        </div>

        {/* Interactive hint */}
        <div className="text-xs text-gray-400 dark:text-gray-500 mt-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
          Hover for more animation!
        </div>
      </div>
    </div>
  );
};

export default Loading; 