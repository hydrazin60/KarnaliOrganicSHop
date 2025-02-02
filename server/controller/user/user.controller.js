import mongoose from "mongoose";
import User from "../../schema/user.model.js";

export const getUserDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Something went wrong! Unauthorized access",
      });
    }
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: true,
        message: "User not found",
      });
    }
    const userData = user.toObject();
    delete userData.password;
    return res.status(200).json({
      success: true,
      error: false,
      message: "User details fetched successfully",
      data: userData,
    });
  } catch (error) {
    console.log(`Something went wrong on get user details ! ${error.message}`);
    return res.status(500).json({
      success: false,
      error: true,
      message: `Something went wrong on get user details ! ${error.message}`,
    });
  }
};

export const ownProfileView = async (req, res) => {
  try {
    const userId = req.userId;

    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Something went wrong! Unauthorized access",
      });
    }

    // Fetch user first
    let user = await User.findById(userId).select("-password"); // Exclude password

    if (!user) {
      return res.status(404).json({
        success: false,
        error: true,
        message: "User not found",
      });
    }

    if (user.userType === "admin") {
      user = await User.findById(userId)
        .populate({
          path: "AuthorUploadPrduct",
          select: "productName prdouctPrice productImage productCategory",
        })
        .select("-password");
    }

    if (user.userType === "user") {
      user = await User.findById(userId)
        .populate({
          path: "totalOrder",
          select: "productId quantity orderStatus orderDate",
          populate: {
            path: "productId",
            select: "productName prdouctPrice productImage productCategory",
          },
        })
        .select("-password");
    }

    const userData = user.toObject();

    return res.status(200).json({
      success: true,
      error: false,
      message: "User details fetched successfully",
      data: userData,
    });
  } catch (error) {
    console.log(`Something went wrong on get user details: ${error.message}`);
    return res.status(500).json({
      success: false,
      error: true,
      message: `Something went wrong on get user details: ${error.message}`,
    });
  }
};
