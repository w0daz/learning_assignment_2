import { Request, Response } from "express";
import Task from "../models/taskModel"; // Ensure correct model import

// fetch tasks
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.findAll();
    res.json({ tasks });
  } catch (error) {
    console.error("Error retrieving tasks:", error);
    res.status(500).json({ error: "Failed to retrieve tasks" });
  }
};

// create a task (Express standard)
export const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, content, startDate, endDate } = req.body;

    if (!name || !content) {
      res.status(400).json({ error: "Name and content are required" });
      return;
    }

    // Create new task
    const newTask = await Task.create({
      name,
      content,
      startDate: startDate || null,
      endDate: endDate || null,
    });

    res.status(201).json(newTask); //  Return created task
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ error: "Failed to create task" });
  }
};
