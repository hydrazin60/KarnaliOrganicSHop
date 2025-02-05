import mongoose from "mongoose";
import User from "../../schema/user.model.js";
export const ShowAllUsers = async (req, res) => {
  try {
    const authorId = req.userId;
    if (!authorId || !mongoose.Types.ObjectId.isValid(authorId)) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Something went wrong! Unauthorized access",
      });
    }
    const author = await User.findById(authorId);
    if (!author || author.userType !== "admin") {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Something went wrong! Unauthorized access",
      });
    }
    const allUser = await User.find({
      userType: "user" || "deliveryBoy",
    }).select("-password");
    return res.status(200).json({
      success: true,
      error: false,
      message: "All Users Fetched Successfully",
      data: allUser,
    });
  } catch (error) {
    console.log(`Something went wrong on ShowAllUsers ! ${error.message}`);
    return res.status(500).json({
      success: false,
      error: true,
      message: `Something went wrong on ShowAllUsers !${error.message} `,
    });
  }
};
