import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/v1/amazoneClone/user/auth", authRouter);
app.use("/api/v1/amazoneClone/user/activity", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error.message);
  });

 