import express from "express";
import { isAuthenticated } from "../../middleware/isAuthenticated.js";
import {
  DeleteProduct,
  EditProductDetails,
  GetAllProduct,
  GetSingleProduct,
  uploadProduct,
} from "../../controller/Admin/Product.controller.js";
import { uploadImagesAndVideo } from "../../middleware/multer.js";

const ProductRouter = express.Router();
ProductRouter.post(
  "/upload_product",
  uploadImagesAndVideo,
  isAuthenticated,
  uploadProduct
);

ProductRouter.post(
  "/edit_product/:id",
  uploadImagesAndVideo,
  isAuthenticated,
  EditProductDetails
);

ProductRouter.get("/get/all_product", GetAllProduct);
ProductRouter.get("/get/single_product/details/:id", GetSingleProduct);

ProductRouter.delete("/delete_product/:id", isAuthenticated, DeleteProduct);
export default ProductRouter;
