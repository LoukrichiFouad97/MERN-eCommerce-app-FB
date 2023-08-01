import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import userRoutes from "./api/user/user.routes.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/api/v1/users", userRoutes);



app.listen(port, (req, res) => {
  console.log(`server is running on ${port}`);
});
