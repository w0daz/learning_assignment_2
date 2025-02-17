import { useState } from "react";
import TaskList from "../components/TaskList";

const Tasks = () => {
  const [taskList, setTaskList] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

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
    <div>
      <h2>Tasks</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          placeholder="New task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <TaskList taskList={taskList} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default Tasks;
