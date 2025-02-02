import express from "express";
import {
  getUserDetails,
  ownProfileView,
} from "../../controller/user/user.controller.js";
import { isAuthenticated } from "../../middleware/isAuthenticated.js";

const userRouter = express.Router();

userRouter.get("/get_user_details/:userId", getUserDetails);
userRouter.get("/get_own_profile", isAuthenticated, ownProfileView);

export default userRouter;
