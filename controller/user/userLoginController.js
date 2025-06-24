import UserModel from "../../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Login controller
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) throw new Error("Please fill all the fields");

    const user = await UserModel.findOne({ email });
    if (!user) throw new Error("User not found with provided email");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Password is incorrect");

    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      success: true,
      error: false,
      user: {
        _id: user._id,
        name: user.name,
        role: user.role,
      },
      message: "Login successful",
      token: token,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
      success: false,
      error: true,
    });
  }
};

// Verify controller
const verify = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

export { userLogin, verify };
