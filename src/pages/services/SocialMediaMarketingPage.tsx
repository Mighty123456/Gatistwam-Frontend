import React from 'react';
// import { Link } from 'react-router-dom'; // Removed unused import
import { useTheme } from '../../context/ThemeContext';
import ServiceCard from '../../components/services/ServiceCard';

interface ServiceOffering {
  name: string;
  icon: string;
  description: string;
  link: string;
}

const socialMediaMarketingOfferings: ServiceOffering[] = [
  { name: 'Facebook Marketing', icon: '🟦', description: 'Supercharge your brand visibility on Facebook with professional marketing campaigns that really deliver.', link: '#' },
  { name: 'Instagram Management', icon: '📸', description: 'Master Instagram marketing with engaging content and high-ROI ad management.', link: '#' },
  { name: 'Twitter Management', icon: '🐦', description: 'Bring your Twitter to the next level. Engage your followers, maximize your reach, and run effective campaigns.', link: '#' },
  { name: 'LinkedIn Management', icon: '👔', description: 'Maximize your LinkedIn with a tailored management agency with connection expansion, content strategy, and running Ads.', link: '#' },
  { name: 'Pinterest Marketing', icon: '📌', description: 'Grow your brand presence and reach new audiences on Pinterest.', link: '#' },
  { name: 'YouTube Marketing', icon: '▶️', description: 'Boost your video views and engage with your audience on YouTube.', link: '#' },
  { name: 'Google Services', icon: '🔍', description: 'Leverage Google tools for better online visibility and marketing.', link: '#' },
];

const SocialMediaMarketingPage: React.FC = () => {
  const { theme } = useTheme();
  // const buttonClass = theme === 'light' // Removed unused variable
  //   ? 'border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
  //   : 'border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-20">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-primary-500 dark:text-secondary-500 text-center">Social Media Marketing</h1>
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Growing need of Social Media Marketing</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Companies need social media marketing to build brand visibility, foster customer engagement, drive traffic to websites, generate leads, and build customer loyalty for sales and growth.</p>
            <h3 className="text-xl font-semibold mb-3 text-primary-500 dark:text-secondary-500">Services Include:</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Social Media Audit</li>
              <li>Social Media Strategy</li>
              <li>Content Creation</li>
              <li>Analytics and Reporting</li>
            </ul>
          </div>
          {/* Placeholder for image/illustration */}
          <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder</span>
          </div>
        </div>
        
        {/* What We're Offering Creative Digital Service Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-500 dark:text-secondary-500">What We're Offering Creative Digital Service</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {socialMediaMarketingOfferings.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.name}
              description={service.description}
              benefits={[]} // No specific benefits provided in the original data, using empty array
              image={'https://via.placeholder.com/800x400?text=Social+Media'} // Using a placeholder image
            />
          ))}
        </div>

        {/* Add specific content for Social Media Marketing here */}
        {/* <p className="text-center text-gray-700 dark:text-gray-300">This is the dedicated page for Social Media Marketing services.</p> */}
      </div>
    </div>
  );
};

export default SocialMediaMarketingPage; 