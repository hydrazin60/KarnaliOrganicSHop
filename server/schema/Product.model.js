import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return value.length <= 100;
        },
        message: "A product name cannot exceed 100 characters.",
      },
    },
    prdouctPrice: {
      type: Number,
      required: true,
    },
    productImage: {
      type: [String],
      required: true,
      validate: {
        validator: function (value) {
          return value.length <= 5;
        },
        message: "A product can have a maximum of 5 images.",
      },
    },
    productReviewVideo: {
      type: String,
      default: "",
    },
    productDescription: {
      type: String,
      validate: {
        validator: function (value) {
          return value.length <= 500;
        },
        message: "A product description cannot exceed 500 characters.",
      },
    },
    productType: {
      type: String,
      enum: ["electronic", "clothing", "Beauty", "Book"],
      required: true,
    },
    productCategory: {
      type: String,
      enum: [
        "mobile",
        "laptop",
        "tv",
        "camera",
        "watch",
        "headphone",
        "clouth",
        "shoes",
        "bag",
        "accessories",
        "jewellery",
        "furniture",
        "books",
      ],
      required: true,
    },
    productCategoryByAge: {
      type: String,
      enum: ["kid", "woman", "man", "adult", "old"],
      required: true,
    },

    productBrand: {
      type: String,
      enum: [
        "Apple",
        "Asus",
        "Acer",
        "Dell",
        "HP",
        "Lenovo",
        "jara",
        "sony",
        "JBL",
        "other",
        "The North Face",
        "Adidas",
        "Puma",
        "Nike",
        "Under Armour",
        "Reebok",
        "New Balance",
        "Vans",
      ],
      default: "other",
    },

    productQuantity: {
      type: Number,
      default: 1,
    },

    productRating: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductReview",
      },
    ],
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    discount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
