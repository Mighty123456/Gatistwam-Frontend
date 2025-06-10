import { API_URL, API_ENDPOINTS } from '../config/env';

// Default headers for all requests
const defaultHeaders = {
  'Content-Type': 'application/json',
};

// Helper function to handle API responses
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
};

// API service class
class ApiService {
  // Generic GET request
  static async get(endpoint: string, headers = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'GET',
      headers: { ...defaultHeaders, ...headers },
    });
    return handleResponse(response);
  }

  // Generic POST request
  static async post(endpoint: string, data: any, headers = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: { ...defaultHeaders, ...headers },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  }

  // Generic PUT request
  static async put(endpoint: string, data: any, headers = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'PUT',
      headers: { ...defaultHeaders, ...headers },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  }

  // Generic DELETE request
  static async delete(endpoint: string, headers = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'DELETE',
      headers: { ...defaultHeaders, ...headers },
    });
    return handleResponse(response);
  }

  // File upload request
  static async uploadFile(endpoint: string, file: File, headers = {}) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: { ...headers },
      body: formData,
    });
    return handleResponse(response);
  }
}

export default ApiService; 