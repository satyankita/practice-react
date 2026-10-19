import React from 'react'
import { useState } from 'react'

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((item, i) => i !== index);
    setTasks(filteredTasks);
  };

  const editTask = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
    
  };

  return (
    <div className='profile'>Todo

     <div className='contains'>
       <input type="text" 
      value={task}
      onChange={(e) => setTask(e.target.value)} 
      placeholder='enter task'
      />

      <button onClick={addTask}>add</button>
      </div>

      <div>
        {tasks.map((item, index) => (
     <div  key={index}>
       <h3>{item}</h3>

       <button onClick={() => editTask(index)}>
        edit</button>

        <button onClick={() => deleteTask(index)}>
          delete
        </button>
     </div>

      
      ))}
      </div>
     

    </div>
  )
}

export default Todo