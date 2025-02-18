import axios, { AxiosError, AxiosResponse } from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:5000/api", // Ensure this matches your backend
    timeout: 5000, // 5-second timeout
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
