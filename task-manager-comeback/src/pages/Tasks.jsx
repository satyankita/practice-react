import { useState } from "react";
import useTasks from "../hooks/useTasks";
import TaskCard from "../components/TaskCard";

function Tasks() {
  const { tasks, dispatch } = useTasks();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Study");
  const [priority, setPriority] = useState("Medium");

  const addTask = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      category,
      priority,
      status: "Pending",
    };

    dispatch({
      type: "ADD_TASK",
      payload: newTask,
    });

    setTitle("");
    setCategory("Study");
    setPriority("Medium");
  };

  const deleteTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  const editTask = (task) => {
    const newTitle = prompt("Enter new title", task.title);

    if (!newTitle || !newTitle.trim()) {
      return;
    }

    dispatch({
      type: "EDIT_TASK",
      payload: {
        ...task,
        title: newTitle,
      },
    });
  };

  return (
    <div>
      <h1>Tasks</h1>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Study">Study</option>
          <option value="Coding">Coding</option>
          <option value="Personal">Personal</option>
          <option value="Health">Health</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <button type="submit">Add Task</button>
      </form>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No Tasks Available</p>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={editTask}
              onDelete={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Tasks;