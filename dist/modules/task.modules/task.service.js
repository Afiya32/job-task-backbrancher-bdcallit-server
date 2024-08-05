"use strict";
// task services
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
exports.taskServices = void 0;
const task_model_1 = require("./task.model");
// Create task
const createTaskService = (taskData) => __awaiter(void 0, void 0, void 0, function* () {
    const task = new task_model_1.Task(taskData);
    yield task.save();
    return task;
});
// Get all tasks
const getAllTasksService = () => __awaiter(void 0, void 0, void 0, function* () {
    return task_model_1.Task.find();
});
// Get task by ID
const getTaskByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return task_model_1.Task.findById(id);
});
// Update task
const updateTaskService = (id, updates) => __awaiter(void 0, void 0, void 0, function* () {
    return task_model_1.Task.findByIdAndUpdate(id, updates, { new: true });
});
// Delete task
const deleteTaskService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return task_model_1.Task.findByIdAndDelete(id);
});
exports.taskServices = {
    createTaskService,
    getAllTasksService,
    getTaskByIdService,
    updateTaskService,
    deleteTaskService,
};
