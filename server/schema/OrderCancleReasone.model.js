// import mongoose from "mongoose";

// const orderCancelReasonSchema = new mongoose.Schema(
//   {
//     productId: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Product",
//         required: true,
//       },
//     ],
//     userId: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//         required: true,
//       },
//     ],
//     reason: {
//       type: String,
//       required: true,
//     },
//     eSewaNumber: {
//       type: Number,
//       required: true,
//     },
//     cancelProcess: {
//       type: String,
//       enum: [
//         "Your Request has been Submitted",
//         "Pending Request Process",
//         "Request Failed",
//         "Paid",
//       ],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const OrderCancelReason = mongoose.model(
//   "OrderCancelReason",
//   orderCancelReasonSchema
// );
// export default OrderCancelReason;

import mongoose from "mongoose"; // Import Mongoose for MongoDB object modeling

// Define a schema for storing order cancellation reasons
const orderCancelReasonSchema = new mongoose.Schema(
  {
    // Array of product IDs related to the cancellation
    productId: [
      {
        type: mongoose.Schema.Types.ObjectId, // Reference to the "Product" collection
        ref: "Product", // Name of the referenced collection
        required: true, // This field is mandatory
      },
    ],
    // Array of user IDs associated with the cancellation
    userId: [
      {
        type: mongoose.Schema.Types.ObjectId, // Reference to the "User" collection
        ref: "User", // Name of the referenced collection
        required: true, // This field is mandatory
      },
    ],
    // Reason provided by the user for canceling the order
    reason: {
      type: String, // Text field for the cancellation reason
      required: true, // This field is mandatory
    },
    // eSewa number for payment-related information
    eSewaNumber: {
      type: Number, // Number field for storing the eSewa payment reference
      required: true, // This field is mandatory
    },
    // Status of the cancellation process
    cancelProcess: {
      type: String, // Text field for the cancellation status
      enum: [
        // Allowed values for the cancellation process
        "Your Request has been Submitted",
        "Pending Request Process",
        "Request Failed",
        "Paid",
      ],
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` timestamps
  }
);

// Create a Mongoose model based on the schema
const OrderCancelReason = mongoose.model(
  "OrderCancelReason", // Name of the model
  orderCancelReasonSchema // Schema definition
);

// Export the model to use it in other parts of the application
export default OrderCancelReason;
