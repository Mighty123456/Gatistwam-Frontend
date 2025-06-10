import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import * as XLSX from 'xlsx';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';

// To manually add images, use this pattern:
// import imageName from '../../assets/images/your-folder/image-name.extension';
// Supported formats: .jpg, .jpeg, .png, .webp, .gif
// Example: import myImage from '../../assets/images/services/my-image.jpg';

const LeadsGenerationPage: React.FC = () => {
  const { theme } = useTheme();
  const buttonClass = theme === 'light'
    ? 'border-[#0E2A61] text-[#0E2A61] hover:bg-[#0E2A61] hover:text-white'
    : 'border-[#8BD7BB] text-[#8BD7BB] hover:bg-[#8BD7BB] hover:text-white';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    timestamp: ''
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      setFormData({
        name: '',
        email: '',
        message: '',
        timestamp: ''
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const saveToExcel = (data: any) => {
    try {
      // Create a new workbook
      const wb = XLSX.utils.book_new();
      
      // Convert data to worksheet
      const ws = XLSX.utils.json_to_sheet([data]);
      
      // Add worksheet to workbook
      XLSX.utils.book_append_sheet(wb, ws, "Leads");
      
      // Generate Excel file
      XLSX.writeFile(wb, "leads_data.xlsx");
      
      toast.success('Data saved to Excel successfully!');
    } catch (error) {
      console.error('Error saving to Excel:', error);
      toast.error('Failed to save data to Excel');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add timestamp to form data
    const dataWithTimestamp = {
      ...formData,
      timestamp: new Date().toISOString()
    };

    // Save to Excel
    saveToExcel(dataWithTimestamp);

    // Close modal and reset form
    toggleModal();
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
                Best Lead Generation Service in Anand
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-xl mb-6 font-medium ${
                  theme === 'dark' ? 'text-[#8BD7BB]' : 'text-gray-700'
                }`}
              >
                Unlock new opportunities and grow your customer base with our targeted lead generation strategies.
              </motion.p>
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
                src="https://cdn.iconscout.com/illustration/premium/thumb/business-growth-5693463-4753823.png"
                alt="Lead Generation Illustration"
                className={`w-full max-w-md rounded-2xl shadow-xl border ${
                  theme === 'dark'
                    ? 'border-gray-700 bg-gray-800/90'
                    : 'border-gray-200 bg-white/95'
                }`}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Lead generation Services follow a process. Section */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Our Lead generation Services follow a process.</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">As a business that generates leads for businesses, we use the following procedures:</p>
            <h3 className="text-xl font-semibold mb-3 text-primary-500 dark:text-secondary-500">Services Include:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                {/* Icon placeholder */}
                <span className="text-2xl">🔬</span>
                <span className="text-gray-700 dark:text-gray-300">Research and Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                 {/* Icon placeholder */}
                <span className="text-2xl">راتيجية</span>
                <span className="text-gray-700 dark:text-gray-300">Developing Strategy</span>
              </div>
              <div className="flex items-center space-x-2">
                 {/* Icon placeholder */}
                <span className="text-2xl">📝</span>
                <span className="text-gray-700 dark:text-gray-300">Content Creation & Implementation</span>
              </div>
              <div className="flex items-center space-x-2">
                 {/* Icon placeholder */}
                <span className="text-2xl"> nurturing</span>
                <span className="text-gray-700 dark:text-gray-300">Lead Nurturing</span>
              </div>
            </div>
          </div>
           {/* Placeholder for image/illustration */}
           <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder 412x400</span>
          </div>
        </div>

        {/* Why Choose us for Lead Generation Service Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
           <div className="md:w-1/2">
             <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Why Choose us for Lead Generation Service</h2>
             <p className="text-gray-700 dark:text-gray-300 mb-6">As the top Lead Generation Service, we are committed to increasing your sales, building brand recognition, and providing quality leads.</p>
             <button onClick={toggleModal} className={`px-6 py-2 border-2 rounded-lg font-semibold transition-colors ${buttonClass}`}>Get a proposal</button>
           </div>
           <div className="md:w-1/2">
             <ul className="space-y-4 text-gray-700 dark:text-gray-300">
               <li>
                 <h3 className="text-xl font-semibold text-primary-500 dark:text-secondary-500">CONSULTATIVE APPROACH:</h3>
                 <p>We place a high value on consultation, concentrating on customizing your goods and services to fit your unique requirements.</p>
               </li>
               <li>
                 <h3 className="text-xl font-semibold text-primary-500 dark:text-secondary-500">CONVERTIBLE LEADS:</h3>
                 <p>We provide your staff with sales-ready leads, allowing your team to close deals quickly and turn them into paying clients.</p>
               </li>
               <li>
                 <h3 className="text-xl font-semibold text-primary-500 dark:text-secondary-500">SKILLED TEAM:</h3>
                 <p>Our seasoned staff guarantees excellent service and outcomes by bringing experience from a variety of industries and global markets.</p>
               </li>
             </ul>
          </div>
        </div>

        {/* Industries We Serve Section */}
         <div className="mb-12">
          <div className="md:w-1/2 mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-primary-500 dark:text-secondary-500">Industries We Serve</h2>
            <p className="text-gray-700 dark:text-gray-300">Our skilled lead generation team has worked with a variety of industries like, Visa Consultancy Services, Education, Food, Healthcare, Loan and Finances.</p>
          </div>
        </div>

        {/* Advanced Lead Generation Strategies Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Advanced Lead Generation Strategies</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Our advanced lead generation strategies combine data-driven insights with targeted marketing approaches. We utilize sophisticated lead scoring models to identify and prioritize high-quality prospects, ensuring your sales team focuses on the most promising opportunities. Our multi-channel approach includes content marketing, email campaigns, social media engagement, and targeted advertising, creating multiple touchpoints to capture and nurture leads effectively.</p>
            <p className="text-gray-700 dark:text-gray-300">We implement automated lead nurturing workflows that deliver personalized content based on prospect behavior and interests. Our team continuously analyzes campaign performance, adjusting strategies to optimize conversion rates and ROI. Through A/B testing and data analysis, we refine our approaches to ensure maximum effectiveness. We also provide detailed reporting and analytics, giving you clear insights into your lead generation performance and opportunities for improvement.</p>
          </div>
          <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder: Lead Generation Dashboard</span>
          </div>
        </div>

        {/* Lead Quality and Conversion Optimization Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder: Conversion Funnel</span>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Lead Quality and Conversion Optimization</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">We focus on generating high-quality leads that are more likely to convert into customers. Our lead qualification process includes detailed profiling, behavior analysis, and intent scoring. We create targeted content and offers that address specific pain points and needs of your ideal customers. Through strategic landing page optimization and conversion rate optimization (CRO), we maximize the effectiveness of your lead generation efforts.</p>
            <p className="text-gray-700 dark:text-gray-300">Our team implements sophisticated lead nurturing campaigns that guide prospects through the sales funnel. We use marketing automation tools to deliver personalized content at the right time, building trust and moving prospects closer to conversion. We also provide comprehensive lead tracking and analytics, allowing you to measure the quality and ROI of your leads. Through continuous optimization and testing, we ensure your lead generation efforts deliver the highest possible return on investment.</p>
          </div>
        </div>

      </div>

      {/* Proposal Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-primary-500 dark:text-secondary-500">Request a Proposal</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Name:</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600" 
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600" 
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Message:</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button 
                  type="button" 
                  onClick={toggleModal} 
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${buttonClass}`}
                >
                  Close
                </button>
                <button 
                  type="submit" 
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${theme === 'dark' ? 'bg-[#8BD7BB] hover:bg-[#8BD7BB]/90' : 'bg-[#0E2A61] hover:bg-[#0E2A61]/90'} text-white`}
                >
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

export default LeadsGenerationPage; 