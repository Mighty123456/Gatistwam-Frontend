import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedElement from '../ui/AnimatedElement';
import Button from '../ui/Button';
import axios from 'axios';

interface PortfolioItem {
  _id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  client: string;
  completionDate: string;
  technologies: string[];
  status: 'published' | 'draft';
  liveUrl?: string;
  githubUrl?: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://gatistwam-backend.onrender.com';

const PortfolioSection: React.FC = () => {
  const [projects, setProjects] = useState<PortfolioItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/portfolio/status/published`);
        setProjects(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching portfolio items:', err);
        setError('Failed to load portfolio items');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Get unique categories from projects
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  if (isLoading) {
    return (
      <section id="portfolio" className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="portfolio" className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center text-red-500">
            {error}
          </div>
        </div>
      </section>
    );
  }

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedElement key={project._id}>
              <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src={project.imageUrl.startsWith('/uploads/') ? `${API_BASE_URL}${project.imageUrl}` : project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9Ijc1IiB5PSI3NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2UgRXJyb3I8L3RleHQ+PC9zdmc+';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary-500 dark:text-secondary-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;