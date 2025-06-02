import React from 'react';
import { Search, BarChart3, PenTool, Share2, Mail, LayoutGrid } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedElement from '../ui/AnimatedElement';
import Button from '../ui/Button';

// Services data
const services = [
  {
    id: 1,
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and increase organic traffic to your website.',
    icon: <Search className="text-secondary-500 w-12 h-12" />,
  },
  {
    id: 2,
    title: 'Content Marketing',
    description: 'Create compelling content that engages your audience and establishes your brand authority.',
    icon: <PenTool className="text-secondary-500 w-12 h-12" />,
  },
  {
    id: 3,
    title: 'Social Media Management',
    description: 'Build and manage your social media presence to connect with your audience effectively.',
    icon: <Share2 className="text-secondary-500 w-12 h-12" />,
  },
  {
    id: 4,
    title: 'Email Marketing',
    description: 'Develop effective email campaigns that nurture leads and drive conversions.',
    icon: <Mail className="text-secondary-500 w-12 h-12" />,
  },
  {
    id: 5,
    title: 'Analytics & Reporting',
    description: 'Track, analyze, and optimize your marketing performance with comprehensive reporting.',
    icon: <BarChart3 className="text-secondary-500 w-12 h-12" />,
  },
  {
    id: 6,
    title: 'Web Design & Development',
    description: 'Create stunning, functional websites that convert visitors into customers.',
    icon: <LayoutGrid className="text-secondary-500 w-12 h-12" />,
  },
];

const ServicesSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="services" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <AnimatedElement className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            We offer a comprehensive range of digital marketing services to help your business grow.
          </p>
        </AnimatedElement>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="glass-card group hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-primary-900/20 transition-all duration-300"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-500 dark:text-secondary-500">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-5">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button 
            variant="primary" 
            to="/services"
            size="lg"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;