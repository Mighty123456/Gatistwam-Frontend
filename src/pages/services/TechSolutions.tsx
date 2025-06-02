import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import ServiceCard from '../../components/services/ServiceCard';

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[#0E2A61]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology Solutions
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Transform your business with our cutting-edge technology solutions. From software development to cloud services, we provide the tools you need to succeed in the digital age.
            </p>
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
          <h2 className="text-3xl font-bold mb-6 text-primary-500 dark:text-secondary-500">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our technology solutions can help your business thrive in the digital age.
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

export default TechSolutions; 