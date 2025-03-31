import express from 'express';
import cors from 'cors';
import taskRoute from './routes/taskRoute'; // Import taskRoute
import dotenv from 'dotenv';
import connectWithRetry from "./config/db";

dotenv.config();

const app = express();

// Define CORS settings
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// Add routes
app.use('/api', taskRoute);

// Call the database connection function
connectWithRetry();

// Export the app
export default app;
