import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const GoogleAdsPPCPage: React.FC = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-500 dark:text-secondary-500">Google Ads Management Services in Anand</h1>
            <p className="text-gray-700 dark:text-gray-300">The ultimate goal of advertisements is to produce sales or clicks. Your advertising money if your advertisements fail to achieve that.</p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">Are you trying to find the best Google Ads management services available in India? Advert Marketing, the top Google Ads marketing firm in the nation, is the only place to look. Through our Google Ads services, we assist small and medium-sized businesses, as well as multinational firms, achieving outstanding results through our customized campaigns that meet their specific requirements. Check out our Google Ads service offerings right now!</p>
          </div>
          {/* Placeholder for image/illustration */}
          <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder 740x782</span>
          </div>
        </div>

        {/* Expert Google Ads Management Services Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Expert Google Ads Management Services</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Our team of Google AdWords Professionals enables us to efficiently handle all kind of Google Ads, including Search, Display, Remarketing, Shopping, App, Gmail and more.</p>
            <h3 className="text-xl font-semibold mb-3 text-primary-500 dark:text-secondary-500">Get the Best ROI for Your Campaigns:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                {/* Icon placeholder */}
                <span className="text-2xl">🔑</span>
                <span className="text-gray-700 dark:text-gray-300">Best Keywords</span>
              </div>
              <div className="flex items-center space-x-2">
                 {/* Icon placeholder */}
                <span className="text-2xl">🎯</span>
                <span className="text-gray-700 dark:text-gray-300">Enhance Your Targeting</span>
              </div>
              <div className="flex items-center space-x-2">
                 {/* Icon placeholder */}
                <span className="text-2xl">🔄</span>
                <span className="text-gray-700 dark:text-gray-300">Remarketing</span>
              </div>
              <div className="flex items-center space-x-2">
                 {/* Icon placeholder */}
                <span className="text-2xl">📊</span>
                <span className="text-gray-700 dark:text-gray-300">Analyze Data</span>
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

        {/* Get Your Free Blueprint for a Google Ads Section */}
         <div className="flex flex-col md:flex-row items-center gap-8 mt-12">
           <div className="md:w-1/2">
             <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Get Your Free Blueprint for a Google Ads</h2>
             <p className="text-gray-700 dark:text-gray-300">Are you prepared to boost your Google Ads Management ROI? Obtain a customized PPC strategy plan that identifies the main Google Ads obstacles facing your website and provides professional advice on how to solve them. Let's increase your returns by two or three times!</p>
           </div>
           {/* Placeholder for image/illustration */}
           <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder 587x561</span>
          </div>
        </div>

      </div>

      {/* Proposal Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-primary-500 dark:text-secondary-500">Request a Proposal</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Name:</label>
                <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Email:</label>
                <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Message:</label>
                <textarea id="message" rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button type="button" onClick={toggleModal} className={`px-4 py-2 rounded-lg font-semibold transition-colors ${buttonClass}`}>
                  Close
                </button>
                <button type="submit" className={`px-4 py-2 rounded-lg font-semibold transition-colors bg-primary-500 text-white hover:bg-primary-600 dark:bg-secondary-500 dark:hover:bg-secondary-600`}>
                  Send Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleAdsPPCPage;