import express from "express";
import cors from "cors";
import taskRoute from "./routes/taskRoute"; // Import taskRoute
import dotenv from "dotenv";
import connectWithRetry from "./config/db";

dotenv.config();

const app = express();

// Enable CORS with credentials
app.use(
    cors({
        origin: "http://localhost:5173", // Frontend URL
        credentials: true, // Allow credentials
    })
);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(express.json()); // Enable JSON body parsing

// Add routes
app.use("/api", taskRoute);


connectWithRetry();


export default app;
