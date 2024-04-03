
import axiosInstance from './axiosInstance';

const signup = async (Data) => {
  try {
    const response = await axiosInstance.post('/user/signup', Data);
    console.log('Task created successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export default signup;
