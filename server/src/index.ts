import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Enable CORS for development
app.use(
    cors({
        origin: "http://localhost:3000", 
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

// Define a simple GET route
app.get("/api/tasks", (req, res) => {
    res.json({ message: "Task api route works!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
