// import mongoose from "mongoose";

// const mongoSchema = new mongoose.Schema(
//   {
//     productName: {
//       type: String,
//       required: true,
//       validate: {
//         validator: function (value) {
//           return value.length <= 100;
//         },
//         message: "A product name cannot exceed 100 characters.",
//       },
//     },
//     productPrice: {
//       type: Number,
//       required: true,
//     },
//     productImage: {
//       type: [String],
//       required: true,
//       validate: {
//         validator: function (value) {
//           return value.length <= 5;
//         },
//         message: "A product can have a maximum of 5 images.",
//       },
//     },
//     productDescription: {
//       type: String,
//       validate: {
//         validator: function (value) {
//           return value.length <= 500;
//         },
//         message: "A product description cannot exceed 500 characters.",
//       },
//     },
//     productType: {
//       type: String,
//       enum: ["electronic", "clothing", "Beauty", "Book"],
//       required: true,
//     },
//     productCategory: {
//       type: String,
//       enum: ["mobile", "laptop", "tv", "camera", "watch", "headphone"],
//       required: true,
//     },
//     productCategoryByAge: {
//       type: String,
//       enum: ["kid", "woman", "man"],
//       required: true,
//     },
//     productBrand: {
//       type: String,
//       required: true,
//     },
//     productQuantity: {
//       type: Number,
//       default: 1,
//     },
//     productRating: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "ProductReview",
//       },
//     ],
//     productCancelReason: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "OrderCancelReason",
//       },
//     ],
//     finalPrice: {
//       type: Number,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Product = mongoose.model("Product", mongoSchema);
// export default Product;

import mongoose from "mongoose"; // Import Mongoose for MongoDB object modeling

// Define the schema for storing product details
const mongoSchema = new mongoose.Schema(
  {
    // Name of the product
    productName: {
      type: String, // Data type: String
      required: true, // This field is mandatory
      validate: {
        validator: function (value) {
          return value.length <= 100; // Name must not exceed 100 characters
        },
        message: "A product name cannot exceed 100 characters.", // Error message
      },
    },
    // Price of the product
    productPrice: {
      type: Number, // Data type: Number
      required: true, // This field is mandatory
    },
    // Array of product image URLs
    productImage: {
      type: [String], // Array of strings
      required: true, // At least one image is required
      validate: {
        validator: function (value) {
          return value.length <= 5; // Limit to a maximum of 5 images
        },
        message: "A product can have a maximum of 5 images.", // Error message
      },
    },
    // Description of the product
    productDescription: {
      type: String, // Data type: String
      validate: {
        validator: function (value) {
          return value.length <= 500; // Limit description to 500 characters
        },
        message: "A product description cannot exceed 500 characters.", // Error message
      },
    },
    // Type of the product (e.g., category type)
    productType: {
      type: String, // Data type: String
      enum: ["electronic", "clothing", "Beauty", "Book"], // Predefined values
      required: true, // This field is mandatory
    },
    // Specific product category
    productCategory: {
      type: String, // Data type: String
      enum: ["mobile", "laptop", "tv", "camera", "watch", "headphone"], // Predefined values
      required: true, // This field is mandatory
    },
    // Target age group or demographic for the product
    productCategoryByAge: {
      type: String, // Data type: String
      enum: ["kid", "woman", "man"], // Predefined values
      required: true, // This field is mandatory
    },
    // Brand of the product
    productBrand: {
      type: String, // Data type: String
      required: true, // This field is mandatory
    },
    // Available quantity of the product
    productQuantity: {
      type: Number, // Data type: Number
      default: 1, // Default value: 1
    },
    // References to reviews associated with the product
    productRating: [
      {
        type: mongoose.Schema.Types.ObjectId, // Reference to another document
        ref: "ProductReview", // Name of the referenced collection
      },
    ],
    // References to cancellation reasons associated with the product
    productCancelReason: [
      {
        type: mongoose.Schema.Types.ObjectId, // Reference to another document
        ref: "OrderCancelReason", // Name of the referenced collection
      },
    ],
    // Final price after any discounts or adjustments
    finalPrice: {
      type: Number, // Data type: Number
      required: true, // This field is mandatory
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` timestamps
  }
);

// Create a Mongoose model based on the schema
const Product = mongoose.model("Product", mongoSchema);

// Export the model to use it in other parts of the application
export default Product;
