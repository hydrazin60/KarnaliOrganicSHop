import express from "express";
import {
  getOwnUserDetails,
  getUserDetails,
} from "../controller/user/user.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
const userRoutes = express.Router();

userRoutes.get("/user/amazone_clone/:userId", getUserDetails);
userRoutes.get("/users", isAuthenticated, getOwnUserDetails);
export default userRoutes;
