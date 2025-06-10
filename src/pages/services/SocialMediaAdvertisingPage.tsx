import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import socialMediaAdvertising from '../../assets/images/Digital Branding/Social Media Advertising/social-media-advertising.jpg';
import socialMediaDashboard from '../../assets/images/Digital Branding/Social Media Advertising/social-media-dashboard.avif';
import benefits from '../../assets/images/Digital Branding/Social Media Advertising/benefits.jpg';
import analyticsDashboard from '../../assets/images/Digital Branding/Social Media Advertising/analytics-dashboard.png';

// To manually add images, use this pattern:
// import imageName from '../../assets/images/your-folder/image-name.extension';
// Supported formats: .jpg, .jpeg, .png, .webp, .gif
// Example: import myImage from '../../assets/images/services/my-image.jpg';

const SocialMediaAdvertisingPage: React.FC = () => {
  const { theme } = useTheme();
  const buttonClass = theme === 'light'
    ? 'border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
    : 'border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white';

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
                Anand's best Social Media Advertising Agency
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-xl mb-6 font-medium ${
                  theme === 'dark' ? 'text-[#8BD7BB]' : 'text-gray-700'
                }`}
              >
                Your social media presence will flourish under our guidance, converting interaction into success.
              </motion.p>
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 className={`space-y-5 text-base md:text-lg mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
              >
                <p>
                  Our social media advertising agency is skilled in developing and overseeing focused advertising programs that are intended to help you reach your company's objectives by using targeted advertising campaigns. As a result, we guarantee the best return on investment, enabling you to successfully connect with and engage your target audience.
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
                src={socialMediaAdvertising}
                alt="Social Media Advertising"
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

      {/* Reach Your Objectives Section */}
      <div className="container-custom mx-auto px-4 py-20">
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
           <div className="md:w-1/2">
             <img
               src={socialMediaDashboard}
               alt="Social Media Advertising Dashboard"
               className="w-full h-96 object-cover rounded-lg shadow-lg"
             />
           </div>
        </div>

        {/* Why Opt for a Social Media Advertising Agency? Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
           <div className="md:w-1/2">
             <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Why Opt for a Social Media Advertising Agency?</h2>
             <p className="text-gray-700 dark:text-gray-300 mb-6">Connect with your target market and expand your brand's online presence. Our proven strategies aid in devising, overseeing, and refining campaigns to produce impactful, personalized strategies that yield outcomes.</p>
             <button onClick={() => window.location.href = '/contact'} className={`px-6 py-2 border-2 rounded-lg font-semibold transition-colors ${buttonClass}`}>Get a proposal</button>
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
           <div className="md:w-1/2">
             <img
               src={benefits}
               alt="Benefits of Social Media Advertising"
               className="w-full h-96 object-cover rounded-lg shadow-lg"
             />
           </div>
        </div>

        {/* Strategic Social Media Advertising Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Strategic Social Media Advertising</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Our strategic approach to social media advertising combines data-driven insights with creative excellence. We analyze market trends, competitor strategies, and audience behavior to craft campaigns that resonate with your target demographic. Our team leverages advanced targeting capabilities to ensure your ads reach the right people at the right time, maximizing engagement and conversion rates.</p>
            <p className="text-gray-700 dark:text-gray-300">We implement A/B testing methodologies to optimize ad performance continuously. By monitoring key metrics such as click-through rates, conversion rates, and return on ad spend (ROAS), we refine campaigns in real-time to achieve optimal results. Our comprehensive reporting system provides transparent insights into campaign performance, enabling data-backed decision-making for future strategies.</p>
          </div>
          <div className="md:w-1/2">
            <img
              src={analyticsDashboard}
              alt="Strategic Advertising Dashboard"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Advanced Targeting and Analytics Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Advanced Targeting and Analytics</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Our advanced targeting capabilities enable precise audience segmentation based on demographics, interests, behaviors, and custom audiences. We utilize sophisticated retargeting strategies to re-engage users who have shown interest in your brand, significantly improving conversion rates. Our team stays updated with the latest platform features and algorithm changes to ensure your campaigns remain effective and compliant.</p>
            <p className="text-gray-700 dark:text-gray-300">We provide detailed analytics and reporting that goes beyond basic metrics. Our comprehensive dashboards track campaign performance across multiple platforms, offering insights into audience engagement, ad performance, and ROI. This data-driven approach allows us to make informed optimizations, ensuring your advertising budget is utilized effectively to achieve maximum impact and return on investment.</p>
          </div>
          <div className="md:w-1/2">
            <img
              src={socialMediaDashboard}
              alt="Analytics Dashboard"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="md:w-1/2">
       
        </div>

      </div>
    </div>
  );
};

export default SocialMediaAdvertisingPage; 