"use strict";
//task routes
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = require("./task.controller");
const taskRouter = (0, express_1.Router)();
taskRouter.post('/', task_controller_1.taskController.createTask);
taskRouter.get('/', task_controller_1.taskController.getAllTasks);
taskRouter.get('/:id', task_controller_1.taskController.getTaskById);
taskRouter.put('/:id', task_controller_1.taskController.updateTask);
taskRouter.delete('/:id', task_controller_1.taskController.deleteTask);
exports.default = taskRouter;
