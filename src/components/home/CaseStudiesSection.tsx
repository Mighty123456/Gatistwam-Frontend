import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: 'E-commerce Growth',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Digital Marketing',
    description: 'Helped an e-commerce store achieve 200% revenue growth in 6 months.',
  },
  {
    title: 'Brand Awareness',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Social Media',
    description: 'Increased brand awareness by 300% through targeted social media campaigns.',
  },
  {
    title: 'SEO Success',
    image: 'https://images.pexels.com/photos/3183155/pexels-photo-3183155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'SEO',
    description: 'Improved organic traffic by 150% through comprehensive SEO strategy.',
  },
];

const CaseStudiesSection: React.FC = () => {
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
            New <span className="text-[#8BD7BB]">Case Studies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Explore our latest success stories and see how we've helped businesses achieve their goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#8BD7BB] text-white px-3 py-1 rounded-full text-sm">
                    {study.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#8BD7BB]">{study.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {study.description}
                </p>
                <a
                  href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-[#8BD7BB] hover:text-[#7ac5a9] font-semibold inline-flex items-center transition-colors duration-200"
                >
                  Read Case Study
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="/case-studies"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold rounded-lg bg-[#8BD7BB] text-white hover:bg-[#7ac5a9] transition-colors duration-200"
          >
            View All Case Studies
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection; 