import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from 'lucide-react';
import AnimatedElement from '../ui/AnimatedElement';
import Logo from '../ui/Logo';
import { useTheme } from '../../context/ThemeContext';
import { toast } from 'react-hot-toast';
import { saveToGoogleSheets, SubscriptionData } from '../../utils/googleSheets';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const footerClass = theme === 'light'
    ? 'bg-white text-gray-900'
    : 'bg-gray-900 text-white';

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    try {
      setIsSubscribing(true);
      
      // Prepare subscription data
      const subscriptionData: SubscriptionData = {
        email,
        timestamp: new Date().toISOString(),
        source: 'Newsletter Subscription'
      };

      // Save to Google Sheets
      const success = await saveToGoogleSheets(subscriptionData);
      
      if (success) {
        // Update UI state
        setIsSubscribed(true);
        setEmail('');
        toast.success('Successfully subscribed to our newsletter!');
        
        // Reset subscription status after 5 seconds
        setTimeout(() => {
          setIsSubscribed(false);
        }, 5000);
      } else {
        toast.error('Failed to subscribe. Please try again later.');
      }
      
    } catch (error) {
      console.error('Failed to subscribe:', error);
      toast.error('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className={`${footerClass} pt-16 pb-8 relative z-10 mt-auto`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <AnimatedElement className="col-span-1 lg:col-span-1">
            <div className="mb-6">
              <Logo size="lg" />
              <p className={theme === 'light' ? 'text-gray-600 mb-4' : 'text-gray-400 mb-4'}>
                Empowering businesses with innovative digital marketing solutions that drive growth and deliver results.
              </p>
              <div className="flex space-x-3">
                <a href="#" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>
                  <Facebook size={20} />
                </a>
                <a href="#" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>
                  <Twitter size={20} />
                </a>
                <a href="#" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>
                  <Instagram size={20} />
                </a>
                <a href="#" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>
                  <Linkedin size={20} />
                </a>
                <a href="#" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </AnimatedElement>

          {/* Quick Links */}
          <AnimatedElement className="col-span-1" delay={100}>
            <h3 className="text-lg font-semibold mb-4" style={{ color: theme === 'light' ? '#111827' : '#fff' }}>Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>About Us</Link></li>
              <li><Link to="/services" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>Services</Link></li>
              <li><Link to="/portfolio" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>Portfolio</Link></li>
              <li><Link to="/blog" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>Blog</Link></li>
              <li><Link to="/faq" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>FAQs</Link></li>
              <li><Link to="/contact" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>Contact Us</Link></li>
            </ul>
          </AnimatedElement>

          {/* Services */}
          <AnimatedElement className="col-span-1" delay={200}>
            <h3 className="text-lg font-semibold mb-4" style={{ color: theme === 'light' ? '#111827' : '#fff' }}>Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/management-solutions" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>Management Solutions</Link></li>
              <li><Link to="/services/graphic-design" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>Graphic Design</Link></li>
              <li><Link to="/services/hr-solutions" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>HR Solutions</Link></li>
              <li><Link to="/services/research" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>Research</Link></li>
              <li><Link to="/services/academy" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>Academy</Link></li>
              <li><Link to="/services/tech-solutions" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>Tech Solutions</Link></li>
              <li><Link to="/services/ecommerce-support" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>Ecommerce Support</Link></li>
              <li><Link to="/services/digital-branding" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>Digital Branding</Link></li>
            </ul>
          </AnimatedElement>

          {/* Contact Info & Newsletter */}
          <AnimatedElement className="col-span-1" delay={300}>
            <h3 className="text-lg font-semibold mb-4" style={{ color: theme === 'light' ? '#111827' : '#fff' }}>Contact Us</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <MapPin size={20} className={`mt-1 mr-3 flex-shrink-0 ${theme === 'light' ? 'text-primary-500' : 'text-secondary-500'}`} />
                <span className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                  Shrimat Arcade, 01, Anand - Sojitra Rd,<br />
                  Nand Tanuj Society, Karamsad,<br />
                  Anand, Gujarat 388121
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className={`mr-3 flex-shrink-0 ${theme === 'light' ? 'text-primary-500' : 'text-secondary-500'}`} />
                <a href="tel:+919274524365" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>+91 9274524365</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className={`mr-3 flex-shrink-0 ${theme === 'light' ? 'text-primary-500' : 'text-secondary-500'}`} />
                <a href="mailto:advertmarketing1988@gmail.com" className={theme === 'light' ? 'text-gray-600 hover:text-secondary-500 transition-colors' : 'text-gray-400 hover:text-secondary-500 transition-colors'}>advertmarketing1988@gmail.com</a>
              </li>
            </ul>

            {/* Newsletter Section */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <h4 className="text-sm font-semibold mb-2 text-primary-500 dark:text-secondary-500">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                Get information about latest news and other offers
              </p>
              {isSubscribed ? (
                <div className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-3 rounded-lg text-sm">
                  Thank you for subscribing! We'll keep you updated.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-secondary-500"
                    required
                    disabled={isSubscribing}
                  />
                  <button
                    type="submit"
                    className={`w-full px-3 py-2 text-sm rounded-lg text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
                      theme === 'light' 
                        ? 'bg-primary-500 hover:bg-primary-600' 
                        : 'bg-secondary-500 hover:bg-secondary-600'
                    }`}
                    disabled={isSubscribing}
                  >
                    {isSubscribing ? (
                      <>
                        <div className="animate-spin">
                          <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                        </div>
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Subscribe</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedElement>
        </div>

        {/* Copyright */}
        <div className={theme === 'light' ? 'mt-12 pt-8 border-t border-gray-200 text-center text-gray-500' : 'mt-12 pt-8 border-t border-gray-800 text-center text-gray-500'}>
          <p>&copy; {currentYear} Gatistwam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;