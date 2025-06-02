import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Filter, X, ExternalLink } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Growth Strategy',
    category: 'Digital Marketing',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Helped an e-commerce store achieve 200% revenue growth in 6 months through comprehensive digital marketing strategies.',
    challenges: [
      'Low conversion rates',
      'Limited brand awareness',
      'Ineffective social media presence'
    ],
    solutions: [
      'Implemented targeted PPC campaigns',
      'Developed engaging social media content',
      'Optimized website for better user experience'
    ],
    results: [
      '200% increase in revenue',
      '150% growth in social media followers',
      '300% improvement in conversion rate'
    ],
    client: 'Fashion Retailer',
    duration: '6 months'
  },
  {
    id: 2,
    title: 'Brand Awareness Campaign',
    category: 'Social Media',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Increased brand awareness by 300% through targeted social media campaigns and influencer partnerships.',
    challenges: [
      'Low brand recognition',
      'Limited social media engagement',
      'Inconsistent brand messaging'
    ],
    solutions: [
      'Created viral social media campaigns',
      'Partnered with industry influencers',
      'Developed consistent brand guidelines'
    ],
    results: [
      '300% increase in brand awareness',
      '500% growth in social media engagement',
      '200% increase in website traffic'
    ],
    client: 'Tech Startup',
    duration: '4 months'
  },
  {
    id: 3,
    title: 'SEO Success Story',
    category: 'SEO',
    image: 'https://images.pexels.com/photos/3183155/pexels-photo-3183155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Improved organic traffic by 150% through comprehensive SEO strategy and content optimization.',
    challenges: [
      'Poor search engine rankings',
      'Low organic traffic',
      'Outdated content'
    ],
    solutions: [
      'Conducted comprehensive SEO audit',
      'Created SEO-optimized content',
      'Improved website structure'
    ],
    results: [
      '150% increase in organic traffic',
      'Top 10 rankings for key keywords',
      '200% growth in qualified leads'
    ],
    client: 'B2B Service Provider',
    duration: '8 months'
  },
  {
    id: 4,
    title: 'PPC Campaign Optimization',
    category: 'PPC',
    image: 'https://images.pexels.com/photos/3183158/pexels-photo-3183158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Optimized ad spend and increased conversion rates through strategic PPC campaign management.',
    challenges: [
      'High cost per acquisition',
      'Low conversion rates',
      'Inefficient ad spend'
    ],
    solutions: [
      'Implemented advanced targeting',
      'Optimized landing pages',
      'Refined ad copy and creative'
    ],
    results: [
      '50% reduction in cost per acquisition',
      '200% increase in conversion rate',
      '300% ROI on ad spend'
    ],
    client: 'E-commerce Platform',
    duration: '3 months'
  }
];

const categories = ['All', ...Array.from(new Set(caseStudies.map(study => study.category)))];

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof caseStudies[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = selectedCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: typeof caseStudies[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageHeader 
        title="Our Portfolio"
        subtitle="Explore our successful digital marketing campaigns and see how we've helped businesses achieve their goals."
        bgImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Category Filter */}
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md py-4">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Filter Projects</h2>
            <div className="flex gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-500 dark:bg-secondary-500 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 dark:bg-secondary-500 text-white px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary-500 dark:text-secondary-500">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Duration: {project.duration}
                    </span>
                    <button className="text-primary-500 dark:text-secondary-500 hover:text-primary-600 dark:hover:text-secondary-400 font-semibold inline-flex items-center transition-colors duration-200">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsModalOpen(false)} />
            <div className="relative min-h-screen flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-primary-500 dark:text-secondary-500">
                    Project Details
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 dark:bg-secondary-500 text-white hover:bg-primary-600 dark:hover:bg-secondary-400 transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                    <span>Close</span>
                  </button>
                </div>
                <div className="relative h-64 md:h-96">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary-500 dark:bg-secondary-500 text-white px-3 py-1 rounded-full text-sm">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-500 dark:text-secondary-500">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedProject.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Client</h3>
                      <p className="text-gray-600 dark:text-gray-300">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Duration</h3>
                      <p className="text-gray-600 dark:text-gray-300">{selectedProject.duration}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Category</h3>
                      <p className="text-gray-600 dark:text-gray-300">{selectedProject.category}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Challenges</h3>
                      <ul className="space-y-2">
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-primary-500 dark:bg-secondary-500 rounded-full mt-2 mr-2" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Solutions</h3>
                      <ul className="space-y-2">
                        {selectedProject.solutions.map((solution, index) => (
                          <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-primary-500 dark:bg-secondary-500 rounded-full mt-2 mr-2" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Results</h3>
                      <ul className="space-y-2">
                        {selectedProject.results.map((result, index) => (
                          <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-primary-500 dark:bg-secondary-500 rounded-full mt-2 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPage; 