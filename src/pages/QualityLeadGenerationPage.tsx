import React from 'react';
import { motion } from 'framer-motion';

const QualityLeadGenerationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white dark:bg-gray-800 py-20"
      >
        <div className="container-custom flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Quality Lead <br /> Generation Services
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Attract and convert high-quality leads that are most likely to become valuable customers.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            {/* Placeholder for image */}
            <div className="w-full max-w-md h-80 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 text-2xl font-semibold rounded-lg overflow-hidden">
              <img src="https://placehold.co/600x400" alt="Quality Lead Generation Hero" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* What We Offer Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="py-20 bg-gray-100 dark:bg-gray-900"
      >
        <div className="container-custom text-center">
          <h3 className="text-sm font-bold text-primary-600 dark:text-primary-400 mb-2">WHAT WE OFFER</h3>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-12">Our Quality Lead Generation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card Placeholder 1 */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer"
            >
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-primary-200 dark:bg-primary-700 rounded-full flex items-center justify-center mb-4"></div>
              <h4 className="text-xl font-bold mb-2">Lead Magnet Creation</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Developing valuable resources to attract potential leads.</p>
            </motion.div>
            {/* Service Card Placeholder 2 */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer"
            >
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-primary-200 dark:bg-primary-700 rounded-full flex items-center justify-center mb-4"></div>
              <h4 className="text-xl font-bold mb-2">Landing Page Optimization</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Designing and optimizing landing pages for high conversion rates.</p>
            </motion.div>
            {/* Service Card Placeholder 3 */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer"
            >
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-primary-200 dark:bg-primary-700 rounded-full flex items-center justify-center mb-4"></div>
              <h4 className="text-xl font-bold mb-2">Email Marketing Integration</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Integrating email marketing for nurturing leads and building relationships.</p>
            </motion.div>
             {/* Service Card Placeholder 4 */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer"
            >
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-primary-200 dark:bg-primary-700 rounded-full flex items-center justify-center mb-4"></div>
              <h4 className="text-xl font-bold mb-2">CRM Integration</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Connecting with CRM systems for seamless lead tracking and management.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="py-20 relative"
      >
         {/* Decorative element placeholder */}
         <div className="absolute top-0 left-0 w-32 h-32 border-t-8 border-l-8 border-primary-200 dark:border-primary-700"></div>
        <div className="container-custom flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0 text-center lg:text-left">
            <h3 className="text-sm font-bold text-primary-600 dark:text-primary-400 mb-2">WHY CHOOSE US?</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
              For Quality Lead <br /> Generation
              <span className="absolute bottom-0 left-0 w-24 h-1 bg-primary-500"></span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We specialize in strategies that attract genuinely interested prospects, ensuring a higher conversion rate and a better return on your marketing investment.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            {/* Placeholder for image/illustration */}
            <div className="w-full max-w-md h-80 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 text-2xl font-semibold rounded-lg overflow-hidden">
              <img src="https://placehold.co/412x400" alt="Quality Lead Generation Illustration" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default QualityLeadGenerationPage; 