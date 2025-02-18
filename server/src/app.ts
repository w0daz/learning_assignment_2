import express from 'express';
import cors from 'cors';
import taskRoute from './routes/taskRoute'; // Import taskRoute

const app = express();

// Define CORS settings
app.use(cors({
    origin: 'http://localhost:5000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// Add routes
app.use('/api', taskRoute);

// Export the app
export default app;
