import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      unique: true,
    },
    address: {
      country: {
        type: String,
        required: true,
      },
      province: {
        type: String,
        required: true,
      },
      district: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      municipality: {
        type: String,
        required: true,
      },
      area: {
        type: String,
        required: true,
      },
      tole: {
        type: String,
        required: true,
      },
      homeNumber: {
        type: String,
        required: true,
      },
    },
    history: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    totalOrder: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    userType: {
      type: String,
      enum: ["user", "admin", "superAdmin"],
      default: "user",
    },
    orderCancle: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
