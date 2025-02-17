interface TaskListProps {
    taskList: string[];
    onDeleteTask: (task: string) => void;
  }
  
  const TaskList = ({ taskList, onDeleteTask }: TaskListProps) => {
    return (
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => onDeleteTask(task)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TaskList;
  