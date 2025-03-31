import { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import { getTasks } from "../../services/apiService";
import { TaskModel } from "../models/TaskModels";

const Tasks = () => {
  const [taskList, setTaskList] = useState<TaskModel[]>([]);
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
    const newTaskObject: TaskModel = {
      taskId: Date.now(), // Temporary ID until backend assigns one
      name: newTask,
      content: "", // Empty content for now
      startDate: null,
      endDate: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setTaskList([...taskList, newTaskObject]);
    setNewTask("");
  };

  const handleDeleteTask = (taskId: number) => {
    setTaskList(taskList.filter((task) => task.taskId !== taskId));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>

      {error && (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      )}

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

          <TaskList taskList={taskList} onDeleteTask={handleDeleteTask} />
        </>
      )}
    </div>
  );
};

export default Tasks;
