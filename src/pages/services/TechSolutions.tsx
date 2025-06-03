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

const techServices: ServiceDetail[] = [
  {
    title: 'Software Development',
    description: 'Build custom software solutions tailored to your business needs. From web applications to enterprise software, we deliver scalable and secure solutions.',
    benefits: [
      'Custom software development',
      'Web application development',
      'Mobile app development',
      'API integration',
      'Cloud solutions'
    ],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop'
  },
  {
    title: 'IT Infrastructure Management',
    description: 'Optimize your IT infrastructure with our comprehensive management services. We ensure your technology systems run efficiently and securely.',
    benefits: [
      'Network management',
      'System administration',
      'Performance optimization',
      'Disaster recovery',
      'IT support services'
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop'
  }
];

const TechSolutions: React.FC = () => {
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
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
                Social media strategy that makes your audience want to follow & engage with your brand.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-xl mb-6 font-medium ${
                  theme === 'dark' ? 'text-[#8BD7BB]' : 'text-primary-600'
                }`}
              >
                When you build an authentic relationship with your prospects, they'll choose you without thinking twice.
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
                  Social media is considered the second-most effective form of digital marketing, yet more than one-third of businesses have no social media presence at all. This is largely due to small businesses not having the time or resources to invest in social media marketing.
                </p>
                <p>
                  Social media offers a way to directly engage with your target audience and nurture them into becoming your ideal customers. Through it, you can build an online community, expand your customer reach, boost your brand and location's reputation, and collaborate with other industry experts in a way that humanizes you and your team. Thus, helping build genuine and strong business relationships with your patrons.
                </p>
                <p>
                  Let TechMatrick's Social Media Management experts drive your social media efforts to help increase followers, maximize brand awareness and gain revenue. Our experienced team can turn your business vision into a cohesive social persona for your brand. As an intelligence-based digital marketing firm, we have the tools in place to allow us to find, join, and influence your company's ideal customer base. We work tirelessly to ensure that your company is always part of the best conversations and sees measurable online and revenue growth as a result of properly influencing communities.
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
                src="https://cdn.iconscout.com/illustration/premium/thumb/social-media-strategy-5693462-4753822.svg"
                alt="Social Media Strategy Illustration"
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
          {techServices.map((service, idx) => (
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
        <div className="mt-20 text-center">
          <h2 className={`text-3xl font-bold mb-6 ${
            theme === 'dark' ? 'text-secondary-400' : 'text-primary-600'
          }`}>
            Ready to Transform Your Technology?
          </h2>
          <p className={`text-xl mb-8 max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Contact us today to discuss how our technology solutions can help your business thrive in the digital age.
          </p>
          <button
            className={`px-8 py-3 rounded-lg font-semibold text-white transition-colors ${
              theme === 'dark'
                ? 'bg-secondary-500 hover:bg-secondary-600'
                : 'bg-primary-600 hover:bg-primary-700'
            }`}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechSolutions; 