const TaskList = ({ taskList, onDeleteTask }: { taskList: TaskModel[], onDeleteTask: (taskId: number) => void }) => {
  return (
    <ul className="space-y-2 w-full">
      {taskList.map((task) => (
        <li key={task.taskId} className="flex justify-between items-center p-3 bg-white shadow-md rounded-lg border border-gray-200">
          <div className="flex items-center flex-1">
            <h3 className="font-bold w-1/1">{task.name}</h3>
            <p className="text-sm text-center flex-1">{task.content}</p>
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
