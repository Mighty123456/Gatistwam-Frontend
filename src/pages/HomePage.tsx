import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import WhyUsSection from '../components/home/WhyUsSection';
import WhatWeOfferSection from '../components/home/WhatWeOfferSection';
import BrandsSection from '../components/home/BrandsSection';
import BusinessGrowthSection from '../components/home/BusinessGrowthSection';
import CaseStudiesSection from '../components/home/CaseStudiesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';
import FaqSection from '../components/home/FaqSection';

const HomePage: React.FC = () => {
  // Update document title
  useEffect(() => {
    document.title = 'Gatistwam - Digital Marketing Solutions';
  }, []);

  return (
    <>
      <HeroSection />
      <WhyUsSection />
      <WhatWeOfferSection />
      <BrandsSection />
      <BusinessGrowthSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CtaSection />
      <FaqSection />
    </>
  );
};

export default HomePage;