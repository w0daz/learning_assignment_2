import { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import { getTasks, createTask } from "../../services/apiService"; // ✅ Import createTask
import { TaskModel } from "../models/TaskModels";
import CreateTask from "../components/CreateTask";

const Tasks = () => {
    const [taskList, setTaskList] = useState<TaskModel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    //  Fetch tasks from API
    const fetchTasks = async () => {
        try {
            const data = await getTasks();
            setTaskList(data.tasks);
            setLoading(false);
        } catch (err: any) {
            setError(err.message);
            setLoading(false);
        }
    };

    // Fetch tasks on component mount
    useEffect(() => {
        fetchTasks();
    }, []);

    // Handle new task creation
    const handleNewTask = async (taskData: { name: string; content: string; startDate?: string; endDate?: string }) => {
        try {
            const newTask = await createTask(taskData);
            setTaskList((prevTasks) => [...prevTasks, newTask]); // ✅ Update task list after creating
        } catch (err: any) {
            setError(err.message);
        }
    };

    // Handle task deletion
    const handleDeleteTask = (taskId: number) => {
        setTaskList(taskList.filter((task) => task.taskId !== taskId));
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Tasks</h2>

            {error && <div className="alert alert-error">{error}</div>}

            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {/*  Pass handleNewTask to CreateTask */}
                    <CreateTask onTaskCreated={handleNewTask} />
                    <TaskList taskList={taskList} onDeleteTask={handleDeleteTask} />
                </>
            )}
        </div>
    );
};

export default Tasks;
