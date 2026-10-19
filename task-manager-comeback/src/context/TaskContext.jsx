import { createContext, useReducer } from "react";
import tasksData from "../data/data";

export const TaskContext = createContext();

function taskReducer(tasks, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...tasks, action.payload];

    case "EDIT_TASK":
      return tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );

    case "DELETE_TASK":
      return tasks.filter((task) => task.id !== action.payload);

    default:
      return tasks;
  }
}

function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, tasksData);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;