import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import ServiceCard from '../../components/services/ServiceCard';

interface ServiceDetail {
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

const researchServices: ServiceDetail[] = [
  {
    title: 'Market Research',
    description: 'Gain valuable insights into your target market with our comprehensive market research services. We help you understand your customers, competitors, and market trends.',
    benefits: [
      'Competitive analysis',
      'Customer behavior insights',
      'Market trend identification',
      'Demographic research',
      'Industry benchmarking'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop'
  },
  {
    title: 'Data Analysis',
    description: 'Transform raw data into actionable insights with our expert data analysis services. We help you make informed decisions based on solid data.',
    benefits: [
      'Statistical analysis',
      'Data visualization',
      'Predictive modeling',
      'Performance metrics',
      'Custom reporting'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop'
  }
];

const Research: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[#0E2A61]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Research Services
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Make data-driven decisions with our comprehensive research services. From market analysis to custom research projects, we provide the insights you need to succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {researchServices.map((service, idx) => (
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
          <h2 className="text-3xl font-bold mb-6 text-primary-500 dark:text-secondary-500">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our research services can help your business grow and succeed.
          </p>
          <button
            className={`px-8 py-3 rounded-lg font-semibold text-white transition-colors ${
              theme === 'light'
                ? 'bg-primary-500 hover:bg-primary-600'
                : 'bg-secondary-500 hover:bg-secondary-600'
            }`}
          >
            Contact Us
          </button>
        </div>
    </div>
  </div>
);
};

export default Research; 