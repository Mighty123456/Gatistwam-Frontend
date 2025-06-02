import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import ServiceCard from '../../components/services/ServiceCard';

interface ServiceDetail {
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

const hrServices: ServiceDetail[] = [
  {
    title: 'Entrepreneurship Development',
    description: 'Empower aspiring entrepreneurs with the knowledge and skills needed to build successful businesses. Our comprehensive training programs cover all aspects of business development and management.',
    benefits: [
      'Business planning and strategy',
      'Financial management skills',
      'Market analysis techniques',
      'Risk assessment methods',
      'Growth strategy development'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
  },
  {
    title: 'Business Planning & Strategy',
    description: 'Develop robust business plans and strategies that drive growth and success. Our experts help you create actionable plans aligned with your business goals and market opportunities.',
    benefits: [
      'Comprehensive business planning',
      'Market opportunity analysis',
      'Resource optimization',
      'Risk management strategies',
      'Growth roadmap development'
    ],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop'
  },
  {
    title: 'Financial Literacy & Accounting Basics',
    description: 'Build essential financial management skills for business success. Learn fundamental accounting principles, financial analysis, and budgeting techniques.',
    benefits: [
      'Basic accounting principles',
      'Financial statement analysis',
      'Budgeting and forecasting',
      'Cash flow management',
      'Tax planning basics'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop'
  },
  {
    title: 'HR Management & Recruitment Training',
    description: 'Master the art of human resource management and effective recruitment. Learn best practices for hiring, training, and retaining top talent.',
    benefits: [
      'Recruitment best practices',
      'Employee development',
      'Performance management',
      'HR policy development',
      'Compliance training'
    ],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=400&fit=crop'
  },
  {
    title: 'Business Communication Skills',
    description: 'Enhance your professional communication skills for better business outcomes. Learn effective communication strategies for various business scenarios.',
    benefits: [
      'Professional writing skills',
      'Presentation techniques',
      'Negotiation strategies',
      'Conflict resolution',
      'Cross-cultural communication'
    ],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop'
  },
  {
    title: 'Project Management (Agile, Scrum)',
    description: 'Master modern project management methodologies. Learn Agile and Scrum frameworks to deliver projects efficiently and effectively.',
    benefits: [
      'Agile methodology training',
      'Scrum framework implementation',
      'Project planning tools',
      'Team collaboration techniques',
      'Risk management strategies'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
  }
];

const HRSolutions: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[#0E2A61]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              HR Solutions & Training
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Empower your workforce with our comprehensive HR solutions and professional training programs. From entrepreneurship to project management, we provide the skills needed for success.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {hrServices.map((service, idx) => (
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
        <div className="mt-20 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-secondary-500 dark:to-secondary-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Develop Your Team?
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our HR solutions and training programs can help your organization thrive.
          </p>
          <button className="bg-white text-primary-600 dark:text-secondary-600 hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-colors text-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HRSolutions; 