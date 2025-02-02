import express from "express";
import { isAuthenticated } from "../../middleware/isAuthenticated.js";
import { uploadProduct } from "../../controller/Admin/Product.controller.js";
import { uploadImagesAndVideo } from "../../middleware/multer.js";

const ProductRouter = express.Router();
ProductRouter.post(
  "/upload_product",
  uploadImagesAndVideo,
  isAuthenticated,
  uploadProduct
);

export default ProductRouter;
