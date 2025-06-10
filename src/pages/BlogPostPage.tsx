import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Tag, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import PageHeader from '../components/layout/PageHeader';
import { toast } from 'react-hot-toast';
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

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

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
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.blog.byId(id || ''));
        setPost(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Failed to load blog post');
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchBlogPost();
    }
  }, [id]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
    setShowShareMenu(false);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? 'Removed from likes' : 'Added to likes');
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? 'Removed from bookmarks' : 'Added to bookmarks');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container-custom py-20">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container-custom py-20">
          <div className="text-center text-red-600 dark:text-red-400">
            {error || 'Blog post not found'}
          </div>
          <button
            onClick={() => navigate('/blog')}
            className="mt-4 flex items-center text-primary-500 hover:text-primary-600 dark:text-secondary-500 dark:hover:text-secondary-400"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageHeader 
        title={post.title}
        subtitle={post.excerpt}
        bgImage={getImageUrl(post.imageUrl)}
      />

      <article className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Featured Image with Hover Effect */}
            <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden group">
              <motion.img
                src={getImageUrl(post.imageUrl)}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9Ijc1IiB5PSI3NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2UgRXJyb3I8L3RleHQ+PC9zdmc+';
                }}
              />
              <div className="absolute top-4 left-4">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="bg-primary-500 dark:bg-secondary-500 text-white px-3 py-1 rounded-full text-sm cursor-pointer"
                >
                  {post.category}
                </motion.span>
              </div>
            </div>

            {/* Interactive Meta Information */}
            <div className="flex flex-wrap items-center justify-between gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <User size={16} />
                  <span>{post.author}</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Calendar size={16} />
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </motion.div>
              </div>

              {/* Interactive Actions */}
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLike}
                  className={`flex items-center gap-2 ${
                    isLiked 
                      ? 'text-primary-500 dark:text-secondary-500' 
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  <ThumbsUp size={16} />
                  <span>Like</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBookmark}
                  className={`flex items-center gap-2 ${
                    isBookmarked 
                      ? 'text-primary-500 dark:text-secondary-500' 
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  <Bookmark size={16} />
                  <span>Bookmark</span>
                </motion.button>
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleShare}
                    className="flex items-center gap-2 text-gray-500 dark:text-gray-400"
                  >
                    <Share2 size={16} />
                    <span>Share</span>
                  </motion.button>
                  <AnimatePresence>
                    {showShareMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-10"
                      >
                        <button
                          onClick={handleCopyLink}
                          className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Copy Link
                        </button>
                        <a
                          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Share on Twitter
                        </a>
                        <a
                          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Share on LinkedIn
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Interactive Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <Tag size={14} />
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Content with Typography */}
            <div className="prose dark:prose-invert max-w-none">
              <div className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed">
                {post.content}
              </div>
            </div>

            {/* Interactive Back Button */}
            <motion.div
              whileHover={{ x: -5 }}
              className="mt-12"
            >
              <button
                onClick={() => navigate('/blog')}
                className={`inline-flex items-center ${
                  theme === 'light' 
                    ? 'text-primary-500 hover:text-primary-600' 
                    : 'text-secondary-500 hover:text-secondary-400'
                } font-semibold transition-colors`}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </button>
            </motion.div>
          </motion.div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage; 