import Usermodel from "../../schema/user.model.js";
export const getUserDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    if (!userId || userId.length !== 24) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Something went wrong on get user details !",
      });
    }
    const user = await Usermodel.findById(userId);
    if (!user) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Something went wrong on get user details !",
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
  } catch (err) {
    console.log(`Something went wrong on get user details : ! ${err.message} `);
    res.status(500).json({
      success: false,
      error: true,
      message: "Something went wrong on get user details !",
    });
  }
};

export const getOwnUserDetails = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId || userId.length !== 24) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Something went wrong on get user details  ok !",
      });
    }

    const user = await Usermodel.findById(userId);
    if (!user) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Something went wrong on get user details ok !",
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
  } catch (err) {
    console.log(`Something went wrong on get user details : ! ${err.message} `);
    res.status(500).json({
      success: false,
      error: true,
      message: "Something went wrong on get user details !",
    });
  }
};
