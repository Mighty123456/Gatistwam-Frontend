import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const SocialMediaAdvertisingPage: React.FC = () => {
  const { theme } = useTheme();
  const buttonClass = theme === 'light'
    ? 'border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
    : 'border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-20">
      <div className="container-custom mx-auto px-4">
        {/* Main Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-500 dark:text-secondary-500">Anand's best Social Media Advertising Agency</h1>
            <p className="text-gray-700 dark:text-gray-300">Your social media presence will flourish under our guidance, converting interaction into success.</p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">Our social media advertising agency is skilled in developing and overseeing focused advertising programs that are intended to help you reach your company's objectives by using targeted advertising campaigns. As a result, we guarantee the best return on investment, enabling you to successfully connect with and engage your target audience.</p>
          </div>
          {/* Placeholder for image/illustration */}
          <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder 740x782</span>
          </div>
        </div>

        {/* Reach Your Objectives Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Reach Your Objectives with our Social Media Advertising agency</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">You can rely on us to meet your needs and make your company successful.</p>
            <h3 className="text-xl font-semibold mb-3 text-primary-500 dark:text-secondary-500">Get the Best ROI for Your Campaigns:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                {/* Icon placeholder */}
                <span className="text-2xl">🎯</span>
                <span className="text-gray-700 dark:text-gray-300">Targeted Campaigns</span>
              </div>
              <div className="flex items-center space-x-2">
                 {/* Icon placeholder */}
                <span className="text-2xl">💡</span>
                <span className="text-gray-700 dark:text-gray-300">Engaging Ads</span>
              </div>
              <div className="flex items-center space-x-2">
                 {/* Icon placeholder */}
                <span className="text-2xl">📈</span>
                <span className="text-gray-700 dark:text-gray-300">Profit Maximization</span>
              </div>
              <div className="flex items-center space-x-2">
                 {/* Icon placeholder */}
                <span className="text-2xl">📊</span>
                <span className="text-gray-700 dark:text-gray-300">Performance Testing</span>
              </div>
            </div>
          </div>
           {/* Placeholder for image/illustration */}
           <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder 412x400</span>
          </div>
        </div>

        {/* Why Opt for a Social Media Advertising Agency? Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
           <div className="md:w-1/2">
             <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Why Opt for a Social Media Advertising Agency?</h2>
             <p className="text-gray-700 dark:text-gray-300 mb-6">Connect with your target market and expand your brand's online presence. Our proven strategies aid in devising, overseeing, and refining campaigns to produce impactful, personalized strategies that yield outcomes.</p>
             <button className={`px-6 py-2 border-2 rounded-lg font-semibold transition-colors ${buttonClass}`}>Get a proposal</button>
           </div>
           <div className="md:w-1/2">
             <ul className="space-y-4 text-gray-700 dark:text-gray-300">
               <li>
                 <h3 className="text-xl font-semibold text-primary-500 dark:text-secondary-500">Instagram / Facebook Ads:</h3>
                 <p>Access demographic and targeting options for incredibly low ad costs on Facebook and Instagram ads.</p>
               </li>
               <li>
                 <h3 className="text-xl font-semibold text-primary-500 dark:text-secondary-500">Twitter/LinkedIn Ads:</h3>
                 <p>Leverage both Twitter, LinkedIn advertising with expertise, guaranteeing affordable click prices and excellent return on investment through customized campaigns.</p>
               </li>
             </ul>
          </div>
        </div>

        {/* Benefits of Social Media Advertising Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
           <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Benefits of Social Media Advertising:</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Effectively Reach Your Target Audience:</strong> By ensuring that the correct people see your content, targeted advertising will increase engagement and conversion rates.
              </li>
              <li>
                <strong>All-Inclusive Campaign Management:</strong> We effectively manage every facet of your social media marketing, from budget management to ad development.
              </li>
              <li>
                <strong>Multiple Social Network Proficiency:</strong> Our expertise extends to popular social media sites like Facebook, Instagram, LinkedIn, and Twitter, guaranteeing the best possible ad placement.
              </li>
              <li>
                <strong>Customized Approaches for Business Triumph:</strong> We provide tailored advertising plans that support your company's objectives and provide quantifiable outcomes.
              </li>
            </ul>
          </div>
           {/* Placeholder for image/illustration */}
           <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder 587x561</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SocialMediaAdvertisingPage; 