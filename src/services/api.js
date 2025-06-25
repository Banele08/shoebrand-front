import axios from 'axios';
import { store } from '../app/Store.js';
import { logout } from '../features/auth/authSlice';

// Create axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1',
});

// Request interceptor for API calls
api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error)
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // If 401 and not already retried
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // Attempt refresh token here if implemented
        // const newToken = await refreshAccessToken();
        // localStorage.setItem('token', newToken);
        // return api(originalRequest);
        
        // For now, just logout
        store.dispatch(logout());
        window.location.href = '/login';
      } catch (err) {
        return Promise.reject(err);
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;