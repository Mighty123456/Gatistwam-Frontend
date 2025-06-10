import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';

// To manually add images, use this pattern:
// import imageName from '../../assets/images/your-folder/image-name.extension';
// Supported formats: .jpg, .jpeg, .png, .webp, .gif
// Example: import myImage from '../../assets/images/services/my-image.jpg';

const InfluencerMarketingPage: React.FC = () => {
  const { theme } = useTheme();
  const buttonClass = theme === 'light'
    ? 'border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
    : 'border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-20">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-primary-500 dark:text-secondary-500 text-center">Influencer Marketing Services</h1>
        {/* Add specific content for Influencer Marketing here */}
        <p className="text-center text-gray-700 dark:text-gray-300">This is the dedicated page for Influencer Marketing services.</p>
         {/* Placeholder sections, add content based on requirements */}
        <div className="mt-12">
           <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Our Influencer Marketing Approach</h2>
           <p className="text-gray-700 dark:text-gray-300">Details about our strategy for successful influencer collaborations.</p>
        </div>
         <div className="mt-12">
           <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Services Offered</h2>
           <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
             <li>Influencer Identification & Outreach</li>
             <li>Campaign Strategy & Management</li>
             <li>Content Collaboration</li>
             <li>Performance Tracking & Reporting</li>
             <li>Negotiation & Relationship Management</li>
           </ul>
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="primary"
            size="lg"
            to="/contact"
            className="bg-white text-white dark:text-white hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl"
          >
            Get a proposal
          </Button>
        </div>

      </div>
    </div>
  );
};

export default InfluencerMarketingPage; 