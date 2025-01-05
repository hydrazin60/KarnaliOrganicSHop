import jwt from "jsonwebtoken";
export const isAuthenticated = (req, res, next) => {
  try {
    const token = req.cookies?.token || req?.header;
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
      message: "Something went wrong on login user !",
    });
  }
};
