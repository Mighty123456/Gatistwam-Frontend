import React from 'react';
import { motion } from 'framer-motion';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-primary-500 dark:bg-secondary-500">
      <div className="container-custom">
        <div className="text-center">
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
            className="text-white/90 max-w-2xl mx-auto mb-8"
          >
            Let's discuss how we can help you achieve your business goals. Our team of experts is ready to create a customized strategy for your success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/contact"
              className="btn btn-white px-8 py-3 text-lg font-semibold"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="btn btn-outline-white px-8 py-3 text-lg font-semibold"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;