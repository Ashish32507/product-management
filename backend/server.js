import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./config/dbConnection.js";
import { authRoutes } from "./routes/authRoutes.js";
import { productsRoutes } from "./routes/productRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productsRoutes);

// DB + Server
dbConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
});
