import { Router } from "express";
import { getTasks, createTask } from "../controllers/taskController"; // Import controllers

const router = Router();

router.get("/tasks", getTasks); 
router.post("/tasks", createTask);

// Adding POST route for creating a new task
router.post("/tasks", createTask);

export default router;
