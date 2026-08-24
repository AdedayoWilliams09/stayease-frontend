import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './apiSlice.js';

export const store = configureStore({
  reducer: {
    api: apiReducer, // Our API test slice
  },
  // Enable Redux DevTools in development
  devTools: import.meta.env.DEV,
});
