import useTasks from "../hooks/useTasks";

function Home() {
  const { tasks } = useTasks();

  return (
    <div>
      <h1>Welcome to Smart Task Manager</h1>

      <p>Manage your daily tasks easily.</p>

      <h3>Total Tasks: {tasks.length}</h3>
    </div>
  );
}

export default Home;