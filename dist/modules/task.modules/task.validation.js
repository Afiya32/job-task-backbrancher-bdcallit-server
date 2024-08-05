"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskSchema = void 0;
//task validation
const zod_1 = require("zod");
exports.taskSchema = zod_1.z.object({
    name: zod_1.z.string(),
    isDone: zod_1.z.boolean(),
    price: zod_1.z.number().nonnegative(),
    rating: zod_1.z.number().min(0).max(5),
    description: zod_1.z.string(),
    image: zod_1.z.string().url(),
});
