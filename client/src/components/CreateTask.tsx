import { useState } from "react";
import { createTask } from "../../services/apiService";

const CreateTask = ({ onTaskCreated }: { onTaskCreated: (task: any) => void }) => {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const newTask = await createTask({ name, content, startDate, endDate });
            onTaskCreated(newTask); // ✅ Notify parent component
            setName("");
            setContent("");
            setStartDate("");
            setEndDate("");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 bg-base-200 rounded-lg">
            <h2 className="text-lg font-bold mb-2">Create New Task</h2>

            {error && <div className="alert alert-error">{error}</div>}

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter task name"
                    className="input input-bordered w-full"
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter task content"
                    className="textarea textarea-bordered w-full"
                    required
                />

                <div>
                    <label className="block text-sm font-medium">Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="input input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="input input-bordered w-full"
                    />
                </div>

                <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                    {loading ? "Creating..." : "Create Task"}
                </button>
            </form>
        </div>
    );
};

export default CreateTask;
