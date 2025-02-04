// import mongoose from "mongoose";
// import Usermodel from "../../schema/user.model.js";
// import { getDataUri } from "../../utils/datauri.js";
// import cloudinary from "../../utils/cloudinary.js";
// import Product from "../../schema/Product.model.js";
// export const uploadProduct = async (req, res) => {
//   try {
//     const userId = req.userId;
//     if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
//       return res.status(400).json({
//         success: false,
//         error: true,
//         message: "Something went wrong! Unauthorized access",
//       });
//     }

//     const Author = await Usermodel.findById(userId);
//     if (!Author) {
//       console.log("Author not found or invalid user ID");
//       return res.status(400).json({
//         success: false,
//         error: true,
//         message: "Unauthorized access! Please login first",
//       });
//     }

//     if (Author.userType !== "admin") {
//       return res.status(400).json({
//         success: false,
//         error: true,
//         message: "Unauthorized access! Admin privileges required",
//       });
//     }

//     const {
//       productName,
//       prdouctPrice,
//       productDescription,
//       productType,
//       productCategory,
//       productCategoryByAge,
//       productBrand,
//       productQuantity,
//       discount,
//     } = req.body;

//     if (
//       !productName ||
//       !prdouctPrice ||
//       !productDescription ||
//       !productType ||
//       !productCategory ||
//       !productCategoryByAge
//     ) {
//       return res.status(400).json({
//         success: false,
//         error: true,
//         message: "Please fill all the fields",
//       });
//     }

//     const productImage = req.files?.productImage;
//     const productReviewVideo = req.files?.productReviewVideo;
//     const ProductImageURI = [];
//     const ProductReviewVideoURI = [];

//     if (productImage && Array.isArray(productImage)) {
//       await Promise.all(
//         productImage.map(async (file) => {
//           try {
//             const fileUri = getDataUri(file);

//             const cloudResponse = await cloudinary.uploader.upload(
//               fileUri.content,
//               {
//                 folder: "productImage",
//               }
//             );
//             ProductImageURI.push(cloudResponse.secure_url);
//           } catch (error) {
//             console.error("Cloudinary upload error:", error);
//           }
//         })
//       );
//     } else {
//       console.log("No product image uploaded or invalid format");
//     }

//     if (productReviewVideo && Array.isArray(productReviewVideo)) {
//       await Promise.all(
//         productReviewVideo.map(async (file) => {
//           try {
//             const fileUri = getDataUri(file);
//             if (file.mimetype.startsWith("video/")) {
//               const cloudResponse = await cloudinary.uploader.upload(
//                 fileUri.content,
//                 {
//                   folder: "productReviewVideo",
//                   resource_type: "video",
//                 }
//               );
//               ProductReviewVideoURI.push(cloudResponse.secure_url);
//             } else {
//               console.log("Invalid file type. Only videos are allowed.");
//             }
//           } catch (error) {
//             console.error("Cloudinary upload error:", error);
//           }
//         })
//       );
//     } else {
//       console.log("No product review video uploaded or invalid format");
//     }

//     const newProduct = await Product.create({
//       productName,
//       prdouctPrice,
//       productDescription,
//       productType,
//       productCategory,
//       productCategoryByAge,
//       productBrand,
//       productQuantity,
//       discount,
//       productImage: ProductImageURI,
//       productReviewVideo:
//         ProductReviewVideoURI.length > 0 ? ProductReviewVideoURI[0] : "", // Handle empty array
//       authorId: Author._id,
//     });
//     const populatedProduct = await Product.findById(newProduct._id)
//       .populate("authorId", "fullName email address mobileNumber")
//       .exec();

//     const user = await Usermodel.findById(populatedProduct.authorId);
//     if (user) {
//       user.AuthorUploadPrduct.push(newProduct._id);
//       await user.save();
//     }

//     return res.status(200).json({
//       success: true,
//       error: false,
//       message: "Product uploaded successfully",
//       data: populatedProduct,
//     });
//   } catch (err) {
//     console.log(`Something went wrong on get user details: ${err.message}`);
//     return res.status(500).json({
//       success: false,
//       error: true,
//       message: `Something went wrong on get user details: ${err.message}`,
//     });
//   }
// };

import mongoose from "mongoose";
import Usermodel from "../../schema/user.model.js";
import { getDataUri } from "../../utils/datauri.js";
import cloudinary from "../../utils/cloudinary.js";
import Product from "../../schema/Product.model.js";
export const uploadProduct = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Something went wrong! Unauthorized access",
      });
    }

    const Author = await Usermodel.findById(userId);
    if (!Author) {
      console.log("Author not found or invalid user ID");
      return res.status(400).json({
        success: false,
        error: true,
        message: "Unauthorized access! Please login first",
      });
    }

    if (Author.userType !== "admin") {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Unauthorized access! Admin privileges required",
      });
    }

    const {
      productName,
      prdouctPrice,
      productDescription,
      productType,
      productCategory,
      productCategoryByAge,
      productBrand,
      productQuantity,
      discount,
    } = req.body;

    if (
      !productName ||
      !prdouctPrice ||
      !productDescription ||
      !productType ||
      !productCategory ||
      !productCategoryByAge
    ) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Please fill all the fields",
      });
    }

    const productImage = req.files?.productImage;
    const productReviewVideo = req.files?.productReviewVideo;
    const ProductImageURI = [];
    const ProductReviewVideoURI = [];

    if (productImage && Array.isArray(productImage)) {
      await Promise.all(
        productImage.map(async (file) => {
          try {
            const fileUri = getDataUri(file);

            const cloudResponse = await cloudinary.uploader.upload(
              fileUri.content,
              {
                folder: "productImage",
              }
            );
            ProductImageURI.push(cloudResponse.secure_url);
          } catch (error) {
            console.error("Cloudinary upload error:", error);
          }
        })
      );
    } else {
      console.log("No product image uploaded or invalid format");
    }

    if (productReviewVideo && Array.isArray(productReviewVideo)) {
      await Promise.all(
        productReviewVideo.map(async (file) => {
          try {
            const fileUri = getDataUri(file);
            if (file.mimetype.startsWith("video/")) {
              const cloudResponse = await cloudinary.uploader.upload(
                fileUri.content,
                {
                  folder: "productReviewVideo",
                  resource_type: "video",
                }
              );
              ProductReviewVideoURI.push(cloudResponse.secure_url);
            } else {
              console.log("Invalid file type. Only videos are allowed.");
            }
          } catch (error) {
            console.error("Cloudinary upload error:", error);
          }
        })
      );
    } else {
      console.log("No product review video uploaded or invalid format");
    }

    const newProduct = await Product.create({
      productName,
      prdouctPrice,
      productDescription,
      productType,
      productCategory,
      productCategoryByAge,
      productBrand,
      productQuantity,
      discount,
      productImage: ProductImageURI,
      productReviewVideo:
        ProductReviewVideoURI.length > 0 ? ProductReviewVideoURI[0] : "", // Handle empty array
      authorId: Author._id,
    });
    const populatedProduct = await Product.findById(newProduct._id)
      .populate("authorId", "fullName email address mobileNumber")
      .exec();

    const user = await Usermodel.findById(populatedProduct.authorId);
    if (user) {
      user.AuthorUploadPrduct.push(newProduct._id);
      await user.save();
    }

    return res.status(200).json({
      success: true,
      error: false,
      message: "Product uploaded successfully",
      data: populatedProduct,
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
