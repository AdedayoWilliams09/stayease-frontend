import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosConfig.js';


// Async thunk to test backend connection
export const testBackendConnection = createAsyncThunk(
  'api/testBackendConnection', // Action type
  async (_, { rejectWithValue }) => {
    try {
      // Make the API request using our configured Axios instance
      const response = await axiosInstance.get('/api/test');
      return response.data;
    } catch (error) {
      // Return the error message for the rejected action
      return rejectWithValue(error.userMessage || error.message || 'Connection failed');
    }
  }
);

// Initial state
const initialState = {
  loading: false,
  success: false,
  data: null,
  error: null,
  lastTested: null,
};

// Create the slice
const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    // Reset the API test state
    resetApiTest: (state) => {
      state.loading = false;
      state.success = false;
      state.data = null;
      state.error = null;
      state.lastTested = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // When the test starts
      .addCase(testBackendConnection.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      // When the test succeeds
      .addCase(testBackendConnection.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
        state.error = null;
        state.lastTested = new Date().toISOString();
      })
      // When the test fails
      .addCase(testBackendConnection.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.data = null;
        state.error = action.payload || 'Connection failed';
        state.lastTested = new Date().toISOString();
      });
  },
});

// Export actions
export const { resetApiTest } = apiSlice.actions;

// Export selectors
export const selectApiTest = (state) => state.api;
export const selectApiLoading = (state) => state.api.loading;
export const selectApiSuccess = (state) => state.api.success;
export const selectApiData = (state) => state.api.data;
export const selectApiError = (state) => state.api.error;

// Export the reducer
export default apiSlice.reducer;