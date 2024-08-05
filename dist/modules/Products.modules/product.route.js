"use strict";
//product routes
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const productRouter = (0, express_1.Router)();
productRouter.post('/', product_controller_1.productController.createProduct);
productRouter.get('/', product_controller_1.productController.getAllProducts);
productRouter.get('/:id', product_controller_1.productController.getProductById);
productRouter.put('/:id', product_controller_1.productController.updateProduct);
productRouter.delete('/:id', product_controller_1.productController.deleteProduct);
exports.default = productRouter;
