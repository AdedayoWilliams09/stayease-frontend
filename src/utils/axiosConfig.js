import axios from 'axios';

//get the base url from environment variable
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

//create axios instance with default configuration 
const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000, //10 secs timeout
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },  
    });

    axiosInstance.interceptors.request.use(
        (config) => {
        //log request in development
        if (import.meta.env.DEV) {
            console.log(`[Axios] Request: ${config.method?.toUpperCase()} ${config.url}`);
            console.log('[Axios] Data:', config.data);
        }
        return config;
        },
        (error) => {
        console.error('[Axios] Request Error:', error);
        return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (response) => {
            //log response in development
            if (import.meta.env.DEV) {
                console.log(`[Axios] Response: ${response.status} ${response.config.url}`);
                console.log('[Axios] Data:', response.data);
            }
            return response;
        },
        (error) => {
            //handle different types of errors 
            if (error.response) {
                //server responded with error status 
               console.error(' [Axios] Server Error:', {
        status: error.response.status,
        data: error.response.data,
        url: error.config?.url,
      });

     // Provide user-friendly message based on status
      const status = error.response.status;
      if (status === 404) {
        error.userMessage = 'Resource not found';
      } else if (status === 429) {
        error.userMessage = 'Too many requests. Please try again later.';
      } else if (status >= 500) {
        error.userMessage = 'Server error. Please try again later.';
      } else {
        error.userMessage = error.response.data?.message || 'An error occurred';
      }
    } else if (error.request) {
      // Request made but no response (network error)
      console.error(' [Axios] Network Error: No response received');
      error.userMessage = 'Network error. Please check your connection.';
    } else {
      // Something else happened
      console.error(' [Axios] Error:', error.message);
      error.userMessage = 'An unexpected error occurred';
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;