import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Target, TrendingUp } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import AnimatedElement from '../components/ui/AnimatedElement';
import StatsSection from '../components/home/StatsSection';

const AboutPage: React.FC = () => {
  // Update document title
  useEffect(() => {
    document.title = 'About Us - Gatistwam';
  }, []);

  // Values data
  const values = [
    {
      id: 1,
      icon: <Users className="w-12 h-12 text-secondary-500" />,
      title: 'Client Focus',
      description: 'We put our clients first, understanding their unique needs and delivering solutions that exceed expectations.',
    },
    {
      id: 2,
      icon: <Zap className="w-12 h-12 text-secondary-500" />,
      title: 'Innovation',
      description: 'We stay ahead of the curve, constantly exploring new technologies and strategies to give our clients a competitive edge.',
    },
    {
      id: 3,
      icon: <Target className="w-12 h-12 text-secondary-500" />,
      title: 'Excellence',
      description: 'We are committed to delivering excellence in everything we do, from strategy to execution and beyond.',
    },
    {
      id: 4,
      icon: <TrendingUp className="w-12 h-12 text-secondary-500" />,
      title: 'Results-Driven',
      description: 'We focus on generating measurable results that contribute to our clients\' business growth and success.',
    },
  ];

  return (
    <>
      <PageHeader 
        title="About Us"
        subtitle="Learn more about our company, our mission, and our values."
        bgImage="https://images.pexels.com/photos/7688854/pexels-photo-7688854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Our Story Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement>
              <h2 className="section-title">Our Story</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Founded in 2015, Gatistwam began as a small team of digital marketing enthusiasts with a vision to transform how businesses connect with their audiences online.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Over the years, we've grown into a full-service digital marketing agency, helping businesses of all sizes achieve their marketing goals. Our journey has been one of continuous learning, innovation, and growth.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Today, we're proud to work with clients across industries, providing strategic marketing solutions that drive real business results. Our team has expanded to include specialists in SEO, content marketing, social media, PPC, email marketing, and web development.
              </p>
            </AnimatedElement>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Gatistwam Team" 
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedElement className="glass-card p-8">
              <h3 className="text-2xl font-bold text-primary-600 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To empower businesses with innovative digital marketing solutions that drive growth, enhance brand presence, and deliver measurable results. We are committed to understanding our clients' unique challenges and opportunities, partnering with them to achieve their business objectives.
              </p>
            </AnimatedElement>
            
            <AnimatedElement className="glass-card p-8" delay={100}>
              <h3 className="text-2xl font-bold text-primary-600 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be the most trusted digital marketing partner for businesses seeking sustainable growth in the digital landscape. We strive to stay at the forefront of industry trends and technologies, continuously evolving our strategies to help our clients stay ahead of the competition.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedElement className="text-center mb-16">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle mx-auto">
              The principles that guide everything we do at Gatistwam.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedElement key={value.id} delay={index * 100}>
                <div className="glass-card p-8 h-full">
                  <div className="mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-600 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <StatsSection />
    
    </>
  );
};

export default AboutPage;