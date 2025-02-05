import express from "express";
import { ShowAllUsers } from "../../controller/Admin/UserManage.controller.js";
import { isAuthenticated } from "../../middleware/isAuthenticated.js";
const userManageRouter = express.Router();

userManageRouter.get("/admin/user_manage", isAuthenticated , ShowAllUsers);

export default userManageRouter;
