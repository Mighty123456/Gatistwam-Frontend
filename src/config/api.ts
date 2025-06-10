const API_URLS = {
  development: 'http://localhost:3000',
  production: 'https://gatistwam-backend.onrender.com'
};

// Check if we're in development mode
const isDevelopment = import.meta.env.DEV || process.env.NODE_ENV === 'development';

// Get the base URL based on environment
export const API_BASE_URL = isDevelopment ? API_URLS.development : API_URLS.production;

// Define all API endpoints
export const API_ENDPOINTS = {
  // Contact endpoints
  contact: `${API_BASE_URL}/api/contact`,
  
  // Blog endpoints
  blog: {
    all: `${API_BASE_URL}/api/blog`,
    byStatus: (status: string) => `${API_BASE_URL}/api/blog/status/${status}`,
    byId: (id: string) => `${API_BASE_URL}/api/blog/${id}`,
    byCategory: (category: string) => `${API_BASE_URL}/api/blog/category/${category}`,
  },
  
  // Portfolio endpoints
  portfolio: {
    all: `${API_BASE_URL}/api/portfolio`,
    byStatus: (status: string) => `${API_BASE_URL}/api/portfolio/status/${status}`,
    byId: (id: string) => `${API_BASE_URL}/api/portfolio/${id}`,
    byCategory: (category: string) => `${API_BASE_URL}/api/portfolio/category/${category}`,
  },
  
  // Admin endpoints
  admin: {
    login: `${API_BASE_URL}/api/admin/login`,
    dashboard: `${API_BASE_URL}/api/admin/dashboard`,
  }
}; 