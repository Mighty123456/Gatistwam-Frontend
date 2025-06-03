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

const academyServices: ServiceDetail[] = [
  {
    title: 'Professional Development Programs',
    description: 'Enhance your professional skills with our comprehensive development programs. We offer specialized training in various business and technical domains to help you advance your career.',
    benefits: [
      'Industry-recognized certifications',
      'Expert-led training sessions',
      'Practical hands-on experience',
      'Career advancement support',
      'Networking opportunities'
    ],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop'
  },
  {
    title: 'Technical Skills Training',
    description: 'Master essential technical skills with our specialized training programs. From software development to data analysis, we provide comprehensive technical education.',
    benefits: [
      'Programming languages',
      'Software development tools',
      'Database management',
      'Cloud computing',
      'DevOps practices'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop'
  },
  {
    title: 'Business & Management Courses',
    description: 'Develop your business acumen with our management-focused courses. Learn essential business skills and management techniques from industry experts.',
    benefits: [
      'Business strategy',
      'Project management',
      'Leadership skills',
      'Financial management',
      'Marketing fundamentals'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
  },
  {
    title: 'Soft Skills Development',
    description: 'Enhance your interpersonal and communication skills through our soft skills training programs. Develop the essential skills needed for professional success.',
    benefits: [
      'Communication skills',
      'Team collaboration',
      'Problem-solving',
      'Time management',
      'Emotional intelligence'
    ],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop'
  },
  {
    title: 'Corporate Training Solutions',
    description: 'Customized training programs designed for organizations. We develop tailored solutions to address your specific business needs and employee development goals.',
    benefits: [
      'Custom curriculum design',
      'On-site training',
      'Virtual learning options',
      'Progress tracking',
      'Performance assessment'
    ],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop'
  }
];

const Academy: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
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
                  ? 'bg-gray-800/80 backdrop-blur-md' 
                  : 'bg-white/80 backdrop-blur-md'
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
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
                Professional Development & Training Academy
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-xl mb-6 font-medium ${
                  theme === 'dark' ? 'text-[#8BD7BB]' : 'text-[#8BD7BB]'
                }`}
              >
                Advance your career with expert-led training programs and professional development courses.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`space-y-5 text-base md:text-lg mb-8 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                <p>
                  Our academy offers comprehensive training programs designed to help professionals excel in their careers. We combine industry expertise with innovative learning approaches to deliver measurable results.
                </p>
                <p>
                  From technical skills to soft skills, our diverse range of courses addresses the unique needs of modern professionals. We work closely with you to understand your goals and develop tailored learning paths that drive success.
                </p>
                <p>
                  With TechMatrick's academy, you gain access to expert instructors, cutting-edge curriculum, and practical learning experiences to transform your career and achieve professional excellence.
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
                src="https://cdn.iconscout.com/illustration/premium/thumb/online-learning-5693465-4753825.svg"
                alt="Academy Illustration"
                className={`w-full max-w-md rounded-2xl shadow-xl border ${
                  theme === 'dark' 
                    ? 'border-gray-700 bg-gray-800/70' 
                    : 'border-gray-200 bg-white/70'
                }`}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {academyServices.map((service, idx) => (
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
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our academy can help you achieve your educational goals.
          </p>
          <button className="bg-white text-primary-600 dark:text-secondary-600 hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-colors text-lg">
            Get Started
          </button>
        </div>
    </div>
  </div>
);
};

export default Academy; 