// getAllTasks.js
import axiosInstance from './axiosInstance';

const getAllTasks = async (page) => {
  try {
    const response = await axiosInstance.get(`/tasks?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error getting tasks:', error);
    throw error;
  }
};

export default getAllTasks;
