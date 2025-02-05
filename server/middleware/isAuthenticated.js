import jwt from "jsonwebtoken";
export const isAuthenticated = (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        error: true,
        message: "unauthorized access! Please login first",
      });
    }

    const docodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!docodedToken) {
      return res.status(401).json({
        success: false,
        error: true,
        message: "unauthorized access! Please login first",
      });
    }
    req.userId = docodedToken.id;
    next();
  } catch (error) {
    console.log(`Somthing went wrong on login user : ! ${error.message} `);
    res.status(500).json({
      success: false,
      error: true,
      message: "Something went wrong on login user ok !",
    });
  }
};

// import jwt from "jsonwebtoken";
// export const isAuthenticated = (req, res, next) => {
//   try {
//     const token =
//       req.cookies?.token || req.headers.authorization?.split(" ")[1];

//     if (!token) {
//       return res.status(401).json({
//         success: false,
//         error: true,
//         message: "Unauthorized access! Please log in first",
//       });
//     }

//     // Verify Token
//     const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//     if (!decodedToken) {
//       return res.status(401).json({
//         success: false,
//         error: true,
//         message: "Unauthorized access! Please log in again",
//       });
//     }

//     req.userId = decodedToken.id;
//     next();
//   } catch (error) {
//     console.error(`Authentication error: ${error.message}`);
//     res.status(500).json({
//       success: false,
//       error: true,
//       message: "Something went wrong with authentication!",
//     });
//   }
// };
