import express from "express";
import {
  loginUser,
  registerUser,
  UploadUserDetails,
} from "../controller/auth/user.auth.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
const authRouter = express.Router();
authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.post("/upload_profile_details", isAuthenticated, UploadUserDetails);

export default authRouter;
