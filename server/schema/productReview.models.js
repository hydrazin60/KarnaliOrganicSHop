import mongoose from "mongoose";

const productReviewSchema = new mongoose.Schema(
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
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    Star: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
    },
  },
  {
    timestamps: true,
  }
);

const ProductReview = mongoose.model("ProductReviewModel", productReviewSchema);
export default ProductReview;
