import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import ServiceCard from '../../components/services/ServiceCard';

interface ServiceDetail {
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

const academyServices: ServiceDetail[] = [
  {
    title: 'Professional Development Programs',
    description: 'Enhance your professional skills with our comprehensive development programs. We offer specialized training in various business and technical domains to help you advance your career.',
    benefits: [
      'Industry-recognized certifications',
      'Expert-led training sessions',
      'Practical hands-on experience',
      'Career advancement support',
      'Networking opportunities'
    ],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop'
  },
  {
    title: 'Technical Skills Training',
    description: 'Master essential technical skills with our specialized training programs. From software development to data analysis, we provide comprehensive technical education.',
    benefits: [
      'Programming languages',
      'Software development tools',
      'Database management',
      'Cloud computing',
      'DevOps practices'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop'
  },
  {
    title: 'Business & Management Courses',
    description: 'Develop your business acumen with our management-focused courses. Learn essential business skills and management techniques from industry experts.',
    benefits: [
      'Business strategy',
      'Project management',
      'Leadership skills',
      'Financial management',
      'Marketing fundamentals'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
  },
  {
    title: 'Soft Skills Development',
    description: 'Enhance your interpersonal and communication skills through our soft skills training programs. Develop the essential skills needed for professional success.',
    benefits: [
      'Communication skills',
      'Team collaboration',
      'Problem-solving',
      'Time management',
      'Emotional intelligence'
    ],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop'
  },
  {
    title: 'Corporate Training Solutions',
    description: 'Customized training programs designed for organizations. We develop tailored solutions to address your specific business needs and employee development goals.',
    benefits: [
      'Custom curriculum design',
      'On-site training',
      'Virtual learning options',
      'Progress tracking',
      'Performance assessment'
    ],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop'
  }
];

const Academy: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[#0E2A61]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Academy & Training
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Advance your career with our comprehensive training and development programs. From technical skills to soft skills, we provide the education you need to succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {academyServices.map((service, idx) => (
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
            Ready to Advance Your Career?
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our training programs and how they can help you achieve your professional goals.
          </p>
          <button className="bg-white text-primary-600 dark:text-secondary-600 hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-colors text-lg">
            Get Started
          </button>
        </div>
    </div>
  </div>
);
};

export default Academy; 