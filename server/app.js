import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import userRoutes from "./api/user/user.routes.js";
import adminRoute from "./api/user/admin/admin.routes.js";
import { errorHandler, notFound } from "./middlewares/error.middleware.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/admin/users", adminRoute);

app.use(errorHandler);
app.use(notFound);

app.listen(port, (req, res) => {
  console.log(`server is running on ${port}`);
});
