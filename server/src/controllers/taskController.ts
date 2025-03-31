import { Request, Response } from "express";
import Task from "../models/taskModel"; // Import Task model

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.findAll(); // Fetch all tasks from DB
    res.json({ tasks });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve tasks" });
  }
};
