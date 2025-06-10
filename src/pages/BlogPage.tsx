import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Send } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import { toast } from 'react-hot-toast';
import { saveToGoogleSheets, SubscriptionData } from '../utils/googleSheets';
import axios from 'axios';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { API_ENDPOINTS } from '../config/api';

interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  status: 'published' | 'draft';
}

const BlogPage: React.FC = () => {
  const { theme } = useTheme();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getImageUrl = (imageUrl: string) => {
    if (!imageUrl) return '';
    if (imageUrl.startsWith('http')) return imageUrl;
    if (imageUrl.startsWith('/uploads/')) {
      const cleanPath = imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`;
      return `${API_ENDPOINTS.blog.all}${cleanPath}`;
    }
    return imageUrl;
  };

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.blog.byStatus('published'));
        setBlogPosts(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const categories = ['All Posts', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = selectedCategory === 'All Posts'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsSubscribing(true);
    try {
      const subscriptionData: SubscriptionData = {
        email,
        timestamp: new Date().toISOString(),
        source: 'Blog Page'
      };

      await saveToGoogleSheets(subscriptionData);
      setIsSubscribed(true);
      setEmail('');
      toast.success('Successfully subscribed to our newsletter!');
    } catch (error) {
      console.error('Error subscribing:', error);
      toast.error('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubscribing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <PageHeader 
          title="Our Recent Blog"
          subtitle="Stay updated with the latest insights, trends, and strategies in digital marketing"
          bgImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <div className="container-custom py-20">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <PageHeader 
          title="Our Recent Blog"
          subtitle="Stay updated with the latest insights, trends, and strategies in digital marketing"
          bgImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <div className="container-custom py-20">
          <div className="text-center text-red-600 dark:text-red-400">
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageHeader 
        title="Our Recent Blog"
        subtitle="Stay updated with the latest insights, trends, and strategies in digital marketing"
        bgImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container-custom">
          {/* Interactive Categories */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-500 dark:bg-secondary-500 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <motion.article
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 group">
                    <motion.img
                      src={getImageUrl(post.imageUrl)}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9Ijc1IiB5PSI3NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2UgRXJyb3I8L3RleHQ+PC9zdmc+';
                      }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                    >
                      <Link
                        to={`/blog/${post._id}`}
                        className="text-white font-semibold px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                      >
                        Read Article
                      </Link>
                    </motion.div>
                    <div className="absolute top-4 left-4">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="bg-primary-500 dark:bg-secondary-500 text-white px-3 py-1 rounded-full text-sm cursor-pointer"
                      >
                        {post.category}
                      </motion.span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 line-clamp-2 text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-secondary-500 transition-colors duration-300`}>
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-1 cursor-pointer"
                      >
                        <User size={16} />
                        <span>{post.author}</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-1 cursor-pointer"
                      >
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-1 cursor-pointer"
                      >
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </motion.div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.05 }}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${post._id}`}
                      className={`inline-flex items-center ${
                        theme === 'light' 
                          ? 'text-primary-500 hover:text-primary-600' 
                          : 'text-secondary-500 hover:text-secondary-400'
                      } font-semibold transition-colors duration-300`}
                    >
                      Read More
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.div>
                    </Link>
                  </div>
                </motion.article>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center text-gray-500 dark:text-gray-400 py-12"
              >
                No blog posts found in this category.
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Newsletter Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Stay updated with our latest blog posts, news, and insights.
            </p>
            {!isSubscribed ? (
              <motion.form
                onSubmit={handleSubscribe}
                className="flex gap-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white transition-all duration-300"
                  required
                />
                <motion.button
                  type="submit"
                  disabled={isSubscribing}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 ${
                    theme === 'light'
                      ? 'bg-primary-500 hover:bg-primary-600'
                      : 'bg-secondary-500 hover:bg-secondary-600'
                  } text-white rounded-lg transition-all duration-300 ${
                    isSubscribing ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubscribing ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Subscribing...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      Subscribe
                    </div>
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-green-600 dark:text-green-400"
              >
                Thank you for subscribing to our newsletter!
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage; 