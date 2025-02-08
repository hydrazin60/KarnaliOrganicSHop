import mongoose from "mongoose";

const productOrderSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    orderStatus: {
      type: String,
      enum: ["pending", "shipped", , "cancelled", , "onTheWay", "delivered"],
      default: "pending",
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
    orderType: {
      type: String,
      enum: ["cashOnDelivery", "onlinePayment"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const ProductOrder = mongoose.model("ProductOrder", productOrderSchema);
export default ProductOrder;
