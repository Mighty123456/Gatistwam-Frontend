import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedElement from '../ui/AnimatedElement';
import Button from '../ui/Button';

const AboutSection: React.FC = () => {
  // Features list
  const features = [
    "Strategic marketing solutions tailored to your business",
    "Data-driven approach for measurable results",
    "Creative team of industry experts",
    "Transparent communication and reporting",
    "Continuous optimization and improvement"
  ];

  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="About Gatistwam" 
                className="rounded-lg shadow-xl object-cover"
              />
              
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary-500 rounded-full blur-sm opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-500 rounded-full blur-sm opacity-50"></div>
            </div>
          </motion.div>
          
          {/* Right side - Content */}
          <div>
            <AnimatedElement>
              <h2 className="section-title">Who We Are</h2>
              <p className="section-subtitle">
                Gatistwam is a full-service digital marketing agency dedicated to helping businesses achieve growth and success in the digital landscape.
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Founded with a passion for innovation and results, we combine strategic thinking with creative execution to deliver marketing solutions that drive real business growth. Our team of experts is committed to understanding your unique challenges and opportunities.
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={300}>
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="text-secondary-500 dark:text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </AnimatedElement>
            
            <AnimatedElement delay={400}>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary" 
                  to="/about"
                >
                  Learn More About Us
                </Button>
                <Button 
                  variant="outline" 
                  to="/contact"
                >
                  Contact Us
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;