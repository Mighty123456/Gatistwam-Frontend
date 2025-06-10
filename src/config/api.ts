export const API_CONFIG = {
  BASE_URL: 'https://gatistwam-backend.onrender.com',
  TIMEOUT: 30000, // 30 seconds
  HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
};

// API endpoints
export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: '/api/users/login',
    REGISTER: '/api/users/register',
    LOGOUT: '/api/users/logout',
  },
  // Blog endpoints
  BLOG: {
    LIST: '/api/blog',
    DETAIL: (id: string) => `/api/blog/${id}`,
    CREATE: '/api/blog',
    UPDATE: (id: string) => `/api/blog/${id}`,
    DELETE: (id: string) => `/api/blog/${id}`,
  },
  // Portfolio endpoints
  PORTFOLIO: {
    LIST: '/api/portfolio',
    DETAIL: (id: string) => `/api/portfolio/${id}`,
    CREATE: '/api/portfolio',
    UPDATE: (id: string) => `/api/portfolio/${id}`,
    DELETE: (id: string) => `/api/portfolio/${id}`,
  },
  // Contact endpoints
  CONTACT: {
    SEND: '/api/contact',
  },
  // Admin endpoints
  ADMIN: {
    DASHBOARD: '/api/admin/dashboard',
    USERS: '/api/admin/users',
  }
}; 