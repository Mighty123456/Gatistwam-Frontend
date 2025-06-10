import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';

// Import images from assets
import slider1 from '../../assets/images/Digital Branding/digital-branding.jpg';
import slider2 from '../../assets/images/Digital Branding/tech-solutions.png';
import slider3 from '../../assets/images/Digital Branding/graphic-design.jpg';
import slider4 from '../../assets/images/Digital Branding/hr-solutions.jpg';
import slider5 from '../../assets/images/Digital Branding/academy.jpeg';
import slider6 from '../../assets/images/Digital Branding/ecommerce-support.webp';
import slider7 from '../../assets/images/Digital Branding/research.jpg';
import slider8 from '../../assets/images/Digital Branding/management-solutions.avif';

const services = [
  {
    title: 'Digital Branding',
    description: 'Crafting compelling brand identities that resonate with your audience and drive business growth',
    link: '/services/digital-branding',
    image: slider1
  },
  {
    title: 'Tech Solutions',
    description: 'Innovative technology solutions that transform your business operations and drive digital success',
    link: '/services/tech-solutions',
    image: slider2
  },
  {
    title: 'Graphics Design',
    description: 'Creative and professional design solutions that make your brand stand out in the digital landscape',
    link: '/services/graphic-design',
    image: slider3
  },
  {
    title: 'HR Solutions',
    description: 'Comprehensive HR management and consulting services for organizational excellence and growth',
    link: '/services/hr-solutions',
    image: slider4
  },
  {
    title: 'Academy',
    description: 'Professional training and skill development programs for career advancement and success',
    link: '/services/academy',
    image: slider5
  },
  {
    title: 'Ecommerce Support',
    description: 'End-to-end ecommerce solutions and support for online business success and growth',
    link: '/services/ecommerce-support',
    image: slider6
  },
  {
    title: 'Research',
    description: 'Data-driven research and market analysis for informed business decisions and strategy',
    link: '/services/research',
    image: slider7
  },
  {
    title: 'Management Solutions',
    description: 'Strategic business management and consulting for sustainable growth and success',
    link: '/services/management-solutions',
    image: slider8
  }
];

const HeroSection: React.FC = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative min-h-screen flex flex-col justify-center ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br ${
            theme === 'dark' ? 'from-[#8BD7BB]/10' : 'from-gray-200/10'
          } to-transparent rounded-full blur-3xl opacity-50`}
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [45, 0, 45],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl ${
            theme === 'dark' ? 'from-[#8BD7BB]/10' : 'from-gray-200/10'
          } to-transparent rounded-full blur-3xl opacity-50`}
        />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 pt-20 pb-20 md:pt-0 md:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left content */}
          <div className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentServiceIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Service Badge */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${
                      theme === 'dark' ? 'bg-[#8BD7BB]/10' : 'bg-[#0E2A61]/10'
                    } mb-8 backdrop-blur-sm border ${
                      theme === 'dark' ? 'border-[#8BD7BB]/20' : 'border-[#0E2A61]/20'
                    }`}
                  >
                    <span className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-[#8BD7BB]' : 'text-[#0E2A61]'
                    }`}>Featured Service</span>
                  </motion.div>

                  {/* Service Title */}
                  <motion.h1
                    className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-8 ${
                      theme === 'dark' ? 'text-[#8BD7BB]' : 'text-[#0E2A61]'
                    } leading-[1.1] tracking-tight`}
                  >
                    {services[currentServiceIndex].title}
                  </motion.h1>

                  {/* Solutions Text */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center gap-4 mb-12"
                  >
                    <div className={`h-px w-16 bg-gradient-to-r ${
                      theme === 'dark' ? 'from-[#8BD7BB]/20' : 'from-[#0E2A61]/20'
                    } to-transparent`} />
                    <span className={`text-2xl font-medium ${
                      theme === 'dark' ? 'text-[#8BD7BB]/60' : 'text-[#0E2A61]/60'
                    }`}>Solutions</span>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <p className={`text-xl ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-700'
              } leading-relaxed max-w-xl font-light`}>
                {services[currentServiceIndex].description}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <Button 
                variant="primary" 
                to={services[currentServiceIndex].link}
                size="lg"
                className={`group relative overflow-hidden ${
                  theme === 'dark' ? 'bg-[#8BD7BB] hover:bg-[#8BD7BB]/90' : 'bg-[#0E2A61] hover:bg-[#0E2A61]/90'
                } transition-all duration-300`}
              >
                <span className="relative z-10 flex items-center gap-2 text-white">
                  Explore Service
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
              <Button 
                variant="outline" 
                to="/contact"
                size="lg"
                className={`group relative overflow-hidden ${
                  theme === 'dark' 
                    ? 'border-[#8BD7BB]/20 text-[#8BD7BB] hover:bg-[#8BD7BB]/5' 
                    : 'border-[#0E2A61]/20 text-[#0E2A61] hover:bg-[#0E2A61]/5'
                } backdrop-blur-sm`}
                icon={<ArrowRight className="transition-transform group-hover:translate-x-1" />}
                iconPosition="right"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
          
          {/* Right content - Animated illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <motion.div
                key={currentServiceIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Main Image Container */}
                <div className={`w-full aspect-[4/3] rounded-3xl overflow-hidden ${
                  theme === 'dark' ? 'bg-[#8BD7BB]/20' : 'bg-[#0E2A61]/20'
                } p-[2px] shadow-2xl`}>
                  <div className={`w-full h-full ${
                    theme === 'dark' ? 'bg-[#0A0A0A]' : 'bg-white'
                  } rounded-[22px] overflow-hidden backdrop-blur-sm`}>
                    <img 
                      src={services[currentServiceIndex].image}
                      alt={services[currentServiceIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${
                      theme === 'dark' ? 'from-[#8BD7BB]/10' : 'from-[#0E2A61]/10'
                    }`} />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -top-6 -right-6 w-32 h-32 ${
                  theme === 'dark' ? 'bg-[#8BD7BB]/10' : 'bg-[#0E2A61]/10'
                } rounded-full blur-2xl opacity-50`} />
                <div className={`absolute -bottom-6 -left-6 w-40 h-40 ${
                  theme === 'dark' ? 'bg-[#8BD7BB]/10' : 'bg-[#0E2A61]/10'
                } rounded-full blur-2xl opacity-50`} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center ${
          theme === 'dark' ? 'text-[#8BD7BB]/40' : 'text-[#0E2A61]/40'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <span className="text-sm mb-2 font-medium tracking-wider">SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className={`w-6 h-10 border rounded-full flex justify-center ${
            theme === 'dark' ? 'border-[#8BD7BB]/20' : 'border-[#0E2A61]/20'
          }`}>
            <div className={`w-1 h-2 rounded-full mt-2 ${
              theme === 'dark' ? 'bg-[#8BD7BB]/40' : 'bg-[#0E2A61]/40'
            }`}></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;