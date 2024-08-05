// task services

import { ITask } from "./task.interface";
import { Task } from "./task.model";



// Create task
const createTaskService = async (taskData: ITask) => {
  const task = new Task(taskData);
  await task.save();
  return task;
};

// Get all tasks
const getAllTasksService = async () => {
  return Task.find();
};

// Get task by ID
const getTaskByIdService = async (id: string) => {
  return Task.findById(id);
};

// Update task
const updateTaskService = async (id: string, updates: Partial<ITask>) => {
  return Task.findByIdAndUpdate(id, updates, { new: true });
};

// Delete task
const deleteTaskService = async (id: string) => {
  return Task.findByIdAndDelete(id);
};

export const taskServices = {
  createTaskService,
  getAllTasksService,
  getTaskByIdService,
  updateTaskService,
  deleteTaskService,
};
