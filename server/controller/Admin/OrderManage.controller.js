import mongoose from "mongoose";
import ProductOrder from "../../schema/ProductOrder.model.js";
import User from "../../schema/user.model.js";
export const ViewAllOrder = async (req, res) => {
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

    const allOrder = await ProductOrder.find({})
      .populate("userId", "fullName email mobileNumber address")
      .populate(
        "productId",
        "productName productPrice productImage productDescription productCategory productBrand  prdouctPrice discount "
      )
      .exec();
    return res.status(200).json({
      success: true,
      error: false,
      message: "All Order Fetched Successfully",
      data: allOrder,
    });
  } catch (err) {
    console.log(`Something went wrong on get user details: ${err.message}`);
    return res.status(500).json({
      success: false,
      error: true,
      message: `Something went wrong on get user details: ${err.message}`,
    });
  }
};

export const ViewSingleOrder = async (req, res) => {
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
    const orderId = req.params.id;

    if (!orderId || !mongoose.Types.ObjectId.isValid(orderId)) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Something went wrong! Unauthorized access",
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
    const populateOrder = await ProductOrder.findById(orderId)
      .populate("userId", "fullName email mobileNumber address")
      .populate(
        "productId",
        "productName productPrice productImage productDescription productCategory productBrand   prdouctPrice discount productBrand productCategoryByAge   "
      )
      .exec();

    return res.status(200).json({
      success: true,
      error: false,
      message: "Order Fetched Successfully",
      data: populateOrder,
    });
  } catch (err) {
    console.log(`Something went wrong on get user details: ${err.message}`);
    return res.status(500).json({
      success: false,
      error: true,
      message: `Something went wrong on get user details: ${err.message}`,
    });
  }
};

export const AcceptOrder = async (req, res) => {
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
    const productId = req.params.id;
    if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Something went wrong! Unauthorized access",
      });
    }

    const product = await ProductOrder.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        error: true,
        message: "Order not found",
      });
    }

    product.orderStatus = "Accepted";
    product.orderState = "green";
    await product.save();
    return res.status(200).json({
      success: true,
      error: false,
      message: "Order Accepted Successfully",
    });
  } catch (err) {
    console.log(`Something went wrong on get user details: ${err.message}`);
    return res.status(500).json({
      success: false,
      error: true,
      message: `Something went wrong on get user details: ${err.message}`,
    });
  }
};

export const RejectOrder = async (req, res) => {
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
    const productId = req.params.id;
    if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Product not found",
      });
    }
    const product = await ProductOrder.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        error: true,
        message: "Order not found",
      });
    }
  //  jhdjhsfdfd 
    product.orderStatus = "Rejected";
    product.orderState = "red";
    await product.save();
    return res.status(200).json({
      success: true,
      error: false,
      message: "Order Rejected Successfully",
    });
  } catch (error) {
    console.log(`Something went wrong on get user details: ${err.message}`);
    return res.status(500).json({
      success: false,
      error: true,
      message: `Something went wrong on get user details: ${err.message}`,
    });
  }
};

export const ShippedOrder = async (req, res) => {
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
    const productId = req.params.id;
    if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Product not found",
      });
    }
    const product = await ProductOrder.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        error: true,
        message: "Order not found",
      });
    }
    if (product.orderState !== "blue") {
      return res.status(400).json({
        success: false,
        error: true,
        message: "order already shipped",
      });
    }
    product.orderStatus = "shipped";
    product.orderState = "green";
    await product.save();
    return res.status(200).json({
      success: true,
      error: false,
      message: "Order Shipped Successfully",
    });
  } catch (error) {
    console.log(`Something went wrong on get user details: ${err.message}`);
    return res.status(500).json({
      success: false,
      error: true,
      message: `Something went wrong on get user details: ${err.message}`,
    });
  }
};

export const onTheWayOrder = async (req, res) => {
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
    if (!author || author.userType == "user") {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Something went wrong! Unauthorized access",
      });
    }
    const productId = req.params.id;
    if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Product not found",
      });
    }
    const product = await ProductOrder.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        error: true,
        message: "Order not found",
      });
    }
    if (product.orderState === "red") {
      return res.status(400).json({
        success: false,
        error: true,
        message: "order already rejected",
      });
    }
    if (product.orderState === "white") {
      return res.status(400).json({
        success: false,
        error: true,
        message: "order already delivered",
      });
    }
    product.orderStatus = "onTheWay";
    product.orderState = "yellow";
    await product.save();
    return res.status(200).json({
      success: true,
      error: false,
      message: "Order on the way Successfully",
    });
  } catch (error) {
    console.log(`Something went wrong on get user details: ${err.message}`);
    return res.status(500).json({
      success: false,
      error: true,
      message: `Something went wrong on get user details: ${err.message}`,
    });
  }
};

export const DeliveredOrder = async (req, res) => {
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
    if (!author || author.userType == "user") {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Something went wrong! Unauthorized access",
      });
    }
    const productId = req.params.id;
    if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Product not found",
      });
    }
    const product = await ProductOrder.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        error: true,
        message: "Order not found",
      });
    }
    if (product.orderState === "red") {
      return res.status(400).json({
        success: false,
        error: true,
        message: "order already rejected",
      });
    }
    if (product.orderState === "white") {
      return res.status(400).json({
        success: false,
        error: true,
        message: "order already delivered",
      });
    }
    product.orderStatus = "delivered";
    product.orderState = "white";
    await product.save();
    return res.status(200).json({
      success: true,
      error: false,
      message: "Order Delivered Successfully",
    });
  } catch (error) {
    console.log(`Something went wrong on get user details: ${err.message}`);
    return res.status(500).json({
      success: false,
      error: true,
      message: `Something went wrong on get user details: ${err.message}`,
    });
  }
};
