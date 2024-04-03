import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import updateTask from "../http/updateTask";
import createTask from "../http/createTask";
const Modal = ({ isOpen, onClose, handleUpdate, data }) => {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (data) {
      Object.keys(data).forEach((key) => {
        setValue(key, data[key]);
      });
    }
  }, [data, setValue]);

  const onSubmit = async (formData) => {
    if (data) {
      const res = await updateTask(data._id, formData);
      if (res.status === "success") {
        handleUpdate();
        onClose();
      }
    } else {
      const res = await createTask(formData);
      if (res.status === "success") {
        handleUpdate();
        onClose();
      }
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? "" : "hidden"}`}>
      <div className="bg-white p-6 rounded-lg">
        <div className="flex justify-end">
          <button onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div>
          <div className="min-w-80">
            <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
              <h2 className="text-2xl font-semibold mb-4">{data ? "Update Task" : "Add New Task"}</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                  <input type="text" id="title" {...register("title", { required: true })} className="rounded-lg border border-[#1B8EF8] px-4 py-2 text-[#1B8EF8] focus:outline-none" />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea id="description" {...register("description")} rows="3" className="rounded-lg border border-[#1B8EF8] px-4 py-2 text-[#1B8EF8] focus:outline-none"></textarea>
                </div>
                <div className="mb-4">
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
                  <select id="priority" {...register("priority")} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                  <select id="status" {...register("status")} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>Pending</option>
                    <option>Completed</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{data ? "Update" : "Add Task"}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;



// /* eslint-disable react-hooks/rules-of-hooks */
// import React, { useEffect, useState } from "react";
// import updateTask from "../pages/http/updateTask";
// import createTask from "../pages/http/createTask";

// const Modal = ({ isOpen, onClose,handleUpdate, data }) => {
//     console.log('line 6', data);
//   if (!isOpen) return null;
// // const handleOnBlur=(e)=>{
// //     e.preventDefault();
// //     const field = e.target.name;
// //     const value = e.target.value;
// //     const newFormData = { ...formData };
// //     newFormData[field] = value;
// //     setFormData(newFormData);
// //     console.log(newFormData);
// // }
// const [formData, setFormData] = useState({});
// useEffect(()=>{
//   if (data) {
//     setFormData(data)
//   }
// },[data])

//   const handleChange = (e) => {
//     e.preventDefault();
//     const field = e.target.name;
//     const value = e.target.value;
//     const newFormData = { ...formData };
//     newFormData[field] = value;
//     setFormData(newFormData);
//     console.log(newFormData);
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     const res =await updateTask(data._id, formData);
//     console.log(formData);
//     if (res.status ==="success") {
//       handleUpdate()
//       onClose()
//     }
//   };
//   const handleAddTaskSubmit = async(e) => {
//     e.preventDefault();
//     const res =await createTask( formData);
//     console.log(formData);
//     if (res.status ==="success") {
//       handleUpdate()
//       onClose()
//     }
//   };
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg">
//         <div className="flex justify-end">
//           <button onClick={onClose}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>
//         <div>
//           <div className="min-w-80">
//           <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
//       <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>
//       <form onSubmit={data?handleSubmit:handleAddTaskSubmit}>
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
//           <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="rounded-lg border border-[#1B8EF8] px-4 py-2 text-[#1B8EF8] focus:outline-none" required />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//           <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="3" className="rounded-lg border border-[#1B8EF8] px-4 py-2 text-[#1B8EF8] focus:outline-none"></textarea>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
//           <select id="priority" name="priority" value={formData.priority} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
//             <option>Low</option>
//             <option>Medium</option>
//             <option>High</option>
//           </select>
//         </div>
//         <div className="mb-4">
//         <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
//           <select id="status" name="status" value={formData.status} onChange={handleChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
//             <option>Pending</option>
//             <option>Completed</option>
//           </select>
//         </div>
//         <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{data?"Update":"Add Task"}</button>
//       </form>
//     </div>
//           </div>
          
//           {/* taskform */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
