import { register, login } from "../controller/authController.js";
import express from "express";

const routes = express.Router();

routes.post("/register", register);
routes.post("/login", login);

export const authRoutes = routes;
