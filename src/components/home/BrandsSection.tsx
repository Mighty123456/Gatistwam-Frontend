import React, { useCallback, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Import slider images
import slider1 from '../../assets/images/slider-01.webp';
import slider2 from '../../assets/images/slider-02.webp';
import slider3 from '../../assets/images/slider-03.webp';
import slider4 from '../../assets/images/slider-04.webp';
import slider5 from '../../assets/images/slider-05.webp';
import slider6 from '../../assets/images/slider-06.webp';
import slider7 from '../../assets/images/slider-07.webp';

const brands = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7
];

const BrandsSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
    dragFree: true,
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    breakpoints: {
      '(max-width: 640px)': { 
        slidesToScroll: 1,
        containScroll: 'trimSnaps',
        dragFree: true,
        align: 'start'
      }
    }
  });

  const controls = useAnimation();
  const { theme } = useTheme();

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Enhanced auto-scroll functionality with continuous animation
  useEffect(() => {
    if (!emblaApi) return;

    let autoplayInterval: number;
    let isScrolling = true;
    let isMobile = window.innerWidth <= 640;

    const startAutoplay = () => {
      if (autoplayInterval) return;
      
      autoplayInterval = window.setInterval(() => {
        if (isScrolling) {
          emblaApi.scrollNext();
        }
      }, isMobile ? 4000 : 3000); // Slower scroll on mobile
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

    const handleResize = () => {
      isMobile = window.innerWidth <= 640;
      stopAutoplay();
      startAutoplay();
    };

    startAutoplay();

    const container = emblaApi.containerNode();
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', resumeAutoplay);
    window.addEventListener('resize', handleResize);

    // Start floating animation
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: isMobile ? 3 : 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });

    return () => {
      stopAutoplay();
      container.removeEventListener('mouseenter', stopAutoplay);
      container.removeEventListener('mouseleave', resumeAutoplay);
      window.removeEventListener('resize', handleResize);
    };
  }, [emblaApi, controls]);

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800/50 overflow-hidden relative">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/5 dark:bg-[#8BD7BB]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary-500/5 dark:bg-[#8BD7BB]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <div className="container-custom relative">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 200
            }}
            viewport={{ once: true }}
          >
            Brands We've <span className="text-primary-500 dark:text-[#8BD7BB] inline-block">Worked With</span>
          </motion.h2>
        </motion.div>

        <div className="relative group">
          <div className="overflow-hidden touch-pan-y" ref={emblaRef}>
            <div className="flex items-center justify-center gap-4 sm:gap-12">
              <AnimatePresence>
                {brands.map((brandImage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, x: -100, rotate: -5 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 100, rotate: 5 }}
                    transition={{ 
                      duration: 0.8,
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    viewport={{ once: true }}
                    className="flex-[0_0_150px] sm:flex-[0_0_200px] min-w-0 px-2 sm:px-4"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="group relative">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-white/5 rounded-lg"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.img
                        src={brandImage}
                        alt="Brand Logo"
                        className={`w-full h-12 sm:h-16 object-contain transition-all duration-500 relative z-10 ${
                          theme === 'dark' 
                            ? 'brightness-100 contrast-100 invert-0 opacity-100' 
                            : 'opacity-60 group-hover:opacity-100'
                        }`}
                        whileHover={{ 
                          scale: 1.15,
                          rotate: [0, -2, 2, -2, 0],
                          transition: { 
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                            duration: 0.8
                          }
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.8,
                          delay: index * 0.2,
                          type: "spring",
                          stiffness: 200
                        }}
                      />
                      <motion.div
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-500 dark:bg-[#8BD7BB]"
                        initial={{ width: 0 }}
                        whileHover={{ 
                          width: "80%",
                          transition: { duration: 0.5 }
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <motion.button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white dark:bg-gray-700 p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-primary-500 dark:hover:bg-[#8BD7BB] hover:text-white dark:hover:text-gray-900 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
            whileHover={{ 
              scale: 1.2,
              rotate: -10,
              transition: { type: "spring", stiffness: 400, duration: 0.5 }
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </motion.button>
          <motion.button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white dark:bg-gray-700 p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-primary-500 dark:hover:bg-[#8BD7BB] hover:text-white dark:hover:text-gray-900 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
            whileHover={{ 
              scale: 1.2,
              rotate: 10,
              transition: { type: "spring", stiffness: 400, duration: 0.5 }
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection; 