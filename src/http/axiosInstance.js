import axios from 'axios';
import refreshAccessToken from './refreshAccessToken';

const axiosInstance = axios.create({
  baseURL: 'https://todo-backend-5pn7.onrender.com/api', // Set your base URL
});

// Function to refresh access token using refresh token


// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Add access token to headers
    const accessToken = localStorage.getItem("accessToken"); // Replace with your actual access token
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    // Any error from the request will be handled here
    console.error('Request failed:', error.message);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    // Handle error response
    console.log(error.response.data.message);
    if (error.response.status === 401 && error.response.data.message === "Invalid access token") {
      try {
        // Refresh access token using refresh token
        const res = await refreshAccessToken();
        // Retry the original request with the new access token
        console.log(res);
        const originalRequest = error.config;
        originalRequest.headers.Authorization = `Bearer ${res.accessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Error refreshing access token:', refreshError.message);
        return Promise.reject(refreshError);
      }
    } else {
      console.error('Response failed:', error.message);
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
