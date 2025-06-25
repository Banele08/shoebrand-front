import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/ProductSliceroduct/ProductSlice';
import authReducer from '../Features/auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer, 
    product: productReducer,
    
  },
});

export default store;
