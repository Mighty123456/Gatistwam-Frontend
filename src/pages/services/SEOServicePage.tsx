import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const SEOServicePage: React.FC = () => {
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
        {/* Best SEO Service Provider in Anand Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-500 dark:text-secondary-500">Best SEO Service Provider in Anand</h1>
            <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Be Seen, Be Chosen: Your Digital Success Starts Here!</h2>
            <p className="text-gray-700 dark:text-gray-300">Dominate the digital landscape with our user-friendly theme and comprehensive SEO strategies. We provide everything keep you in control. Get found by people looking for services like yours! We are the best SEO service providers in Anand, to climb to the top of search rankings & turn those clicks into lifelong customers.</p>
          </div>
          {/* Placeholder for image/illustration */}
          <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder 740x782</span>
          </div>
        </div>

        {/* On-page Optimization Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
           {/* Placeholder for image/illustration */}
           <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder 412x400</span>
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
           <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder 412x400</span>
          </div>
        </div>

         {/* Technical SEO Section */}
         <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
           {/* Placeholder for image/illustration */}
           <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder 412x400</span>
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
             <ul className="space-y-4 text-gray-700 dark:text-gray-300">
               <li>
                 <h3 className="text-xl font-semibold text-primary-500 dark:text-secondary-500">Long-Term Vision, Sustainable Results:</h3>
                 <p>Our expert SEO team builds a strong foundation for sustained performance, enhancing your website's authority and organic ranking over time.</p>
               </li>
               <li>
                 <h3 className="text-xl font-semibold text-primary-500 dark:text-secondary-500">Laser-Focused Targeting:</h3>
                 <p>Through in-depth keyword research, we attract genuinely interested visitors, maximizing your conversion potential.</p>
               </li>
               <li>
                 <h3 className="text-xl font-semibold text-primary-500 dark:text-secondary-500">Business Driven Approach:</h3>
                 <p>Our custom SEO strategy aligns with your specific business goals, whether it's lead generation, sales maximization, or brand awareness.</p>
               </li>
             </ul>
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

export default SEOServicePage;