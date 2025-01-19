// Import necessary modules
import express from "express"; // Framework for building web applications
import dotenv from "dotenv"; // Loads environment variables from a .env file
import mongoose from "mongoose"; // MongoDB object modeling for Node.js
import authRouter from "./routes/auth.routes.js"; // Import authentication routes
import cors from "cors"; // Middleware to handle Cross-Origin Resource Sharing
import userRoutes from "./routes/user.routes.js"; // Import user activity routes
import cookieParser from "cookie-parser"; // Middleware to parse cookies

// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();

// Set the server port (default to 5000 if not specified in environment variables)
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Middleware to parse cookies in incoming requests
app.use(cookieParser());

// Configure CORS to allow requests from the frontend application
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests only from this origin (frontend URL)
    credentials: true, // Enable sending cookies with CORS requests
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  })
);

// Define route for user authentication-related APIs
app.use("/api/v1/amazoneClone/user/auth", authRouter);

// Define route for user activity-related APIs
app.use("/api/v1/amazoneClone/user/activity", userRoutes);

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB using the connection string from environment variables
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB"); // Log success message
  })
  .catch((error) => {
    console.log(error.message); // Log error message in case of failure
  });
