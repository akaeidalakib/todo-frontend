
import axiosInstance from './axiosInstance';

const updateTask = async (id, updatedTaskData) => {
  try {
    const response = await axiosInstance.patch(`/tasks/${id}`, updatedTaskData);
    console.log('Task updated successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};

export default updateTask;
