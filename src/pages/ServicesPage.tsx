import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { 
  FaChartLine, 
  FaPalette, 
  FaUsers, 
  FaSearch, 
  FaGraduationCap, 
  FaLaptopCode, 
  FaShoppingCart, 
  FaHandshake, 
  FaGlobe,
  FaArrowRight
} from 'react-icons/fa';

const serviceCategories = [
  {
    category: 'Digital Branding',
    slug: 'digital-branding',
    services: [
      'Search Engine Optimization',
      'Social Media Marketing',
      'Google Ads & PPC',
      'Leads Generation',
      'Influencer Marketing',
    ],
  },
  {
    category: 'Tech Solutions',
    slug: 'tech-solutions',
    services: [
      'Software Development',
      'IT Infrastructure Management',
      'Cloud Solutions',
      'Cybersecurity Services',
      'Digital Transformation',
    ],
  },
  {
    category: 'Research',
    slug: 'research',
    services: [
      'Market Research & Consumer Insights',
      'Business Feasibility & Industry Analysis',
      'Competitor & SWOT Analysis',
      'Data Analysis & Visualization',
      'Custom Research Projects',
    ],
  },
  {
    category: 'Management Solutions',
    slug: 'management-solutions',
    services: [
      'Business Strategy & Planning',
      'Branding & Marketing Consultancy',
      'Technology & Digital Transformation',
      'Startup & SME Support Services',
      'Process Improvement & Operations Management',
    ],
  },
  {
    category: 'Academy',
    slug: 'academy',
    services: [
      'All-in-One Training',
      'Practical Skillsets',
      'Career-Focused Learning',
      'Expert Certification',
      'Trending Add-ons',
    ],
  },
  {
    category: 'E-commerce Support',
    slug: 'ecommerce-support',
    services: [
      'E-commerce Platform Development',
      'Shopping Cart Integration',
      'Payment Gateway Setup',
      'Inventory Management',
      'Order Processing System',
    ],
  },
  {
    category: 'HR Solutions',
    slug: 'hr-solutions',
    services: [
      'Entrepreneurship Development',
      'Business Planning & Strategy',
      'Financial Literacy & Accounting Basics',
      'HR Management & Recruitment Training',
      'Business Communication Skills',
      'Project Management (Agile, Scrum)',
    ],
  },
  {
    category: 'Graphic Design',
    slug: 'graphic-design',
    services: [
      'Logo & Brand Identity Design',
      'Social Media Post Design',
      'Business Cards & Stationery',
      'Brochure & Flyer Design',
      'Packaging & Label Design',
      'Motion Graphics',
    ],
  },
];

const categoryIcons = [
  <FaChartLine className="w-12 h-12" />,
  <FaLaptopCode className="w-12 h-12" />,
  <FaSearch className="w-12 h-12" />,
  <FaChartLine className="w-12 h-12" />,
  <FaGraduationCap className="w-12 h-12" />,
  <FaShoppingCart className="w-12 h-12" />,
  <FaUsers className="w-12 h-12" />,
  <FaPalette className="w-12 h-12" />,
];

const ServicesPage: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 py-20">
      <div className="container-custom mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover our comprehensive range of professional services designed to help your business thrive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((cat, idx) => (
            <div 
              key={cat.category}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative p-8">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="relative text-4xl text-primary-500 dark:text-secondary-500 transform group-hover:scale-110 transition-transform duration-500">
                    {categoryIcons[idx % categoryIcons.length]}
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-secondary-500 transition-colors duration-300">
                  {cat.category}
                </h2>

                {/* Services List */}
                <ul className="space-y-3 mb-8">
                  {cat.services.map((service, sidx) => (
                    <li 
                      key={sidx}
                      className="flex items-center text-gray-600 dark:text-gray-400 group/item"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-secondary-500 mr-3 transform group-hover/item:scale-150 transition-transform duration-300" />
                      <span className="group-hover/item:text-primary-500 dark:group-hover/item:text-secondary-500 transition-colors duration-300">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <Link
                  to={`/services/${cat.slug}`}
                  className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold transform group-hover:scale-[1.02] transition-all duration-300 hover:shadow-lg"
                >
                  <span className="mr-2">Explore Services</span>
                  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-secondary-500/20 to-primary-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 