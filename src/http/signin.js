
import axiosInstance from './axiosInstance';

const signin = async (Data) => {
  try {
    const response = await axiosInstance.post('/user/signin', Data);
    console.log('signin successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error signin:', error);
    throw error;
  }
};

export default signin;
