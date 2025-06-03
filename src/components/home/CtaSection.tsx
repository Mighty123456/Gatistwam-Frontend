import React from 'react';
import { motion } from 'framer-motion';
import ContactFormSection from './ContactFormSection';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-primary-500 dark:bg-secondary-500">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
            >
              Ready to Grow Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/90 max-w-2xl mb-8"
            >
              Let's discuss how we can help you achieve your business goals. Our team of experts is ready to create a customized strategy for your success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <a
                href="/services"
                className="btn btn-outline-white px-8 py-3 text-lg font-semibold text-white"
              >
                Learn More
              </a>
            </motion.div>
          </div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <ContactFormSection />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;