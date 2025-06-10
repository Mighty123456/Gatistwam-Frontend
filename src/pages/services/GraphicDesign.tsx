import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import ServiceCard from '../../components/services/ServiceCard';
import Button from '../../components/ui/Button';
import { motion } from 'framer-motion';
import graphicDesignImage from '../../assets/images/Digital Branding/graphic-design.jpg';

// To manually add images, use this pattern:
// import imageName from '../../assets/images/your-folder/image-name.extension';
// Supported formats: .jpg, .jpeg, .png, .webp, .gif
// Example: import myImage from '../../assets/images/services/my-image.jpg';

interface ServiceDetail {
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

const designServices: ServiceDetail[] = [
  {
    title: 'Brand Identity Design',
    description: 'Create a unique and memorable brand identity that resonates with your target audience and sets you apart from competitors.',
    benefits: [
      'Logo design',
      'Brand guidelines',
      'Visual identity system',
      'Brand collateral',
      'Brand strategy'
    ],
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=400&fit=crop'
  },
  {
    title: 'Digital Design',
    description: 'Professional digital design solutions for web, social media, and digital marketing materials that engage your audience.',
    benefits: [
      'Social media graphics',
      'Web design elements',
      'Digital advertisements',
      'Email templates',
      'UI/UX design'
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
      <div className={`relative ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#0E2A61]'} pt-32 md:pt-40 pb-16 overflow-hidden`}>
        {/* Animated gradient overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 bg-gradient-to-br ${
            theme === 'dark' 
              ? 'from-primary-500/20 via-transparent to-secondary-500/20' 
              : 'from-[#8BD7BB]/30 via-transparent to-primary-500/20'
          } pointer-events-none z-0`}
        />
        {/* Decorative blurred circles with shadow */}
        <div className={`absolute -top-10 -left-10 w-48 h-48 ${
          theme === 'dark' ? 'bg-primary-500' : 'bg-[#8BD7BB]'
        } opacity-30 rounded-full blur-3xl shadow-2xl`}></div>
        <div className={`absolute -bottom-10 -right-10 w-64 h-64 ${
          theme === 'dark' ? 'bg-secondary-500' : 'bg-primary-500'
        } opacity-20 rounded-full blur-3xl shadow-2xl`}></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Glassy Card with Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.025, boxShadow: theme === 'dark' ? '0 8px 32px 0 rgba(34, 197, 94, 0.15)' : '0 8px 32px 0 rgba(0, 0, 0, 0.1)' }}
              className={`${
                theme === 'dark' 
                  ? 'bg-gray-800/80 backdrop-blur-md' 
                  : 'bg-white/80 backdrop-blur-md'
              } rounded-3xl shadow-2xl p-10 md:p-14 transition-transform duration-300`}
            >
              {/* Floating badge/icon */}
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="inline-block mb-4"
              >
                <span className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${
                  theme === 'dark' 
                    ? 'bg-[#8BD7BB]/90 shadow-lg ring-4 ring-gray-800' 
                    : 'bg-primary-600/90 shadow-lg ring-4 ring-white'
                }`}>
                  <svg className={`w-8 h-8 ${
                    theme === 'dark' ? 'text-[#8BD7BB]' : 'text-white'
                  }`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Creative Graphic Design Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-xl mb-6 font-medium ${
                  theme === 'dark' ? 'text-[#8BD7BB]' : 'text-gray-700'
                }`}
              >
                Transform your brand with stunning visual designs that capture attention and communicate your message effectively.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`space-y-5 text-base md:text-lg mb-8 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                <p>
                  Our graphic design services are crafted to help businesses create powerful visual identities. We combine creative expertise with strategic thinking to deliver designs that make a lasting impression.
                </p>
                <p>
                  From brand identity to marketing materials, our comprehensive suite of design services addresses the unique needs of modern businesses. We work closely with you to understand your vision and develop designs that drive success.
                </p>
                <p>
                  With TechMatrick's graphic design services, you gain access to creative talent, cutting-edge tools, and expert guidance to transform your brand's visual presence and achieve design excellence.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button 
                  variant={theme === 'dark' ? 'primary' : 'primary'} 
                  size="lg" 
                  to="/contact"
                  className={theme === 'dark' ? 'bg-[#8BD7BB] hover:bg-[#8BD7BB]/90' : 'bg-[#0E2A61] hover:bg-[#0E2A61]/90'}
                >
                  Get Free Analysis
                </Button>
              </motion.div>
            </motion.div>
            {/* Right: Illustration with floating animation */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
              className="flex justify-center items-center w-full"
            >
              <img
                src={graphicDesignImage}
                alt="Graphic Design Services"
                className={`w-full max-w-2xl rounded-2xl shadow-xl border ${
                  theme === 'dark'
                    ? 'border-gray-700 bg-gray-800/90'
                    : 'border-gray-200 bg-white/95'
                }`}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {designServices.map((service, idx) => (
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
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-secondary-500 dark:to-secondary-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our graphic design services can help you create a memorable brand identity.
          </p>
          <button onClick={() => window.location.href = '/contact'} className="bg-white text-primary-600 dark:text-secondary-600 hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign; 