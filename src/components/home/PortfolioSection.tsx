import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedElement from '../ui/AnimatedElement';
import Button from '../ui/Button';

// Portfolio data
const projects = [
  {
    id: 1,
    title: 'E-commerce Growth Strategy',
    category: 'Social Media',
    description: 'Increased online sales by 200% through targeted social media campaigns and influencer partnerships.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Brand Awareness Campaign',
    category: 'Content Marketing',
    description: 'Created engaging content that increased brand awareness and audience engagement for a tech startup.',
    image: 'https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'SEO Optimization Project',
    category: 'SEO',
    description: 'Improved search rankings and organic traffic through comprehensive SEO strategy implementation.',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'PPC Advertising Campaign',
    category: 'PPC',
    description: 'Optimized ad spend and increased conversion rates through strategic PPC campaign management.',
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

// Categories
const categories = [
  'All',
  ...Array.from(new Set(projects.map(project => project.category))),
];

const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <AnimatedElement className="text-center mb-16">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle mx-auto">
            Explore some of our recent projects and success stories.
          </p>
        </AnimatedElement>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-primary-500 dark:bg-secondary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedElement key={project.id} delay={index * 100}>
              <motion.div 
                className="card group overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project image with overlay */}
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      variant="secondary"
                      to={`/portfolio/${project.id}`}
                      icon={<ExternalLink size={18} />}
                    >
                      View Project
                    </Button>
                  </div>
                </div>
                
                {/* Project info */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-300">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary-600 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedElement>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="primary" 
            to="/portfolio"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;