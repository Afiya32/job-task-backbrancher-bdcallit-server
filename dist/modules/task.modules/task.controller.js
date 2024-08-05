"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskController = void 0;
const task_validation_1 = require("./task.validation");
const task_service_1 = require("./task.service");
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsedTask = task_validation_1.taskSchema.parse(req.body);
        const task = yield task_service_1.taskServices.createTaskService(parsedTask);
        res.status(201).json({ success: true, task });
    }
    catch (error) {
        console.error("Error:", error);
        if (error instanceof Error) {
            res.status(400).json({ success: false, message: error.message });
        }
        else {
            res.status(400).json({ success: false, message: "Unknown error occurred" });
        }
    }
});
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield task_service_1.taskServices.getAllTasksService();
        res.json(tasks);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "Unknown error occurred" });
        }
    }
});
const getTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield task_service_1.taskServices.getTaskByIdService(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json(task);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "Unknown error occurred" });
        }
    }
});
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsedTask = task_validation_1.taskSchema.parse(req.body);
        const updatedTask = yield task_service_1.taskServices.updateTaskService(req.params.id, parsedTask);
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json(updatedTask);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: "Unknown error occurred" });
        }
    }
});
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTask = yield task_service_1.taskServices.deleteTaskService(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json({ message: "Task deleted" });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "Unknown error occurred" });
        }
    }
});
exports.taskController = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
};
