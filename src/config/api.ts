const API_URLS = {
  development: 'http://localhost:3000',
  production: 'https://gatistwam-backend.onrender.com'
};

const isDevelopment = import.meta.env.DEV;

export const API_BASE_URL = isDevelopment ? API_URLS.development : API_URLS.production;

export const API_ENDPOINTS = {
  contact: `${API_BASE_URL}/api/contact`,
  // Add other endpoints here as needed
}; 