import express from "express";
import { isAuthenticated } from "../../middleware/isAuthenticated.js";
import {
  AcceptOrder,
  DeliveredOrder,
  onTheWayOrder,
  RejectOrder,
  ShippedOrder,
  ViewAllOrder,
} from "../../controller/Admin/OrderManage.controller.js";
const orderManageRouter = express.Router();

orderManageRouter.get("/admin/viewAll_orders", isAuthenticated, ViewAllOrder);
orderManageRouter.put("/admin/accept_order/:id", isAuthenticated, AcceptOrder);
orderManageRouter.put("/admin/reject_order/:id", isAuthenticated, RejectOrder);
orderManageRouter.put("/admin/shipped_order/:id", isAuthenticated, ShippedOrder);
orderManageRouter.put(
  "/delivery_boy/onTheWayOrder/:id",
  isAuthenticated,
  onTheWayOrder
);

orderManageRouter.put(
  "/delivery_boy/deliveredOrder/:id",
  isAuthenticated,
  DeliveredOrder
);

export default orderManageRouter;
