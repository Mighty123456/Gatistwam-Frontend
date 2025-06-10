import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import ServiceCard from '../../components/services/ServiceCard';
import Button from '../../components/ui/Button';
import { motion } from 'framer-motion';
import webDevHero from '../../assets/images/Digital Branding/Web Development/web-dev.jpg';
import webServices from '../../assets/images/Digital Branding/Web Development/web-development-services.webp';
import customSolutions from '../../assets/images/Digital Branding/Web Development/custom-web-solution.jpg';
import webTech from '../../assets/images/Digital Branding/Web Development/web-technologies.png';

interface ServiceOffering {
  name: string;
  icon: string;
  description: string;
  link: string;
  image: string;
}

const webDevelopmentOfferings: ServiceOffering[] = [
  { 
    name: 'Custom Web Development', 
    icon: '💻', 
    description: 'Tailored web solutions built from scratch to meet your specific business needs.', 
    link: '#',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop'
  },
  { 
    name: 'E-commerce Solutions', 
    icon: '🛍️', 
    description: 'Powerful online stores with secure payment gateways and inventory management.', 
    link: '#',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop'
  },
  { 
    name: 'Web Applications', 
    icon: '⚡', 
    description: 'Dynamic web applications that streamline your business processes.', 
    link: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'
  },
  { 
    name: 'CMS Development', 
    icon: '📝', 
    description: 'User-friendly content management systems for easy website updates.', 
    link: '#',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop'
  },
];

const WebDevelopmentPage: React.FC = () => {
  const { theme } = useTheme();
  const buttonClass = theme === 'light'
    ? 'border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
    : 'border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white';

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
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              >
                Transform Your Digital Presence with Custom Web Development
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-xl mb-6 font-medium ${theme === 'dark' ? 'text-[#8BD7BB]' : 'text-primary-600'}`}
              >
                Build powerful, scalable, and user-friendly web solutions that drive business growth.
              </motion.p>
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 className={`space-y-5 text-base md:text-lg mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
              >
                <p>
                  Our expert team of web developers creates custom solutions that perfectly align with your business goals. 
                  From responsive websites to complex web applications, we deliver high-performance digital solutions that 
                  engage users and drive results.
                </p>
                <p>
                  We leverage cutting-edge technologies and best practices to build scalable, secure, and maintainable 
                  web applications. Our development process is transparent and collaborative, ensuring your vision is 
                  realized exactly as intended.
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
                  onClick={() => { /* Add modal toggle or navigation logic here */ alert('Get Free Consultation clicked!'); }}
                  className={theme === 'dark' ? 'bg-[#8BD7BB] hover:bg-[#8BD7BB]/90' : 'bg-[#0E2A61] hover:bg-[#0E2A61]/90'}
                >
                  Get Free Consultation
                </Button>
              </motion.div>
            </motion.div>
            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
              className="flex justify-center items-center"
            >
              <img
                src={webDevHero}
                alt="Web Development"
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

      {/* Services Section */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-500 dark:text-secondary-500">Our Web Development Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {webDevelopmentOfferings.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.name}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Modern Technology Stack</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use cutting-edge technologies and frameworks to build robust and scalable web applications. 
              Our tech stack includes React, Node.js, Python, and more, ensuring your web solution is built 
              with the best tools available.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Our development process follows industry best practices and standards, resulting in clean, 
              maintainable, and high-performance code. We implement modern security measures and optimize 
              for speed and user experience.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={webTech}
              alt="Web Technologies"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          </div>
        </div>

      {/* Custom Solutions Section */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <img
              src={customSolutions}
              alt="Custom Web Solutions"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Custom Web Solutions</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Every business is unique, and your web solution should reflect that. We create custom web 
              applications tailored to your specific needs, ensuring they align perfectly with your business 
              goals and user requirements.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Our team works closely with you throughout the development process, from initial planning to 
              final deployment. We ensure your web solution is not just functional but also scalable, 
              secure, and future-proof.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage; 