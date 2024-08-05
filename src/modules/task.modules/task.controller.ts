//task controller
import { Request, Response } from "express";
import { taskSchema } from "./task.validation";
import { taskServices } from "./task.service";



const createTask = async (req: Request, res: Response) => {
  try {
    
    const parsedTask = taskSchema.parse(req.body);
    const task = await taskServices.createTaskService(parsedTask);
    res.status(201).json({ success: true, task });
  } catch (error: unknown) {
    console.error("Error:", error);
    if (error instanceof Error) {
      res.status(400).json({ success: false, message: error.message });
    } else {
      res.status(400).json({ success: false, message: "Unknown error occurred" });
    }
  }
};

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await taskServices.getAllTasksService();
    res.json(tasks);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown error occurred" });
    }
  }
};

const getTaskById = async (req: Request, res: Response) => {
  try {
    const task = await taskServices.getTaskByIdService(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown error occurred" });
    }
  }
};

const updateTask = async (req: Request, res: Response) => {
  try {
    const parsedTask = taskSchema.parse(req.body);
    const updatedTask = await taskServices.updateTaskService(
      req.params.id,
      parsedTask
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(updatedTask);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "Unknown error occurred" });
    }
  }
};

const deleteTask = async (req: Request, res: Response) => {
  try {
    const deletedTask = await taskServices.deleteTaskService(
      req.params.id
    );
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task deleted" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown error occurred" });
    }
  }
};

export const taskController = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
