"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//user routes
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const user_validation_1 = require("./user.validation");
const user_controller_1 = require("./user.controller");
const UserRouter = express_1.default.Router();
// Validate middleware
const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body); // Validate request body against schema
        next(); // Proceed to the next middleware/controller function
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            return res.status(400).json({ message: "Validation error", errors: error.errors });
        }
        console.error('Validation middleware error:', error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
// User signup route
UserRouter.post('/auth/signup', validate(user_validation_1.userValidation.userSignupSchema), user_controller_1.UserController.createUser);
// User login route
UserRouter.post('/auth/login', validate(user_validation_1.userValidation.userLoginSchema), user_controller_1.UserController.loginUser);
// Get all users route
UserRouter.get('/', user_controller_1.UserController.getAllUsers);
exports.default = UserRouter;
