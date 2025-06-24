import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

const VerifyUser = async (req, res, next) => {
  try {
    const authHeader = req.headers?.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "No token provided",
        success: false,
      });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await UserModel.findById(decoded._id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token: " + error.message,
      success: false,
    });
  }
};

export default VerifyUser;
