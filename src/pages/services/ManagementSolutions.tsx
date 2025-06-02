import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import ServiceCard from '../../components/services/ServiceCard';

interface ServiceDetail {
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

const managementServices: ServiceDetail[] = [
  {
    title: 'Strategic Planning',
    description: 'Develop a clear roadmap for your business success with our strategic planning services. We help you define goals, identify opportunities, and create actionable strategies.',
    benefits: [
      'Business goal setting',
      'Market opportunity analysis',
      'Resource optimization',
      'Risk management',
      'Performance metrics'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
  },
  {
    title: 'Process Optimization',
    description: 'Streamline your business operations and improve efficiency with our process optimization services. We help you identify bottlenecks and implement effective solutions.',
    benefits: [
      'Workflow analysis',
      'Efficiency improvement',
      'Cost reduction',
      'Quality enhancement',
      'Process automation'
    ],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop'
  }
];

const ManagementSolutions: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[#0E2A61]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Management Solutions
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Transform your business operations with our comprehensive management solutions. From strategic planning to process optimization, we help you achieve operational excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {managementServices.map((service, idx) => (
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
            Ready to Optimize Your Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our management solutions can help your business achieve operational excellence.
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

export default ManagementSolutions; 