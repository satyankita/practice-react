import React from 'react'
import { useState } from 'react'

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div>Todo

      <input type="text" 
      value={task}
      onChange={(e) => setTask(e.target.value)} 
      placeholder='enter task'
      />

      <button onClick={addTask}>add</button>

      {tasks.map((item, index) => (
      <h3 key={index}>{item}</h3>
      ))}

    </div>
  )
}

export default Todo