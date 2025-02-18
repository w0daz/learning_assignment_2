import { Router } from 'express';
import { getTasks } from '../controllers/taskController';

const router = Router();

// Define a GET route for fetching tasks
router.get('/tasks', getTasks);

export default router;
