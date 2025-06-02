import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaChartLine, FaEdit, FaChartBar, FaBullseye, FaUsers } from 'react-icons/fa';

const services = [
  {
    title: "Keyword Research & Strategy",
    description: "Identifying the most relevant keywords to reach your target audience.",
    icon: <FaSearch className="w-8 h-8" />
  },
  {
    title: "Campaign Setup & Management",
    description: "Setting up and managing effective Google Ads campaigns.",
    icon: <FaChartLine className="w-8 h-8" />
  },
  {
    title: "Ad Copywriting & Optimization",
    description: "Crafting compelling ad copy and optimizing ads for better performance.",
    icon: <FaEdit className="w-8 h-8" />
  },
  {
    title: "Performance Tracking & Reporting",
    description: "Monitoring campaign performance and providing detailed reports.",
    icon: <FaChartBar className="w-8 h-8" />
  },
  {
    title: "Targeting & Audience Strategy",
    description: "Precise audience targeting to maximize campaign effectiveness.",
    icon: <FaBullseye className="w-8 h-8" />
  },
  {
    title: "Competitor Analysis",
    description: "Understanding market position and competitor strategies.",
    icon: <FaUsers className="w-8 h-8" />
  }
];

const GoogleAdsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative py-20 overflow-hidden"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
            >
              Google Ads Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              Drive targeted traffic and achieve your business goals with expert Google Ads campaign management
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    <div className="relative text-4xl text-primary-500 dark:text-secondary-500 transform group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-secondary-500 transition-colors duration-300">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>

                  {/* Action Button */}
                  <button className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold transform group-hover:scale-[1.02] transition-all duration-300 hover:shadow-lg">
                    <span className="mr-2">Learn More</span>
                    <FaChartLine className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-secondary-500/20 to-primary-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="py-20 relative"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Why Choose Our Google Ads Services?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our certified Google Ads professionals create and manage campaigns that deliver high-quality leads and maximize your return on investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Certified Google Ads Professionals",
              "Data-Driven Strategy",
              "Transparent Reporting",
              "Customized Solutions",
              "Continuous Optimization",
              "Proven Track Record"
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl p-6 hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                    <FaChartLine className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-secondary-500 transition-colors duration-300">
                    {feature}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default GoogleAdsPage; 