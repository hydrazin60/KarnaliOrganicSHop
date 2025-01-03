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
      type: String,
    },
    address: {
      country: {
        type: String,
      },
      province: {
        type: String,
      },
      district: {
        type: String,
      },
      city: {
        type: String,
      },
      municipality: {
        type: String,
      },
      area: {
        type: String,
      },
      tole: {
        type: String,
      },
      homeNumber: {
        type: String,
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
