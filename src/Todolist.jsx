// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Todolist.css';

// const API_URL = 'http://localhost:5000/tasks'; 

// const Todolist = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const [editIndex, setEditIndex] = useState(null);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setTasks(response.data);
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//     }
//   };

//   const addTask = async () => {
//     if (newTask.trim() !== '') {
//       if (editIndex !== null) {
        
//         const updatedTasks = [...tasks];
//         updatedTasks[editIndex].name = newTask;
//         setTasks(updatedTasks);
//         setEditIndex(null);
//       } else {

//         try {
//           const response = await axios.post(API_URL, { name: newTask });
//           setTasks((prevTasks) => [...prevTasks, response.data]);
//           setNewTask('');
//         } catch (error) {
//           console.error('Error adding task:', error);
//         }
//       }
//     }
//   };

//   const deleteTask = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   const editTask = (index) => {
//     setNewTask(tasks[index].name);
//     setEditIndex(index);
//   };

//   return (
//     <div className="main-container">
//       <div className="main">
//         <div className="container">
//           <h2>Manage Your Tasks!</h2>
//           <div className="tasks">
//             <input
//               type="text"
//               placeholder="Add or Edit a Task..."
//               value={newTask}
//               onChange={(e) => setNewTask(e.target.value)}
//             />
//             <button className="add-btn" onClick={addTask}>
//               {editIndex !== null ? 'Update Task' : 'Add Task'}
//             </button>
//           </div>
//           <ul>
//             {tasks.map((task, index) => (
//               <li key={task._id} className="task-item">
//                 <span className="task-text">{task.name}</span>
//                 <div className="task-actions">
//                   <button className="edit-btn" onClick={() => editTask(index)}>
//                     <i className="fa-solid fa-pen"></i>
//                   </button>
//                   <button
//                     className="delete-btn"
//                     onClick={() => deleteTask(task._id)}
//                   >
//                     <i className="fa-solid fa-trash"></i>
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Todolist;



import React, { useState } from 'react';
import './Todolist.css';

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== '') {
      if (editIndex !== null) {
        // Edit task logic
        const updatedTasks = [...tasks];
        updatedTasks[editIndex].name = newTask;
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        // Add new task
        setTasks((prevTasks) => [...prevTasks, { _id: Date.now(), name: newTask }]);
      }
      setNewTask(''); // Clear the input field
    }
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
  };

  const editTask = (index) => {
    setNewTask(tasks[index].name);
    setEditIndex(index);
  };

  return (
    <div className="main-container">
      <div className="main">
        <div className="container">
          <h2>Manage Your Tasks!</h2>
          <div className="tasks">
            <input
              type="text"
              placeholder="Add or Edit a Task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="add-btn" onClick={addTask}>
              {editIndex !== null ? 'Update Task' : 'Add Task'}
            </button>
          </div>
          <ul>
            {tasks.map((task, index) => (
              <li key={task._id} className="task-item">
                <span className="task-text">{task.name}</span>
                <div className="task-actions">
                  <button className="edit-btn" onClick={() => editTask(index)}>
                    <i className="fa-solid fa-pen"></i>
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(task._id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
