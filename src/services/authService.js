import api from './api';

// Register user
export const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Login user
export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get current user
export const getMe = async () => {
  try {
    const response = await api.get('/auth/me');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Logout user
export const logout = async () => {
  try {
    const response = await api.get('/auth/logout');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Update user details
export const updateDetails = async (userData) => {
  try {
    const response = await api.put('/auth/updatedetails', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Update password
export const updatePassword = async (passwords) => {
  try {
    const response = await api.put('/auth/updatepassword', passwords);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};