"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
//task model
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    isDone: { type: Boolean },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });
exports.Task = (0, mongoose_1.model)('task', taskSchema);
