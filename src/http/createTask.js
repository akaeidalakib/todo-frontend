// createTask.js
import axiosInstance from './axiosInstance';

const createTask = async (taskData) => {
  try {
    const response = await axiosInstance.post('/tasks', taskData);
    console.log('Task created successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export default createTask;
