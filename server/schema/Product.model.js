import mongoose from "mongoose";

const mongoSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return value.length <= 100;
        },
        message: "A product name cannot exceed 100 characters.",
      },
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productImage: {
      type: [String],
      required: true,
      validate: {
        validator: function (value) {
          return value.length <= 5;
        },
        message: "A product can have a maximum of 5 images.",
      },
    },
    productDescription: {
      type: String,
      validate: {
        validator: function (value) {
          return value.length <= 500;
        },
        message: "A product description cannot exceed 500 characters.",
      },
    },
    productType: {
      type: String,
      enum: ["electronic", "clothing", "Beauty", "Book"],
      required: true,
    },
    productCategory: {
      type: String,
      enum: ["mobile", "laptop", "tv", "camera", "watch", "headphone"],
      required: true,
    },
    productCategoryByAge: {
      type: String,
      enum: ["kid", "woman", "man"],
      required: true,
    },
    productBrand: {
      type: String,
      required: true,
    },
    productQuantity: {
      type: Number,
      default: 1,
    },
    productRating: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductReview",
      },
    ],
    productCancelReason: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderCancelReason",
      },
    ],
    finalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", mongoSchema);
export default Product;
