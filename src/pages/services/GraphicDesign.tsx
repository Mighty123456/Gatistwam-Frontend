import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import ServiceCard from '../../components/services/ServiceCard';

interface ServiceDetail {
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

const graphicDesignServices: ServiceDetail[] = [
  {
    title: 'Logo & Brand Identity Design',
    description: 'Create a powerful and memorable brand identity that resonates with your target audience. Our expert designers craft unique logos and comprehensive brand guidelines that reflect your company\'s values and vision.',
    benefits: [
      'Professional and unique logo design',
      'Comprehensive brand guidelines',
      'Multiple design concepts',
      'Versatile file formats',
      'Brand consistency across platforms'
    ],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=400&fit=crop'
  },
  {
    title: 'Social Media Post Design',
    description: 'Engage your audience with eye-catching social media content. We create visually appealing posts that align with your brand and drive engagement across all social platforms.',
    benefits: [
      'Platform-optimized designs',
      'Trending visual styles',
      'Consistent brand messaging',
      'Engagement-focused layouts',
      'Quick turnaround time'
    ],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=400&fit=crop'
  },
  {
    title: 'Business Cards & Stationery',
    description: 'Make a lasting impression with professionally designed business cards and stationery. Our designs combine creativity with functionality to create materials that stand out.',
    benefits: [
      'Professional business card designs',
      'Matching stationery suite',
      'Print-ready files',
      'Multiple design options',
      'Premium paper recommendations'
    ],
    image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&h=400&fit=crop'
  },
  {
    title: 'Brochure & Flyer Design',
    description: 'Communicate your message effectively with well-designed marketing materials. We create brochures and flyers that capture attention and deliver your message clearly.',
    benefits: [
      'Professional layout design',
      'Compelling visual hierarchy',
      'Print and digital formats',
      'Custom illustrations',
      'Marketing-focused content'
    ],
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=400&fit=crop'
  },
  {
    title: 'Packaging & Label Design',
    description: 'Stand out on the shelves with innovative packaging and label designs. We create packaging solutions that not only look great but also protect your product and communicate its value.',
    benefits: [
      'Eye-catching package designs',
      'Product-focused layouts',
      'Regulatory compliance',
      'Print-ready artwork',
      'Material recommendations'
    ],
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=400&fit=crop'
  },
  {
    title: 'Motion Graphics',
    description: 'Bring your brand to life with dynamic motion graphics. We create engaging animations and videos that tell your story and capture your audience\'s attention.',
    benefits: [
      'Professional animation',
      'Social media optimization',
      'Brand-aligned motion',
      'Quick loading times',
      'Multiple format delivery'
    ],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=400&fit=crop'
  }
];

const GraphicDesign: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[#0E2A61]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Graphic Design Services
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Transform your brand with our creative graphic design solutions. From logos to motion graphics, we deliver visually stunning designs that make your business stand out.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {graphicDesignServices.map((service, idx) => (
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
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our graphic design services can help your brand make a lasting impression.
          </p>
          <button className="bg-white text-primary-600 dark:text-secondary-600 hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-colors text-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign; 