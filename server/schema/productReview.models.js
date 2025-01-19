// import mongoose from "mongoose";

// const productReviewSchema = new mongoose.Schema(
//   {
//     productId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Product",
//       required: true,
//     },
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     stars: {
//       type: Number,
//       enum: [1, 2, 3, 4, 5],
//       required: true,
//     },
//     comment: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const ProductReview = mongoose.model("ProductReview", productReviewSchema);
// export default ProductReview;

import mongoose from "mongoose"; // Import Mongoose for MongoDB object modeling

// Define a schema for storing product reviews
const productReviewSchema = new mongoose.Schema(
  {
    // Reference to the product being reviewed
    productId: {
      type: mongoose.Schema.Types.ObjectId, // Reference type to another document
      ref: "Product", // Name of the referenced collection
      required: true, // This field is mandatory
    },
    // Reference to the user who submitted the review
    userId: {
      type: mongoose.Schema.Types.ObjectId, // Reference type to another document
      ref: "User", // Name of the referenced collection
      required: true, // This field is mandatory
    },
    // Rating given by the user (1 to 5 stars)
    stars: {
      type: Number, // Data type: Number
      enum: [1, 2, 3, 4, 5], // Allowed values for the rating
      required: true, // This field is mandatory
    },
    // Review comment provided by the user
    comment: {
      type: String, // Data type: String
      required: true, // This field is mandatory
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` timestamps
  }
);

// Create a Mongoose model based on the schema
const ProductReview = mongoose.model("ProductReview", productReviewSchema);

// Export the model to use it in other parts of the application
export default ProductReview;
