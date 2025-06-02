import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a comprehensive range of digital marketing services including SEO, social media marketing, content marketing, PPC advertising, email marketing, and web development. Our team creates customized strategies to meet your specific business goals.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'The timeline for seeing results varies depending on the service and your specific goals. Generally, you can expect to see initial results within 3-6 months for SEO, while social media and PPC campaigns can show results much sooner. We provide regular reports to track progress.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our pricing is customized based on your specific needs and goals. We offer flexible packages that can be tailored to your budget and requirements. Contact us for a detailed quote based on your business objectives.',
  },
  {
    question: 'Do you work with small businesses?',
    answer: 'Yes, we work with businesses of all sizes, from startups to large enterprises. We believe every business deserves access to quality digital marketing services, and we create scalable solutions that grow with your business.',
  },
  {
    question: 'How do you measure success?',
    answer: 'We use a variety of metrics to measure success, including website traffic, conversion rates, engagement metrics, ROI, and more. We provide detailed analytics reports and regular updates to ensure you can track your progress.',
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Popular <span className="text-primary-500 dark:text-secondary-500">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Find answers to commonly asked questions about our services and process.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary-500 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-b-lg shadow-sm">
                      <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 