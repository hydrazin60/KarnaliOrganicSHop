import express from "express";
import {
  loginUser,
  registerUser,
  UploadUserDetails,
} from "../controller/auth/user.auth.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import {   uploadProfileImage } from "../middleware/multer.js";
const authRouter = express.Router();
authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.post(
  "/upload_profile_details",
  uploadProfileImage,
  isAuthenticated,
  UploadUserDetails
);


export default authRouter;
