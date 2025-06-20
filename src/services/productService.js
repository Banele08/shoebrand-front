import api from './api';

// Get all products
export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get products by brand
export const getProductsByBrand = async (brand) => {
  try {
    const response = await api.get(`/products/${brand}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get single product
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/item/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Admin: Create product
export const createProduct = async (productData) => {
  try {
    const response = await api.post('/admin/products', productData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Admin: Update product
export const updateProduct = async (id, productData) => {
  try {
    const response = await api.put(`/admin/products/${id}`, productData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Admin: Delete product
export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/admin/products/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};