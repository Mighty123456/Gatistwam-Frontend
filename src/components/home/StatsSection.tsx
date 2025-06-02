import React from 'react';
import { motion } from 'framer-motion';
import AnimatedElement from '../ui/AnimatedElement';

// Stats data
const stats = [
  { id: 1, value: '200+', label: 'Clients Served' },
  { id: 2, value: '500+', label: 'Projects Completed' },
  { id: 3, value: '50+', label: 'Team Members' },
  { id: 4, value: '10+', label: 'Years Experience' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-primary-600 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedElement 
              key={stat.id}
              className="text-center"
              delay={index * 100}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-secondary-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;