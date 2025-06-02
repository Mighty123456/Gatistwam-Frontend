import React from 'react';
import { motion } from 'framer-motion';

const growthStats = [
  {
    number: '150%',
    label: 'Average Revenue Growth',
    description: 'Our clients experience significant revenue growth within the first year.',
  },
  {
    number: '300+',
    label: 'Successful Projects',
    description: "We've completed over 300 successful digital marketing projects.",
  },
  {
    number: '95%',
    label: 'Client Satisfaction',
    description: 'Our clients report high satisfaction with our services.',
  },
];

const BusinessGrowthSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Drive Your <span className="text-primary-500 dark:text-secondary-500">Business Growth</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We help businesses achieve sustainable growth through data-driven digital marketing strategies. Our comprehensive approach combines market research, targeted campaigns, and continuous optimization to deliver measurable results.
            </p>

            <div className="space-y-6">
              {growthStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-500 dark:text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-500 dark:text-secondary-500 mb-1">{stat.number}</h3>
                    <h4 className="text-lg font-semibold mb-1 text-primary-500 dark:text-secondary-500">{stat.label}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{stat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a
                href="/contact"
                className="btn btn-primary px-8 py-3 text-lg"
              >
                Start Growing Today
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Business Growth"
              className="rounded-lg shadow-xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-500 dark:text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Proven Results</h3>
                  <p className="text-gray-600 dark:text-gray-300">Trusted by 500+ businesses</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessGrowthSection; 