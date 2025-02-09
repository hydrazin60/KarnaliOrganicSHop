import mongoose from "mongoose";
import User from "../../schema/user.model.js";
import Product from "../../schema/Product.model.js";
import ProductOrder from "../../schema/ProductOrder.model.js";

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

export const processOrder = async (req, res) => {
  try {
    const userId = req.userId;
    const { orderType } = req.body;
    console.log(orderType);
    if (!orderType) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Please select a payment method",
      });
    }
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Unauthorized access",
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

    if (user.userType !== "user") {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Only users can order products",
      });
    }

    if (!user.address || user.address.length === 0) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Please add an address first",
      });
    }

    const orderId = req.params.orderId;
    if (!orderId || !mongoose.Types.ObjectId.isValid(orderId)) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Invalid product ID",
      });
    }

    const product = await Product.findById(orderId);
    if (!product) {
      return res.status(404).json({
        success: false,
        error: true,
        message: "Product not found",
      });
    }

    let existingOrder = await ProductOrder.findOne({
      productId: product._id,
      userId: user._id,
      orderStatus: "pending",
      orderState: "blue",
      orderType: orderType,
    });

    if (existingOrder) {
      existingOrder.quantity += 1;
      await existingOrder.save();
    } else {
      const newOrder = new ProductOrder({
        productId: product._id,
        userId: user._id,
        quantity: 1,
        orderStatus: "pending",
        orderDate: new Date(),
        orderType: "cashOnDelivery",
      });

      await newOrder.save();
      user.totalOrder.push(newOrder._id);
      await user.save();

      existingOrder = newOrder;
    }

    const populateOrder = await ProductOrder.findById(existingOrder._id)
      .populate(
        "productId",
        "productName productPrice productImage productDescription productCategory productBrand prdouctPrice discount"
      )
      .populate("userId", "fullName email mobileNumber address")
      .exec();

    return res.status(200).json({
      success: true,
      error: false,
      message:
        existingOrder.quantity > 1
          ? "Order quantity updated"
          : "Order placed successfully",
      data: populateOrder,
    });
  } catch (error) {
    console.error(`Error in orderProductView: ${error.message}`);
    return res.status(500).json({
      success: false,
      error: true,
      message: `Server error: ${error.message}`,
    });
  }
};

export const viewOwnOrder = async (req, res) => {
  try {
    const userId = req.userId;
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
    if (user.userType !== "user") {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Only users can order products",
      });
    }
    const totalOrder = await ProductOrder.find({
      userId: user._id,
    })
      .populate(
        "productId",
        "productName productPrice productImage productDescription productCategory productBrand  prdouctPrice discount "
      )
      .populate("userId", "fullName email mobileNumber address")
      .exec();

    return res.status(200).json({
      success: true,
      error: false,
      message: "Order details fetched successfully",
      data: totalOrder,
    });
  } catch (error) {
    console.log(`Something went wrong on viewOwnOrder ! ${error.message}`);
    return res.status(500).json({
      success: false,
      error: true,
      message: `Something went wrong on viewOwnOrder ! ${error.message}`,
    });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const userId = req.userId;
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
    if (user.userType !== "user") {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Only users can order products",
      });
    }
    const orderId = req.params.orderId;
    if (!orderId || !mongoose.Types.ObjectId.isValid(orderId)) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Invalid product ID",
      });
    }

    const order = await ProductOrder.findById(orderId);
    if (!order) {
      return res.status(404).json({
        success: false,
        error: true,
        message: "Order not found",
      });
    }
    if (order.orderStatus === "delivered") {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Order already delivered",
      });
    }
    if (order.userId.toString() !== user._id.toString()) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Unauthorized access",
      });
    }

    await ProductOrder.findByIdAndDelete(orderId);
    user.totalOrder.pull(orderId);
    await user.save();

    return res.status(200).json({
      success: true,
      error: false,
      message: "Order deleted successfully",
    });
  } catch (error) {
    console.log(`Something went wrong on deleteOrder ! ${error.message}`);
    return res.status(500).json({
      success: false,
      error: true,
      message: `Something went wrong on deleteOrder ! ${error.message}`,
    });
  }
};
