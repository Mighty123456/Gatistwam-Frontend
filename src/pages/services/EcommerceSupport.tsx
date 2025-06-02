import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import ServiceCard from '../../components/services/ServiceCard';

interface ServiceDetail {
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

const ecommerceServices: ServiceDetail[] = [
  {
    title: 'E-commerce Platform Development',
    description: 'Build robust and scalable e-commerce platforms tailored to your business needs. From online stores to marketplaces, we create solutions that drive sales and growth.',
    benefits: [
      'Custom e-commerce development',
      'Shopping cart integration',
      'Payment gateway setup',
      'Inventory management',
      'Order processing system'
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop'
  },
  {
    title: 'E-commerce Optimization',
    description: 'Optimize your online store for better performance and higher conversion rates. We help you enhance user experience and maximize sales potential.',
    benefits: [
      'Conversion rate optimization',
      'User experience enhancement',
      'Mobile responsiveness',
      'Performance optimization',
      'SEO implementation'
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop'
  }
];

const EcommerceSupport: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[#0E2A61]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              E-commerce Support
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Transform your online business with our comprehensive e-commerce solutions. From platform development to optimization, we help you succeed in the digital marketplace.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {ecommerceServices.map((service, idx) => (
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
            Ready to Boost Your Online Sales?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our e-commerce solutions can help your business thrive in the digital marketplace.
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

export default EcommerceSupport; 