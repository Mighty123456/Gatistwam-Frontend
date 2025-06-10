import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import googleAdsImage from '../../assets/images/Digital Branding/Google Ads/google-ads.jpg';
import blueprintImage from '../../assets/images/Digital Branding/Google Ads/Blueprint.jpg';
import expertImage from '../../assets/images/Digital Branding/Google Ads/Google-ads-expert.webp';

// To manually add images, use this pattern:
// import imageName from '../../assets/images/your-folder/image-name.extension';
// Supported formats: .jpg, .jpeg, .png, .webp, .gif
// Example: import myImage from '../../assets/images/services/my-image.jpg';

const GoogleAdsPPCPage: React.FC = () => {
  const { theme } = useTheme();
  const buttonClass = theme === 'light'
    ? 'border-[#0E2A61] text-[#0E2A61] hover:bg-[#0E2A61] hover:text-white'
    : 'border-[#8BD7BB] text-[#8BD7BB] hover:bg-[#8BD7BB] hover:text-white';

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section (Styled like TechSolutions) */}
      <div className={`relative ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#0E2A61]'} pt-32 md:pt-40 pb-16 overflow-hidden`}>
        {/* Animated gradient overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 bg-gradient-to-br ${
            theme === 'dark'
              ? 'from-primary-500/20 via-transparent to-secondary-500/20'
              : 'from-[#8BD7BB]/30 via-transparent to-primary-500/20'
          } pointer-events-none z-0`}
        />
        {/* Decorative blurred circles with shadow */}
        <div className={`absolute -top-10 -left-10 w-48 h-48 ${
          theme === 'dark' ? 'bg-primary-500' : 'bg-[#8BD7BB]'
        } opacity-30 rounded-full blur-3xl shadow-2xl`}></div>
        <div className={`absolute -bottom-10 -right-10 w-64 h-64 ${
          theme === 'dark' ? 'bg-secondary-500' : 'bg-primary-500'
        } opacity-20 rounded-full blur-3xl shadow-2xl`}></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Glassy Card with Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className={`${
                theme === 'dark'
                  ? 'bg-gray-800/90 backdrop-blur-md text-gray-100'
                  : 'bg-white/95 backdrop-blur-md text-gray-900'
              } rounded-3xl shadow-2xl p-10 md:p-14 transition-transform duration-300`}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              >
                Google Ads Management Services in Anand
              </motion.h1>
               <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-xl mb-6 font-medium ${
                  theme === 'dark' ? 'text-[#8BD7BB]' : 'text-gray-700'
                }`}
              >
                Unlock Your Potential with Google Ads. Drive Targeted Traffic and Maximize Your ROI.
              </motion.p>
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 className={`space-y-5 text-base md:text-lg mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
              >
                <p>
                  Our Google Ads management services are designed to help businesses maximize their online advertising potential. 
                  We create and optimize campaigns that drive targeted traffic, increase conversions, and deliver measurable ROI.
                </p>
                <p>
                  With our expert team handling your Google Ads campaigns, you can focus on growing your business while we focus 
                  on maximizing your advertising budget and reaching your target audience effectively.
                </p>
              </motion.div>
               <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                 <Button
                   variant="primary"
                   size="lg"
                   to="/contact"
                   className={theme === 'dark' ? 'bg-[#8BD7BB] hover:bg-[#8BD7BB]/90' : 'bg-[#0E2A61] hover:bg-[#0E2A61]/90'}
                 >
                   Get Free Analysis
                 </Button>
              </motion.div>
            </motion.div>
            {/* Right: Illustration with floating animation */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
              className="flex justify-center items-center"
            >
              <img
                src={googleAdsImage}
                alt="Google Ads Management"
                className={`w-full max-w-3xl rounded-2xl shadow-xl border ${
                  theme === 'dark'
                    ? 'border-gray-700 bg-gray-800/90'
                    : 'border-gray-200 bg-white/95'
                }`}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Expert Google Ads Management Services Section */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <img
              src={expertImage}
              alt="Expert Google Ads Management"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Expert Google Ads Management Services</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our team of certified Google Ads experts brings years of experience in managing successful campaigns. 
              We stay up-to-date with the latest Google Ads features and best practices to ensure your campaigns 
              perform at their best.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Certified Google Ads professionals</li>
              <li>Data-driven campaign optimization</li>
              <li>Regular performance reporting</li>
              <li>Continuous campaign monitoring</li>
              <li>Strategic budget management</li>
            </ul>
            <button onClick={toggleModal} className={`mt-6 px-6 py-2 border-2 rounded-lg font-semibold transition-colors ${buttonClass}`}>
              Get Expert Management
            </button>
          </div>
        </div>


        {/* Get Your Free Blueprint for a Google Ads Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Get Your Free Blueprint for a Google Ads</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We'll create a customized Google Ads blueprint for your business, outlining the best strategies 
              to achieve your marketing goals. Our blueprint includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Keyword research and analysis</li>
              <li>Campaign structure recommendations</li>
              <li>Budget allocation strategy</li>
              <li>Performance metrics and KPIs</li>
              <li>Competitor analysis</li>
            </ul>
            <button onClick={toggleModal} className={`mt-6 px-6 py-2 border-2 rounded-lg font-semibold transition-colors ${buttonClass}`}>
              Get Your Free Blueprint
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src={blueprintImage}
              alt="Google Ads Blueprint"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Advanced PPC Campaign Management Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12 mt-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Advanced PPC Campaign Management</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Our advanced PPC campaign management combines sophisticated targeting strategies with data-driven optimization. We implement smart bidding strategies, utilizing machine learning to maximize your return on ad spend. Our team conducts thorough keyword research and competitor analysis to identify high-value opportunities, ensuring your campaigns target the most relevant and profitable search terms. We create compelling ad copy and landing pages that drive conversions while maintaining high quality scores.</p>
            <p className="text-gray-700 dark:text-gray-300">We employ advanced campaign structures that segment audiences and keywords for optimal performance. Our team continuously monitors and optimizes campaigns, adjusting bids, budgets, and targeting based on performance data. We implement sophisticated remarketing strategies to re-engage potential customers and maximize conversion opportunities. Through regular A/B testing and performance analysis, we ensure your campaigns deliver the best possible results while maintaining cost efficiency.</p>
          </div>
          <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder: PPC Campaign Dashboard</span>
          </div>
        </div>

        {/* Performance Tracking and ROI Optimization Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder: ROI Analytics Dashboard</span>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Performance Tracking and ROI Optimization</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">We provide comprehensive performance tracking and reporting that gives you clear insights into your campaign's success. Our advanced analytics tools track key metrics such as click-through rates, conversion rates, cost per acquisition, and return on ad spend. We implement conversion tracking and goal setting to measure the true impact of your campaigns on your business objectives. Our detailed reporting includes regular performance reviews and actionable recommendations for improvement.</p>
            <p className="text-gray-700 dark:text-gray-300">Our ROI optimization strategies focus on maximizing your advertising budget's effectiveness. We analyze campaign data to identify high-performing segments and opportunities for improvement. Through strategic budget allocation and bid optimization, we ensure your ad spend delivers the best possible returns. We also provide competitive analysis and market insights, helping you stay ahead of industry trends and maintain a competitive edge in your market.</p>
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
                <button type="submit" className={`px-4 py-2 rounded-lg font-semibold transition-colors ${theme === 'dark' ? 'bg-[#8BD7BB] hover:bg-[#8BD7BB]/90' : 'bg-[#0E2A61] hover:bg-[#0E2A61]/90'} text-white`}>
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