import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const WebDevelopmentPage: React.FC = () => {
  const { theme } = useTheme();
  const buttonClass = theme === 'light'
    ? 'border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
    : 'border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-20">
      <div className="container-custom mx-auto px-4">
        {/* Web Design and Development Services in India Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-500 dark:text-secondary-500">Web Design and Development Services in India</h1>
            <p className="text-gray-700 dark:text-gray-300">Our web design and development services in India cover a broad spectrum of options that are customized to fit your unique requirements. We handle everything, including content management systems, e-commerce platforms, responsive design, and custom web apps. Your website will be developed with the highest levels of functionality, security, and scalability.</p>
          </div>
          {/* Placeholder for image/illustration */}
          <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder 740x782</span>
          </div>
        </div>

        {/* What we offer in Web Development Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">What we offer in Web Development</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Web development encompasses a broad range of services aimed at creating and maintaining websites. Here is what we offer:</p>
            <button className={`px-6 py-2 border-2 rounded-lg font-semibold transition-colors ${buttonClass}`}>Get a proposal</button>
          </div>
           {/* Placeholder for image/illustration */}
           <div className="md:w-1/2">
             <ul className="space-y-4 text-gray-700 dark:text-gray-300">
               <li>
                 <h3 className="text-xl font-semibold text-primary-500 dark:text-secondary-500">Responsive Web Design:</h3>
                 <p>Ensuring optimal viewing experience across various devices (desktops, tablets, smartphones).</p>
               </li>
               <li>
                 <h3 className="text-xl font-semibold text-primary-500 dark:text-secondary-500">Custom Web Development:</h3>
                 <p>Building tailor-made websites tailored to specific business needs and goals.</p>
               </li>
               <li>
                 <h3 className="text-xl font-semibold text-primary-500 dark:text-secondary-500">Website Redesign and Revamp:</h3>
                 <p>Updating and redesigning existing websites to improve aesthetics, performance, and user experience.</p>
               </li>
                <li>
                 <h3 className="text-xl font-semibold text-primary-500 dark:text-secondary-500">E-commerce Development:</h3>
                 <p>Developing online stores with shopping cart functionality, payment gateways, and inventory management systems.</p>
               </li>
             </ul>
          </div>
        </div>

        {/* All-inclusive Website Development Services Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
           {/* Placeholder for image/illustration */}
           <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder 412x400</span>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">All-inclusive Website Development Services</h2>
            <p className="text-gray-700 dark:text-gray-300">Our web design and development services in India cover a broad spectrum of options that are customized to fit your unique requirements. We handle everything, including content management systems, e-commerce platforms, responsive design, and custom web apps. Your website will be developed with the highest levels of functionality, security, and scalability.</p>
          </div>
        </div>

        {/* Why select us For Web Development Services Section */}
        <div className="mb-12">
          <div className="md:w-1/2 mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-primary-500 dark:text-secondary-500">Why select us For Web Development Services</h2>
            <p className="text-gray-700 dark:text-gray-300">Choosing our top-notch web design and development services in India ensures quality and a personalized approach. We understand your business goals to create custom solutions. Our skilled team guarantees clear communication, timely delivery, and outstanding results.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WebDevelopmentPage; 