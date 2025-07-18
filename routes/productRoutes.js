import express from "express";
import { addProduct, getProducts } from "../controller/productController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const routes = express.Router();

routes.post("/", authMiddleware, addProduct);
routes.get("/", authMiddleware, getProducts);

export const productsRoutes = routes;
