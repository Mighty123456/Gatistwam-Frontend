import React from 'react';
import { motion } from 'framer-motion';

const WhyUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Why Choose Us"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary-500 dark:bg-secondary-500 text-white p-6 rounded-lg">
              <h3 className="text-4xl font-bold">10+</h3>
              <p className="text-sm">Years Experience</p>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Why Choose <span className="text-primary-500 dark:text-secondary-500">Gatistwam</span>
              </motion.h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We combine creativity with data-driven strategies to deliver exceptional results for our clients. Our team of experts is dedicated to helping your business thrive in the digital landscape.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: 'Expert Team',
                  description: 'Our team consists of industry experts with years of experience in digital marketing.',
                },
                {
                  title: 'Proven Results',
                  description: 'We have a track record of delivering measurable results for businesses of all sizes.',
                },
                {
                  title: 'Customized Solutions',
                  description: 'We create tailored strategies that align with your business goals and target audience.',
                },
                {
                  title: 'Transparent Communication',
                  description: 'We maintain clear and open communication throughout the project lifecycle.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-500 dark:text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-primary-500 dark:text-secondary-500">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection; 