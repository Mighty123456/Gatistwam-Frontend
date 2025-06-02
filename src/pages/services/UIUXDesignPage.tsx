import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const UIUXDesignPage: React.FC = () => {
  const { theme } = useTheme();
  const buttonClass = theme === 'light'
    ? 'border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
    : 'border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white';

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-20">
      <div className="container-custom mx-auto px-4">
        {/* Main Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-500 dark:text-secondary-500">UI/UX Design Services in Anand</h1>
            <p className="text-gray-700 dark:text-gray-300">Craft captivating experiences, skyrocket conversions & build brand love with best UI/UX Design Services in Anand</p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">With our comprehensive UI/UX design services, you can maximize the potential of your digital marketing. We think that the cornerstone of a successful online campaign is an outstanding user experience. While excellent design leads your clients to their destination, effective layout informs them. We offer specialized, flexible, reachable, dependable, and mobile-friendly solutions that show rather than simply explain. Together, let's design a website that not only looks amazing but also turns users into loyal customers!</p>
          </div>
          {/* Placeholder for image/illustration */}
          <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder 740x782</span>
          </div>
        </div>

        {/* UI/UX Designing Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">UI/UX Designing</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">A product's success can be greatly impacted by well-designed UI/UX.</p>
            <h3 className="text-xl font-semibold mb-3 text-primary-500 dark:text-secondary-500">Key elements of our UI/UX design services :</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                {/* Icon placeholder */}
                <span className="text-2xl">💡</span>
                <span className="text-gray-700 dark:text-gray-300">Usability</span>
              </div>
              <div className="flex items-center space-x-2">
                 {/* Icon placeholder */}
                <span className="text-2xl">🗺️</span>
                <span className="text-gray-700 dark:text-gray-300">Information Architecture</span>
              </div>
              <div className="flex items-center space-x-2">
                 {/* Icon placeholder */}
                <span className="text-2xl">👁️</span>
                <span className="text-gray-700 dark:text-gray-300">Visual Hierarchy</span>
              </div>
              <div className="flex items-center space-x-2">
                 {/* Icon placeholder */}
                <span className="text-2xl">📱</span>
                <span className="text-gray-700 dark:text-gray-300">Responsiveness</span>
              </div>
            </div>
          </div>
           {/* Placeholder for image/illustration */}
           <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder 412x400</span>
          </div>
        </div>

        {/* Your website should be a bold reflection of the quality you provide Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary-500 dark:text-secondary-500">Your website should be a bold reflection of the quality you provide.</h2>
           <p className="text-gray-700 dark:text-gray-300 mb-6">Here's how we make that happen:</p>
           <button onClick={toggleModal} className={`px-6 py-2 border-2 rounded-lg font-semibold transition-colors ${buttonClass}`}>Get a proposal</button>
        </div>

        {/* Related Services/Offerings Section - Based on image */}
         <div className="mt-12">
           <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500 text-center">Related Services</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Placeholder for service item 1 */}
             <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                {/* Icon placeholder */}
               <span className="text-2xl">💻</span>
               <p className="text-gray-700 dark:text-gray-300 text-base">Full Website Development</p>
             </div>
             {/* Placeholder for service item 2 */}
             <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                {/* Icon placeholder */}
               <span className="text-2xl">🎨</span>
               <p className="text-gray-700 dark:text-gray-300 text-base">UI/UX Design</p>
             </div>
             {/* Placeholder for service item 3 */}
             <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                 {/* Icon placeholder */}
               <span className="text-2xl">📱</span>
               <p className="text-gray-700 dark:text-gray-300 text-base">Mobile Optimization</p>
             </div>
           </div>
         </div>

      </div>
    </div>
  );
};

export default UIUXDesignPage;