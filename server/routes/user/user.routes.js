import express from "express";
import {
  getUserDetails,
  processOrder,
  ownProfileView,
  viewOwnOrder,
  deleteOrder,
} from "../../controller/user/user.controller.js";
import { isAuthenticated } from "../../middleware/isAuthenticated.js";
const userRouter = express.Router();

userRouter.get("/get_user_details/:userId", getUserDetails);
userRouter.get("/get_own_profile", isAuthenticated, ownProfileView);
userRouter.post("/place_order/:orderId", isAuthenticated, processOrder);
userRouter.get("/viewAll_own_orders", isAuthenticated, viewOwnOrder);
userRouter.delete("/cancle_order/:orderId", isAuthenticated, deleteOrder);

export default userRouter;
