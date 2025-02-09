import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import ProductRouter from "./routes/admin/Product.routes.js";
import userRouter from "./routes/user/user.routes.js";
import userManageRouter from "./routes/admin/userManage.routes.js";
import orderManageRouter from "./routes/admin/OrderManage.routes.js";

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
app.use("/api/v1/amazoneClone/user", userRouter);
app.use("/api/v1/amazoneClone/product", ProductRouter);
app.use("/api/v1/amazoneCLone/user_management", userManageRouter);
app.use("/api/v1/amazoneCLone/order_management", orderManageRouter);
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
