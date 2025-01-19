// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     fullName: {
//       type: String,
//       required: true,
//     },
//     profileImage: {
//       type: String,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     mobileNumber: {
//       type: String,
//     },
//     address: [
//       {
//         country: {
//           type: String,
//           default: "Nepal",
//         },
//         province: {
//           type: String,
//         },
//         district: {
//           type: String,
//         },
//         city: {
//           type: String,
//         },
//         municipality: {
//           type: String,
//         },
//         area: {
//           type: String,
//         },
//         tole: {
//           type: String,
//         },
//         homeNumber: {
//           type: String,
//         },
//       },
//     ],
//     history: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Product",
//       },
//     ],
//     totalOrder: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Product",
//       },
//     ],
//     userType: {
//       type: String,
//       enum: ["user", "admin", "superAdmin"],
//       default: "user",
//     },
//     orderCancle: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Product",
//       },
//     ],
//     userRole: {
//       type: String,
//       enum: ["user", "admin", "superAdmin"],
//       default: "user",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const User = mongoose.model("User", userSchema);
// export default User;

import mongoose from "mongoose"; // Import Mongoose for MongoDB object modeling

// Define a schema for storing user details
const userSchema = new mongoose.Schema(
  {
    // Full name of the user
    fullName: {
      type: String, // Data type: String
      required: true, // This field is mandatory
    },
    // Profile image URL of the user
    profileImage: {
      type: String, // Data type: String
    },
    // Email address of the user
    email: {
      type: String, // Data type: String
      required: true, // This field is mandatory
      unique: true, // Ensures each email is unique
    },
    // Encrypted password of the user
    password: {
      type: String, // Data type: String
      required: true, // This field is mandatory
    },
    // Mobile number of the user
    mobileNumber: {
      type: String, // Data type: String
    },
    // Address details for the user (can store multiple addresses)
    address: [
      {
        country: {
          type: String, // Country name
          default: "Nepal", // Default country is Nepal
        },
        province: {
          type: String, // Province name
        },
        district: {
          type: String, // District name
        },
        city: {
          type: String, // City name
        },
        municipality: {
          type: String, // Municipality name
        },
        area: {
          type: String, // Area name
        },
        tole: {
          type: String, // Tole (neighborhood) name
        },
        homeNumber: {
          type: String, // Home number
        },
      },
    ],
    // User's purchase history
    history: [
      {
        type: mongoose.Schema.Types.ObjectId, // Reference to the Product model
        ref: "Product", // Name of the referenced collection
      },
    ],
    // List of total orders made by the user
    totalOrder: [
      {
        type: mongoose.Schema.Types.ObjectId, // Reference to the Product model
        ref: "Product", // Name of the referenced collection
      },
    ],
    // Type of the user (regular user, admin, or super admin)
    userType: {
      type: String, // Data type: String
      enum: ["user", "admin", "superAdmin"], // Predefined roles
      default: "user", // Default role is "user"
    },
    // List of orders canceled by the user
    orderCancle: [
      {
        type: mongoose.Schema.Types.ObjectId, // Reference to the Product model
        ref: "Product", // Name of the referenced collection
      },
    ],
    // User's role in the system
    userRole: {
      type: String, // Data type: String
      enum: ["user", "admin", "superAdmin"], // Predefined roles
      default: "user", // Default role is "user"
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` timestamps
  }
);

// Create a Mongoose model based on the schema
const User = mongoose.model("User", userSchema);
// Export the model to use it in other parts of the application
export default User;
