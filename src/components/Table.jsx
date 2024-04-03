"use client"
import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import deleteTask from '../http/deleteTask';
import getAllTasks from '../http/getAllTasks';
const Table = () => {
  const [tasks, setTasks] = useState([]);
  const [totalCount,setTotalCount]=useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (page) => {
    try {
      const tasksData = await getAllTasks(page);
      setTasks(tasksData.data);
      setTotalCount(tasksData.count)
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      const res =await deleteTask(taskId);
      if (res.status ==="success") {
        const tasksData = await getAllTasks(page);
      setTasks(tasksData.data);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
    const [data, setData] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenTask, setIsOpenTask] = useState(false);

    const openModal = (data) => {
      if (data) {
        setData(data)
        setIsOpen(true);
      }   
    };
    const openModal2 = () => {
        setIsOpenTask(true);
    };
    console.log("table line 46",data);
    const closeModal = () => {
      setIsOpen(false)
      setIsOpenTask(false);
    };
    
    const handleUpdate = async () => {
      try {
        const tasksData = await getAllTasks();
        setTasks(tasksData.data);
        setTotalCount(tasksData.count)
      } catch (error) {
        console.error('Error updating tasks:', error);
      }
    };
    const nextPage = () => {
      if (page < Math.ceil(totalCount / 5)) { 
        setPage(prevPage => prevPage + 1);
      }
    };
  
    const prevPage = () => {
      if (page > 1) {
        setPage(prevPage => prevPage - 1);
      }
    };
    return (
        <div>
          <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
  <div className="flex items-center justify-between pb-6">
    <div>
      <h2 className="font-semibold text-gray-700">User All Tasks</h2>
      <span className="text-xs text-gray-500">View only registered users</span>
    </div>
    <div className="flex items-center justify-between">
      <div className="ml-10 space-x-8 lg:ml-40">
        <button onClick={openModal2} className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">

          Add New Task
        </button>
      </div>
    </div>
  </div>
  <div className="overflow-y-hidden rounded-lg border">
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
            <th className="px-5 py-3 text-center">ID</th>
            <th className="px-5 py-3 text-center">Title</th>
            <th className="px-5 py-3 text-center">priority</th>
            <th className="px-5 py-3 text-center">status</th>
            <th className="px-5 py-3 text-center">Update</th>
            <th className="px-5 py-3 text-center">Delete</th>
          </tr>
        </thead>
        <tbody className="text-gray-500">
          {tasks.map((item,index)=>{
            const getPriorityColor = (priority) => {
              switch (priority) {
                case 'Low':
                  return 'bg-green-200 text-green-900';
                case 'Medium':
                  return 'bg-yellow-200 text-yellow-900';
                case 'High':
                  return 'bg-red-200 text-red-900';
                default:
                  return '';
              }
            };
            return(
              <tr key={index}>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p className="whitespace-no-wrap">{index +1}</p>
            </td>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p className="whitespace-no-wrap">{item.title}</p>
            </td>

            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getPriorityColor(item.priority)}`}>{item.priority}</span>
            </td>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.status === 'Pending' ? 'text-yellow-900 bg-yellow-200' : 'text-green-900 bg-green-200'}`}>{item.status}</span>
            </td>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <button onClick={()=>openModal(item)} className="bg-blue-500 px-4 py-2 rounded-full text-white">update</button>
            </td>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <button onClick={()=>handleDelete(item._id)} className="bg-red-500 px-4 py-2 rounded-full text-white">delete</button>
            </td>
          </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
      <span className="text-xs text-gray-600 sm:text-sm"> {`Showing ${page} to 5 of ${Math.ceil(totalCount / 5)} Entries`} </span>
      <div className="mt-2 inline-flex sm:mt-0">
        <button onClick={prevPage} className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
        <button onClick={nextPage} className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
      </div>
    </div>
  </div>
</div>
<Modal isOpen={isOpen} onClose={closeModal}data={data} handleUpdate={handleUpdate}/>
<Modal isOpen={isOpenTask} onClose={closeModal} handleUpdate={handleUpdate}/>
        </div>

  
    );
};

export default Table;
//text-yellow-900 text-red-900