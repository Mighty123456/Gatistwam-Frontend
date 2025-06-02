import React, { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import your brand images here
// Example: import brand1Logo from '../../assets/images/brand1.png';
// import brand2Logo from '../../assets/images/brand2.png';
// ... import all your images ...

const brands = [
  {
    name: 'Brand 1',
    logo: '../../assets/images/slider-01.png',
  },
  {
    name: 'Brand 2',
    logo: '../../assets/images/slider-02.png',
  },
  {
    name: 'Brand 3',
    logo: '../../assets/images/slider-03.png',
  },
  {
    name: 'Brand 4',
    logo: '../../assets/images/slider-04.png',
  },
  {
    name: 'Brand 5',
    logo: '../../assets/images/slider-05.png',
  },
  {
    name: 'Brand 6',
    logo: '../../assets/images/slider-06.png',
  },
  {
    name: 'Brand 7',
    logo: '../../assets/images/slider-07.png',
  },
];

const BrandsSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
    dragFree: true,
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Enhanced auto-scroll functionality with continuous animation
  useEffect(() => {
    if (!emblaApi) return;

    let autoplayInterval: number;
    let isScrolling = true;

    const startAutoplay = () => {
      if (autoplayInterval) return;
      
      autoplayInterval = window.setInterval(() => {
        if (isScrolling) {
          emblaApi.scrollNext();
        }
      }, 1500);
    };

    const stopAutoplay = () => {
      isScrolling = false;
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = 0;
      }
    };

    const resumeAutoplay = () => {
      isScrolling = true;
      startAutoplay();
    };

    startAutoplay();

    const container = emblaApi.containerNode();
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', resumeAutoplay);

    return () => {
      stopAutoplay();
      container.removeEventListener('mouseenter', stopAutoplay);
      container.removeEventListener('mouseleave', resumeAutoplay);
    };
  }, [emblaApi]);

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 200
            }}
            viewport={{ once: true }}
          >
            Brands We've <motion.span 
              className="text-primary-500 dark:text-secondary-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.4,
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true }}
            >Worked With</motion.span>
          </motion.h2>
        </motion.div>

        <div className="relative group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-center justify-center gap-12">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, scale: 0.8, x: -100, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  viewport={{ once: true }}
                  className="flex-[0_0_200px] min-w-0 px-4"
                >
                  <div className="group relative">
                    <motion.img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-full h-16 object-contain filter dark:invert opacity-60 group-hover:opacity-100 transition-all duration-500"
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -2, 2, -2, 0],
                        transition: { 
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                          duration: 0.6
                        }
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6,
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ 
                        opacity: 1,
                        scale: 1.1,
                        transition: { duration: 0.4 }
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-500 dark:bg-secondary-500"
                      initial={{ width: 0 }}
                      whileHover={{ width: "80%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-primary-500 hover:text-white transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
            whileHover={{ 
              scale: 1.2,
              rotate: -10,
              transition: { type: "spring", stiffness: 400 }
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-primary-500 hover:text-white transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
            whileHover={{ 
              scale: 1.2,
              rotate: 10,
              transition: { type: "spring", stiffness: 400 }
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection; 