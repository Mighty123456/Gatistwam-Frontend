import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import * as XLSX from 'xlsx';
import { toast } from 'react-hot-toast';

const LeadsGenerationPage: React.FC = () => {
  const { theme } = useTheme();
  const buttonClass = theme === 'light'
    ? 'border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
    : 'border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white';

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-20">
      <div className="container-custom mx-auto px-4">
        {/* Best Lead Generation Service in Anand Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-500 dark:text-secondary-500">Best Lead Generation Service in Anand</h1>
            <p className="text-gray-700 dark:text-gray-300">Increase your sales with our proven methods to identify high-quality, relevant leads. Our time-tested best practices ensure you attract sales-ready prospects, driving significant growth and maximizing your revenue. Start converting more leads into customers today!</p>
          </div>
          {/* Placeholder for image/illustration */}
          <div className="md:w-1/2 bg-gray-300 dark:bg-gray-700 h-64 flex items-center justify-center rounded-lg">
            <span className="text-gray-600 dark:text-gray-400 text-xl">Image Placeholder 740x782</span>
          </div>
        </div>

        {/* Our Lead generation Services follow a process. Section */}
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
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors bg-primary-500 text-white hover:bg-primary-600 dark:bg-secondary-500 dark:hover:bg-secondary-600`}
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