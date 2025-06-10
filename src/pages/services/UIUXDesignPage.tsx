import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import ServiceCard from '../../components/services/ServiceCard';
import Button from '../../components/ui/Button';
import { motion } from 'framer-motion';
import uiuxHero from '../../assets/images/Digital Branding/UIUX/ui-ux.jpg';
import designFlow from '../../assets/images/Digital Branding/UIUX/design-flow.jpg';
import flowProcess from '../../assets/images/Digital Branding/UIUX/flow-process.png';
import brandIntegration from '../../assets/images/Digital Branding/UIUX/brand-integration.jpg';

// To manually add images, use this pattern:
// import imageName from '../../assets/images/your-folder/image-name.extension';
// Supported formats: .jpg, .jpeg, .png, .webp, .gif
// Example: import myImage from '../../assets/images/services/my-image.jpg';

interface ServiceOffering {
  name: string;
  icon: string;
  description: string;
  link: string;
  image: string;
}

const uiuxOfferings: ServiceOffering[] = [
  { 
    name: 'User Interface Design', 
    icon: '🎨', 
    description: 'Create intuitive and visually appealing interfaces that engage users and enhance their experience.', 
    link: '#',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop'
  },
  { 
    name: 'User Experience Design', 
    icon: '👥', 
    description: 'Design seamless user journeys that make interactions intuitive and enjoyable.', 
    link: '#',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop'
  },
  { 
    name: 'Wireframing & Prototyping', 
    icon: '📝', 
    description: 'Develop interactive prototypes to visualize and test your product before development.', 
    link: '#',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop'
  },
  { 
    name: 'Usability Testing', 
    icon: '🔍', 
    description: 'Validate designs through user testing to ensure optimal functionality and satisfaction.', 
    link: '#',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop'
  },
];

const UIUXDesignPage: React.FC = () => {
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
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Glassy Card with Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className={`${
                theme === 'dark'
                  ? 'bg-gray-800/90 backdrop-blur-md text-gray-100'
                  : 'bg-white/95 backdrop-blur-md text-gray-900'
              } rounded-3xl shadow-2xl p-10 md:p-14 transition-transform duration-300`}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              >
                Create Intuitive and Engaging User Experiences
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-xl mb-6 font-medium ${theme === 'dark' ? 'text-[#8BD7BB]' : 'text-primary-600'}`}
              >
                Design interfaces that users love to interact with.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`space-y-5 text-base md:text-lg mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
              >
                <p>
                  Our UI/UX design team creates beautiful, functional interfaces that delight users and drive business results. 
                  We combine aesthetic excellence with user-centered design principles to create experiences that are both 
                  visually stunning and highly usable.
                </p>
                <p>
                  From wireframing to prototyping, we guide you through every step of the design process, ensuring your 
                  product not only looks great but also provides an exceptional user experience that keeps customers coming back.
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
                  onClick={() => { /* Add modal toggle or navigation logic here */ alert('Get Free Consultation clicked!'); }}
                  className={theme === 'dark' ? 'bg-[#8BD7BB] hover:bg-[#8BD7BB]/90' : 'bg-[#0E2A61] hover:bg-[#0E2A61]/90'}
                >
                  Get Free Consultation
                </Button>
              </motion.div>
            </motion.div>
            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
              className="flex justify-center items-center"
            >
              <img
                src={uiuxHero}
                alt="UI/UX Design"
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

      {/* Services Section */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-500 dark:text-secondary-500">Our UI/UX Design Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {uiuxOfferings.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.name}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>

      {/* Design Process Section */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Our Design Process</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We follow a proven design process that ensures we create the best possible user experience. 
              From research to implementation, we work closely with you to understand your needs and create 
              solutions that exceed expectations.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Our process includes user research, wireframing, prototyping, and usability testing, ensuring 
              that every design decision is backed by data and user feedback.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={designFlow}
              alt="Design Process"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* User Flow Section */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <img
              src={flowProcess}
              alt="User Flow Process"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">User Flow & Process</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We create intuitive user flows that guide users through your product with ease. Our process 
              focuses on understanding user needs and creating clear pathways to achieve their goals.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Through careful analysis and testing, we ensure that every interaction is meaningful and 
              contributes to a positive user experience.
            </p>
          </div>
        </div>
      </div>

      {/* Brand Integration Section */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Brand Integration</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We seamlessly integrate your brand identity into every aspect of the user interface. From 
              color schemes to typography, we ensure your brand's personality shines through while 
              maintaining usability and accessibility.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Our designs not only look great but also reinforce your brand message and values, creating 
              a cohesive experience across all touchpoints.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={brandIntegration}
              alt="Brand Integration"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIUXDesignPage;