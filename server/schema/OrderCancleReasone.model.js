import mongoose from "mongoose";
const orderCancelReasonSchema = new mongoose.Schema(
  {
    productId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    ],
    userId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    reason: {
      type: String,
      required: true,
    },
    eSewaNumber: {
      type: Number,
      required: true,
    },
    cancelProcess: {
      type: String,
      enum: [
        "Your Request has been Submitted",
        "Pending Request Process",
        "Request Failed",
        "Paid",
      ],
    },
    orderCancelReason: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderCancelReason",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const OrderCancelReason = mongoose.model(
  "OrderCancelReason",
  orderCancelReasonSchema
);
export default OrderCancelReason;
