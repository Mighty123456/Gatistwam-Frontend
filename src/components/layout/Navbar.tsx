import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import { NavLink as NavLinkType } from '../../types';
import { useTheme } from '../../context/ThemeContext';
import Sidebar from './Sidebar';
import Logo from '../ui/Logo';

const navLinks: NavLinkType[] = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Services', path: '/services' },
  { title: 'Portfolio', path: '/portfolio' },
  { title: 'Blog', path: '/blog' },
  { title: 'Contact', path: '/contact' },
];

const servicesLinks = [
  { title: 'Social Media Marketing', path: '/services/social-media-marketing' },
  { title: 'SEO', path: '/services/seo' },
  { title: 'Web Development', path: '/services/web-development' },
  { title: 'UI/UX Design', path: '/services/ui-ux-design' },
  { title: 'Social Media Advertising', path: '/services/social-media-advertising' },
  { title: 'Google Ads', path: '/services/google-ads' },
  { title: 'Quality Lead Generation', path: '/services/quality-lead-generation' },
  { title: 'View All Services', path: '/services' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Toggle sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
  // Close menu and sidebar on route change
  useEffect(() => {
    setIsOpen(false);
    setIsSidebarOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation bar background classes
  const navbarClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled 
      ? 'py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' 
      : 'py-5 bg-transparent'
  }`;

  return (
    <>
      <nav className={navbarClasses}>
        <div className="max-w-screen-xl w-full mx-auto px-4">
          <div className="flex items-center justify-between min-w-0">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
              <Logo size="lg" />
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  {link.title}
                </NavLink>
              ))}
            </div>

            {/* Right Section: Theme Toggle & Sidebar Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={toggleSidebar}
                className="btn btn-primary px-6 py-3 text-base"
              >
                Show Info
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-4">
              <ThemeToggle />
              <button 
                className="text-gray-700 dark:text-gray-300 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white dark:bg-gray-900 shadow-lg"
            >
              <div className="container-custom py-4">
                <div className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) => 
                        `block py-2 px-4 rounded-lg ${
                          isActive 
                            ? 'bg-primary-50 dark:bg-primary-900 text-primary-500 dark:text-secondary-400' 
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </NavLink>
                  ))}
                  <div className="pt-2">
                    <button
                      onClick={() => { toggleSidebar(); setIsOpen(false); }}
                      className="btn btn-primary px-6 py-3 text-base w-full justify-center"
                    >
                      Show Info
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Navbar;