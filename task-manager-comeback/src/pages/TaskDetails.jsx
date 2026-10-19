import { Link, useParams } from "react-router-dom";
import useTasks from "../hooks/useTasks";
import tasks from "../data/data";

function TaskDetails() {
    const { id } = useParams();
    const { tasks } = useParams();


    const task = tasks.find((item) => item.id === Number(id));

    if (!task) {
        return (
            <div>
                <h1>Task Not Found</h1>
                <Link to="/tasks">Back to Tasks</Link>
            </div>
        );
    }

return (
    <div>
        <h1>{task.title}</h1>

        <p>Category: {task.category}</p>
        <p>Priority: {task.priority}</p>
        <p>Status: {task.status}</p>

        <Link to="/tasks">Back to Tasks</Link>
    </div>
);

}

export default TaskDetails;