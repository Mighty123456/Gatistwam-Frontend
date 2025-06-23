import React from 'react';
import { X, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const iconClass = theme === 'light'
    ? 'text-gray-600 hover:text-secondary-500 transition-colors'
    : 'text-gray-400 hover:text-secondary-500 transition-colors';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-xl z-50"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b dark:border-gray-800">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Company Info
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      About Us
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Gatistwam is a leading digital marketing agency specializing in helping businesses grow their online presence.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Contact Information
                    </h3>
                    <div className="space-y-2 text-gray-600 dark:text-gray-400">
                      <p>Email: gatistwamgroup@gmail.com</p>
                      <p>Phone: +91 9274524365</p>
                      <p>Address: 204, Second Floor, Shrimat Arcade, Opposite Sahjanand Eleganace 3, Anand Sojitra Road, At Karamsad, Anand-Gujarat (India), Pincode: 388325</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Business Hours
                    </h3>
                    <div className="space-y-2 text-gray-600 dark:text-gray-400">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center justify-center space-x-4 p-6 border-t dark:border-gray-800">
                <a href="https://www.facebook.com/profile.php?id=61575698426330" target="_blank" rel="noopener noreferrer" className={iconClass}><Facebook size={24} /></a>
                <a href="https://www.instagram.com/gatistwamofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className={iconClass}><Instagram size={24} /></a>
                <a href="https://www.linkedin.com/company/gatistwam/" target="_blank" rel="noopener noreferrer" className={iconClass}><Linkedin size={24} /></a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar; 