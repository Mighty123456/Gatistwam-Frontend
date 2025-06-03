import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import ServiceCard from '../../components/services/ServiceCard';
import Button from '../../components/ui/Button';
import { motion } from 'framer-motion';

interface ServiceDetail {
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

const hrServices: ServiceDetail[] = [
  {
    title: 'Entrepreneurship Development',
    description: 'Empower aspiring entrepreneurs with the knowledge and skills needed to build successful businesses. Our comprehensive training programs cover all aspects of business development and management.',
    benefits: [
      'Business planning and strategy',
      'Financial management skills',
      'Market analysis techniques',
      'Risk assessment methods',
      'Growth strategy development'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
  },
  {
    title: 'Business Planning & Strategy',
    description: 'Develop robust business plans and strategies that drive growth and success. Our experts help you create actionable plans aligned with your business goals and market opportunities.',
    benefits: [
      'Comprehensive business planning',
      'Market opportunity analysis',
      'Resource optimization',
      'Risk management strategies',
      'Growth roadmap development'
    ],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop'
  },
  {
    title: 'Financial Literacy & Accounting Basics',
    description: 'Build essential financial management skills for business success. Learn fundamental accounting principles, financial analysis, and budgeting techniques.',
    benefits: [
      'Basic accounting principles',
      'Financial statement analysis',
      'Budgeting and forecasting',
      'Cash flow management',
      'Tax planning basics'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop'
  },
  {
    title: 'HR Management & Recruitment Training',
    description: 'Master the art of human resource management and effective recruitment. Learn best practices for hiring, training, and retaining top talent.',
    benefits: [
      'Recruitment best practices',
      'Employee development',
      'Performance management',
      'HR policy development',
      'Compliance training'
    ],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=400&fit=crop'
  },
  {
    title: 'Business Communication Skills',
    description: 'Enhance your professional communication skills for better business outcomes. Learn effective communication strategies for various business scenarios.',
    benefits: [
      'Professional writing skills',
      'Presentation techniques',
      'Negotiation strategies',
      'Conflict resolution',
      'Cross-cultural communication'
    ],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop'
  },
  {
    title: 'Project Management (Agile, Scrum)',
    description: 'Master modern project management methodologies. Learn Agile and Scrum frameworks to deliver projects efficiently and effectively.',
    benefits: [
      'Agile methodology training',
      'Scrum framework implementation',
      'Project planning tools',
      'Team collaboration techniques',
      'Risk management strategies'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
  }
];

const HRSolutions: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
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
              whileHover={{ scale: 1.025, boxShadow: theme === 'dark' ? '0 8px 32px 0 rgba(34, 197, 94, 0.15)' : '0 8px 32px 0 rgba(0, 0, 0, 0.1)' }}
              className={`${
                theme === 'dark' 
                  ? 'bg-gray-800/90 backdrop-blur-md text-gray-100' 
                  : 'bg-white/95 backdrop-blur-md text-gray-900'
              } rounded-3xl shadow-2xl p-10 md:p-14 transition-transform duration-300`}
            >
              {/* Floating badge/icon */}
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="inline-block mb-4"
              >
                <span className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${
                  theme === 'dark' 
                    ? 'bg-[#8BD7BB]/90 shadow-lg ring-4 ring-gray-800' 
                    : 'bg-primary-600/90 shadow-lg ring-4 ring-white'
                }`}>
                  <svg className={`w-8 h-8 ${
                    theme === 'dark' ? 'text-[#8BD7BB]' : 'text-white'
                  }`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Comprehensive HR Solutions & Professional Training
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-xl mb-6 font-medium ${
                  theme === 'dark' ? 'text-[#8BD7BB]' : 'text-primary-600'
                }`}
              >
                Empower your workforce with expert HR solutions and comprehensive training programs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`space-y-5 text-base md:text-lg mb-8 ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                }`}
              >
                <p>
                  Our HR solutions and training programs are designed to help organizations build high-performing teams and develop essential business skills. We combine industry expertise with innovative learning approaches to deliver measurable results.
                </p>
                <p>
                  From entrepreneurship development to project management, our comprehensive suite of training programs addresses the unique needs of modern businesses. We work closely with you to understand your goals and develop tailored solutions that drive success.
                </p>
                <p>
                  With TechMatrick's HR solutions, you gain access to proven methodologies, expert trainers, and cutting-edge tools to transform your workforce and achieve organizational excellence.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button 
                  variant={theme === 'dark' ? 'primary' : 'primary'} 
                  size="lg" 
                  to="/contact"
                  className={theme === 'dark' ? 'bg-primary-500 hover:bg-primary-600' : 'bg-primary-600 hover:bg-primary-700'}
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
                src="https://cdn.iconscout.com/illustration/premium/thumb/human-resources-management-5693463-4753823.svg"
                alt="HR Solutions Illustration"
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

      {/* Main Content */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {hrServices.map((service, idx) => (
            <ServiceCard
              key={idx} 
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              image={service.image}
            />
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-secondary-500 dark:to-secondary-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Develop Your Team?
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our HR solutions and training programs can help your organization thrive.
          </p>
          <button className="bg-white text-primary-600 dark:text-secondary-600 hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-colors text-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HRSolutions; 