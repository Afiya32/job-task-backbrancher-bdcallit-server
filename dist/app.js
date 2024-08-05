"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const notFound_middleware_1 = __importDefault(require("./middleware/notFound.middleware"));
const error_middleware_1 = __importDefault(require("./middleware/error.middleware"));
const user_routes_1 = __importDefault(require("./modules/Users.modules/user.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/api/users', user_routes_1.default);
// app.use('/api/products', productRouter);
// app.use('/api/carts', cartRouter);
// // Error Handler Middleware
app.get("/", (req, res) => {
    res.send("welcome to Back Branch server ");
});
// Error Handler Middleware
app.use(notFound_middleware_1.default); // Handle 404 Not Found errors  
app.use(error_middleware_1.default);
exports.default = app;
