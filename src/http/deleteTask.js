
import axiosInstance from './axiosInstance';

const deleteTask = async (taskId) => {
  try {
    const response = await axiosInstance.delete(`/tasks/${taskId}`);
    console.log('Task deleted successfully:', taskId);
    return response.data;
  } catch (error) {
    console.error(`Error deleting task ${taskId}:`, error);
    throw error;
  }
};

export default deleteTask;
