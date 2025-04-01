import axios, { AxiosError, AxiosResponse } from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:5000/api", // Ensure this matches your backend
    timeout: 5000, // 5-second timeout
     headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, 
});

// Function to fetch tasks
export async function getTasks() {
    try {
        const response: AxiosResponse = await apiClient.get("/tasks");
        console.log("Fetched tasks:", response.data); // Debugging log
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        console.error("Error fetching tasks:", err.response?.data || err.message);
        throw new Error(`Error fetching tasks: ${err.response?.data || err.message}`);
    }
}

// Function to create a new task
export async function createTask(taskData: { name: string; content: string; startDate?: string; endDate?: string }) {
    try {
        const response: AxiosResponse = await apiClient.post("/tasks", taskData);
        console.log("Task created:", response.data); // Debugging log
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        console.error("Error creating task:", err.response?.data || err.message);
        throw new Error(`Error creating task: ${err.response?.data || err.message}`);
    }
}
