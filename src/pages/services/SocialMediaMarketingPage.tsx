import React from 'react';
// import { Link } from 'react-router-dom'; // Removed unused import
import { useTheme } from '../../context/ThemeContext';
import ServiceCard from '../../components/services/ServiceCard';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import socialMediaStrategy from '../../assets/images/Digital Branding/SocialMediaMarketing/social-media-marketing.jpg';
import contentStrategyImage from '../../assets/images/Digital Branding/SocialMediaMarketing/content-strategy.jpg';

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

const socialMediaMarketingOfferings: ServiceOffering[] = [
  { 
    name: 'Facebook Marketing', 
    icon: '🟦', 
    description: 'Supercharge your brand visibility on Facebook with professional marketing campaigns that really deliver.', 
    link: '#',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png'
  },
  { 
    name: 'Instagram Management', 
    icon: '📸', 
    description: 'Master Instagram marketing with engaging content and high-ROI ad management.', 
    link: '#',
    image: 'https://cdn-icons-png.flaticon.com/512/174/174855.png'
  },
  { 
    name: 'Twitter Management', 
    icon: '🐦', 
    description: 'Bring your Twitter to the next level. Engage your followers, maximize your reach, and run effective campaigns.', 
    link: '#',
    image: 'https://cdn-icons-png.flaticon.com/512/733/733579.png'
  },
  { 
    name: 'LinkedIn Management', 
    icon: '👔', 
    description: 'Maximize your LinkedIn with a tailored management agency with connection expansion, content strategy, and running Ads.', 
    link: '#',
    image: 'https://cdn-icons-png.flaticon.com/512/174/174857.png'
  },
  { 
    name: 'Pinterest Marketing', 
    icon: '📌', 
    description: 'Grow your brand presence and reach new audiences on Pinterest.', 
    link: '#',
    image: 'https://cdn-icons-png.flaticon.com/512/174/174863.png'
  },
  { 
    name: 'YouTube Marketing', 
    icon: '▶️', 
    description: 'Boost your video views and engage with your audience on YouTube.', 
    link: '#',
    image: 'https://cdn-icons-png.flaticon.com/512/174/174883.png'
  },
  { 
    name: 'Google Services', 
    icon: '🔍', 
    description: 'Leverage Google tools for better online visibility and marketing.', 
    link: '#',
    image: 'https://cdn-icons-png.flaticon.com/512/281/281760.png'
  },
];

const SocialMediaMarketingPage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section (Styled like TechSolutions) */}
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
              className={`${
                theme === 'dark'
                  ? 'bg-gray-800/90 backdrop-blur-md text-gray-100'
                  : 'bg-white/95 backdrop-blur-md text-gray-900'
              } rounded-3xl shadow-2xl p-10 md:p-14 transition-transform duration-300`}
            >
              {/* Floating badge/icon - Optional, removed for simplicity unless requested */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              >
                Social media strategy that makes your audience want to follow & engage with your brand.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-xl mb-6 font-medium ${theme === 'dark' ? 'text-[#8BD7BB]' : 'text-primary-600'}`}
              >
                When you build an authentic relationship with your prospects, they'll choose you without thinking twice.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`space-y-5 text-base md:text-lg mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
              >
                <p>
                  Social media is considered the second-most effective form of digital marketing, yet more than one-third of businesses have no social media
                  presence at all. This is largely due to small businesses not having the time or resources to invest in social media marketing.
                </p>
                <p>
                  Social media offers a way to directly engage with your target audience and nurture them into becoming your ideal customers. Through it, you
                  can build an online community, expand your customer reach, boost your brand and location's reputation, and collaborate with other industry
                  experts in a way that humanizes you and your team. Thus, helping build genuine and strong business relationships with your patrons.
                </p>
                <p>
                  Let TechMatrick's Social Media Management experts drive your social media efforts to help increase followers, maximize brand awareness and
                  gain revenue. Our experienced team can turn your business vision into a cohesive social persona for your brand. As an intelligence-based digital
                  marketing firm, we have the tools in place to allow us to find, join, and
                  influence your company's ideal customer base. We work tirelessly to
                  ensure that your company is always part of the best conversations and
                  sees measurable online and revenue growth as a result of properly
                  influencing communities.
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
                  onClick={() => { /* Add modal toggle or navigation logic here */ alert('Get Free Analysis clicked!'); }}
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
              className="flex justify-center items-center"
            >
              <img
                src={socialMediaStrategy}
                alt="Social Media Strategy"
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

      {/* What We're Offering Creative Digital Service Section */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-500 dark:text-secondary-500">What We're Offering Creative Digital Service</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {socialMediaMarketingOfferings.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.name}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>

      {/* Content Strategy and Engagement Section */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12 mt-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Content Strategy and Engagement</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Our content strategy is built on a deep understanding of your brand's voice and your audience's preferences. We create engaging, platform-specific content that resonates with your target audience while maintaining brand consistency across all channels. From compelling visuals to thought-provoking captions, we ensure your content drives meaningful engagement and builds lasting relationships with your followers.</p>
            <p className="text-gray-700 dark:text-gray-300">We implement a comprehensive content calendar that aligns with your business goals and seasonal trends. Our team crafts content that educates, entertains, and inspires your audience, fostering a community around your brand. Through regular engagement monitoring and response management, we maintain an active and positive presence that strengthens your brand's reputation and customer relationships.</p>
          </div>
          <div className="md:w-1/2">
            <img
              src={contentStrategyImage}
              alt="Content Strategy Dashboard"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Community Management and Growth Section */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <img
              src={socialMediaStrategy}
              alt="Community Growth Metrics"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-primary-500 dark:text-secondary-500">Community Management and Growth</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Our community management approach focuses on building and nurturing an engaged audience that actively participates in your brand's story. We monitor conversations, respond to comments and messages promptly, and create opportunities for meaningful interaction. This proactive engagement helps build trust and loyalty while providing valuable insights into your audience's needs and preferences.</p>
            <p className="text-gray-700 dark:text-gray-300">We employ strategic growth tactics to expand your social media presence organically. Through targeted hashtag research, influencer collaborations, and community engagement initiatives, we help you reach new audiences while maintaining the quality of your existing community. Our growth strategies are data-driven and continuously optimized based on performance metrics and platform insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaMarketingPage; 