import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Home, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThankYouPage: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.title = 'Thank You - Gatistwam';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container-custom mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-xl opacity-20 animate-pulse" />
              <CheckCircle2 className={`w-24 h-24 ${
                theme === 'light' 
                  ? 'text-primary-500' 
                  : 'text-secondary-500'
              }`} />
            </div>
          </motion.div>

          {/* Thank You Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
          >
            Thank You!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Your message has been successfully sent. We'll get back to you as soon as possible.
          </motion.p>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              What's Next?
            </h2>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className={`w-5 h-5 mr-3 ${
                  theme === 'light' 
                    ? 'text-primary-500' 
                    : 'text-secondary-500'
                }`} />
                <span>You'll receive a confirmation email shortly</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <ArrowRight className={`w-5 h-5 mr-3 ${
                  theme === 'light' 
                    ? 'text-primary-500' 
                    : 'text-secondary-500'
                }`} />
                <span>Our team will review your message</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className={`w-5 h-5 mr-3 ${
                  theme === 'light' 
                    ? 'text-primary-500' 
                    : 'text-secondary-500'
                }`} />
                <span>We'll respond within 24-48 hours</span>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className={`inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                theme === 'light'
                  ? 'bg-primary-500 hover:bg-primary-600'
                  : 'bg-secondary-500 hover:bg-secondary-600'
              } text-white shadow-lg hover:shadow-xl transform hover:scale-105`}
            >
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Link>
            <Link
              to="/contact"
              className={`inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                theme === 'light'
                  ? 'bg-white hover:bg-gray-50 text-primary-500 border-2 border-primary-500'
                  : 'bg-gray-800 hover:bg-gray-700 text-secondary-500 border-2 border-secondary-500'
              } shadow-lg hover:shadow-xl transform hover:scale-105`}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Another Message
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYouPage; 