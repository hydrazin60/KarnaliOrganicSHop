import mongoose from "mongoose";

const orderCancleReasoneSchema = new mongoose.Schema(
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
      require: true,
    },
    cancleProcess: {
      type: String,
      enam: [
        "Your Requist has been Submitted",
        "Pending  Requist Process",
        "Requist Failed",
        "Paid",
      ],
    },
  },
  {
    timestamps: true,
  }
);

const OrderCancleReasone = mongoose.model(
  "OrderCancleReasoneModel",
  orderCancleReasoneSchema
);
export default OrderCancleReasone;
