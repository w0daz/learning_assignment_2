const TaskList = ({ taskList, onDeleteTask }: { taskList: string[], onDeleteTask: (task: string) => void }) => {
  return (
    <ul className="space-y-2 w-full">
      {taskList.map((task, index) => (
        <li key={index} className="flex justify-between items-center p-3 bg-white shadow-md rounded-lg border border-gray-200">
          <span>{task}</span>
          <button onClick={() => onDeleteTask(task)} className="btn btn-error">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
