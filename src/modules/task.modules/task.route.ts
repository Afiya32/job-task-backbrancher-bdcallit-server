//task routes

import { Router } from "express";
import { taskController } from "./task.controller";




const taskRouter = Router();

taskRouter.post('/',  taskController.createTask);
taskRouter.get('/', taskController.getAllTasks);
taskRouter.get('/:id', taskController.getTaskById);
taskRouter.put('/:id',  taskController.updateTask);
taskRouter.delete('/:id', taskController.deleteTask);

export default taskRouter;