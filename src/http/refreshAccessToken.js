
import axiosInstance from './axiosInstance';
const refreshToken = localStorage.getItem("refreshToken");
const refreshAccessToken = async () => {
  try {
    
    const response = await axiosInstance.post('/user/refresh', {refreshToken:refreshToken});
    console.log('refresh token successfully:', response.data);
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data.accessToken;
  } catch (error) {
    console.error('Error refresh token:', error);
    throw error;
  }
};

export default refreshAccessToken;
