import { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import { getTasks } from "../../services/apiService";

const Tasks = () => {
  const [taskList, setTaskList] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTasks()
      .then((data) => {
        setTaskList(data.tasks); // Assign API response to taskList
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask) return;
    setTaskList([...taskList, newTask]);
    setNewTask("");
  };

  const handleDeleteTask = (task: string) => {
    setTaskList(taskList.filter((t) => t !== task));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>

      {/* Show error alert if error exists */}
      {error && (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      )}

      {/* Show loading text if tasks are still loading */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
            <input
              type="text"
              value={newTask}
              placeholder="New task"
              onChange={(e) => setNewTask(e.target.value)}
              className="input input-bordered flex-1"
            />
            <button type="submit" className="btn btn-success">
              Add Task
            </button>
          </form>

          {/* Display TaskList only when not loading */}
          <TaskList taskList={taskList} onDeleteTask={handleDeleteTask} />
        </>
      )}
    </div>
  );
};

export default Tasks;
