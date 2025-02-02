import Usermodel from "../../schema/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cloudinary from "../../utils/cloudinary.js";
export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Please fill all the fields",
      });
    }
    const existingUser = await Usermodel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "User already exists! Please Go to login page",
      });
    }
    const hasedPassword = await bcrypt.hash(password, 10);
    const newUser = new Usermodel({
      fullName,
      email,
      password: hasedPassword,
    });
    await newUser.save();
    return res.status(200).json({
      success: true,
      error: false,
      message: `Welcome ${fullName} in our website! Please Go to login page to buy your choice Product`,
      data: newUser,
    });
  } catch (error) {
    console.log(`Error occured in Register User ${error.message}`);
    return res.status(500).json({
      success: false,
      error: true,
      message: `Error occured in Register User ${error}`,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Please fill all the fields",
      });
    }
    const existUser = await Usermodel.findOne({ email });
    if (!existUser) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "User does not exist! Please Go to register page",
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, existUser.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Password is incorrect! Please try again",
      });
    }
    const userData = existUser.toObject();
    delete userData.password;
    const token = jwt.sign({ id: existUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res
      .cookie("token", token, {
        httpOnly: true,
        samesite: "none",
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        success: true,
        error: false,
        message: `Welcome ${existUser.fullName} in our website you can now shop`,
        data: userData,
      });
  } catch (error) {
    console.log(`Error occured in Login User ${error.message}`);
    return res.status(500).json({
      success: false,
      error: true,
      message: `Error occured in Login User ${error}`,
    });
  }
};

export const UploadUserDetails = async (req, res) => {
  try {
    const { fullName, mobileNumber, address } = req.body;
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({
        success: false,
        error: true,
        message: "Unauthorized access! Please login first",
      });
    }

    const user = await Usermodel.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: true,
        message: "User not found! Please login again",
      });
    }

    let profileImageURI = user.profileImage; // Keep existing image if not updating

    if (req.file) {
      const fileBuffer = req.file.buffer; // Access the file buffer
      const cloudResponse = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${fileBuffer.toString("base64")}`,
        {
          folder: "profile_images", // Optional: Specify a folder in Cloudinary
        }
      );
      profileImageURI = cloudResponse.secure_url;
    } else {
      console.log("No file received in the request.");
    }

    user.fullName = fullName || user.fullName;
    user.mobileNumber = mobileNumber || user.mobileNumber;
    user.address = address || user.address;
    user.profileImage = profileImageURI;

    await user.save();

    return res.status(200).json({
      success: true,
      error: false,
      message: "User details updated successfully",
      data: user,
    });
  } catch (error) {
    console.error(
      `Error occurred while updating user details: ${error.message}`
    );
    return res.status(500).json({
      success: false,
      error: true,
      message: `Error occurred while updating user details: ${error.message}`,
    });
  }
};
