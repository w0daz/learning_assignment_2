import { TaskModel } from "../models/TaskModels";

const TaskList = ({ taskList, onDeleteTask }: { taskList: TaskModel[], onDeleteTask: (taskId: number) => void }) => {
  return (
    <ul className="space-y-2 w-full">
      {taskList.map((task) => (
        <li key={task.taskId} className="flex justify-between items-center p-3 bg-white shadow-md rounded-lg border border-gray-200">
          <div>
            <h3 className="font-bold">{task.name}</h3>
            <p className="text-sm">{task.content}</p>
          </div>
          <button onClick={() => onDeleteTask(task.taskId)} className="btn btn-error">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
