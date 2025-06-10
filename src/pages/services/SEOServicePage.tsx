import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import seoHero from '../../assets/images/Digital Branding/SEO/seo.webp';
import onPageSeo from '../../assets/images/Digital Branding/SEO/on-page-seo.jpeg';
import offPageSeo from '../../assets/images/Digital Branding/SEO/off-page-seo.jpeg';
import technicalSeo from '../../assets/images/Digital Branding/SEO/technical-seo.jpeg';
import seoAnalytics from '../../assets/images/Digital Branding/SEO/seo-analytics-dashboard.webp';
import localSeoMap from '../../assets/images/Digital Branding/SEO/local-seo-map.png';

// To manually add images, use this pattern:
// import imageName from '../../assets/images/your-folder/image-name.extension';
// Supported formats: .jpg, .jpeg, .png, .webp, .gif
// Example: import myImage from '../../assets/images/services/my-image.jpg';

const SEOServicePage: React.FC = () => {
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
                Best SEO Service Provider in Anand
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-xl mb-6 font-medium ${
                  theme === 'dark' ? 'text-[#8BD7BB]' : 'text-gray-700'
                }`}
              >
                Be Seen, Be Chosen: Your Digital Success Starts Here!
              </motion.p>
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 className={`space-y-5 text-base md:text-lg mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
              >
                <p>
                  Dominate the digital landscape with our user-friendly theme and comprehensive SEO strategies. We provide everything keep you in control. Get found by people looking for services like yours! We are the best SEO service providers in Anand, to climb to the top of search rankings & turn those clicks into lifelong customers.
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
                   Get a proposal
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
              {/* Using a placeholder image URL for now */}
              <img
                src={seoHero}
                alt="SEO Strategy"
                className={`w-full max-w-2xl rounded-2xl shadow-xl border ${
                  theme === 'dark'
                    ? 'border-gray-700 bg-gray-800/90'
                    : 'border-gray-200 bg-white/95'
                }`}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* On-page Optimization Section */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
           {/* Placeholder for image/illustration */}
           <div className="md:w-1/2">
            <img
              src={onPageSeo}
              alt="On-Page SEO"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">On-page Optimization:</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">This focuses on optimizing the content and structure of your website itself to rank higher in search results.</p>
            <h3 className="text-xl font-semibold mb-3 text-primary-500 dark:text-secondary-500">This can include tasks like:</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 grid grid-cols-2">
              <li>Keyword Research</li>
              <li>Meta Tags Optimization</li>
              <li>Content Creation</li>
              <li>Website Structure</li>
            </ul>
          </div>
        </div>

        {/* Off-page Optimization Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Off-page Optimization:</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">This involves building your website's authority and reputation through external factors.</p>
            <h3 className="text-xl font-semibold mb-3 text-primary-500 dark:text-secondary-500">This can include tasks like:</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 grid grid-cols-2">
              <li>Link Building Strategies</li>
              <li>Social Media Promotion</li>
              <li>Business Listing</li>
              <li>Article Submissions</li>
            </ul>
          </div>
           {/* Placeholder for image/illustration */}
           <div className="md:w-1/2">
            <img
              src={offPageSeo}
              alt="Off-Page SEO"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

         {/* Technical SEO Section */}
         <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
           {/* Placeholder for image/illustration */}
           <div className="md:w-1/2">
            <img
              src={technicalSeo}
              alt="Technical SEO"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Technical SEO:</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">This ensures your website is crawlable and indexable by search engines.</p>
            <h3 className="text-xl font-semibold mb-3 text-primary-500 dark:text-secondary-500">This can include tasks like:</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 grid grid-cols-2">
              <li>Website Speed Optimization</li>
              <li>Schema Markup Implementation</li>
              <li>On-Going Maintenance and Support</li>
              <li>Security Checks and Updates</li>
            </ul>
          </div>
        </div>

        {/* Why are we the best SEO Service provider in Anand Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Why are we the best SEO Service provider in Anand</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Well, a great online presence in today's digital age is usually not a luxury but a necessity. Our best SEO service provide a undeniable the possible breakthrough with search engines to get your company quality leads and propell your business.</p>
            <button onClick={toggleModal} className={`px-6 py-2 border-2 rounded-lg font-semibold transition-colors ${buttonClass}`}>Get a proposal</button>
          </div>
           {/* Placeholder for image/illustration */}
           <div className="md:w-1/2">
             <img
               src={localSeoMap}
               alt="Local SEO Map"
               className="w-full h-96 object-cover rounded-lg shadow-lg"
             />
          </div>
        </div>

        {/* What People Say Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary-500 dark:text-secondary-500">What People Say</h2>
          </div>
          {/* Placeholder for testimonials */}
          <div className="bg-gray-300 dark:bg-gray-700 h-48 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Testimonials Placeholder</span>
          </div>
        </div>

        {/* Advanced SEO Techniques Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Advanced SEO Techniques</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Our advanced SEO techniques combine cutting-edge technology with proven strategies to maximize your search engine visibility. We implement sophisticated keyword research methodologies, utilizing AI-powered tools to identify high-value opportunities and long-tail keywords that drive targeted traffic. Our content optimization strategies ensure your website speaks both to search engines and your target audience, creating a perfect balance of technical excellence and user engagement.</p>
            <p className="text-gray-700 dark:text-gray-300">We employ advanced technical SEO practices, including structured data implementation, Core Web Vitals optimization, and mobile-first indexing strategies. Our team stays ahead of search engine algorithm updates, ensuring your website maintains its competitive edge. Through comprehensive site audits and continuous monitoring, we identify and resolve technical issues that could impact your search rankings, providing a solid foundation for sustainable organic growth.</p>
          </div>
          <div className="md:w-1/2">
            <img
              src={seoAnalytics}
              alt="SEO Analytics Dashboard"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Local SEO and Market Dominance Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Local SEO and Market Dominance</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Our local SEO strategies are specifically designed to help businesses dominate their local market. We optimize your Google Business Profile, manage local citations, and implement location-based keyword strategies to ensure maximum visibility in local search results. Our comprehensive approach includes managing and responding to customer reviews, creating location-specific content, and building a strong local backlink profile.</p>
            <p className="text-gray-700 dark:text-gray-300">We develop custom local SEO campaigns that target your specific geographic area, helping you capture high-intent local customers. Through strategic content creation and local link building, we establish your authority in the local market. Our team monitors local search trends and competitor activities, allowing us to adapt strategies quickly and maintain your competitive advantage in the local search landscape.</p>
          </div>
          <div className="md:w-1/2">
            <img
              src={localSeoMap}
              alt="Local SEO Map"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
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

export default SEOServicePage;