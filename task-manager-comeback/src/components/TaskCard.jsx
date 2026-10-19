import { Link } from "react-router-dom";

function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="task-card">
      <h3>
        <Link to={`/tasks/${task.id}`}>
          {task.title}
        </Link>
      </h3>

      <p>Category: {task.category}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>

      <button onClick={() => onEdit(task)}>
        Edit
      </button>

      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskCard;