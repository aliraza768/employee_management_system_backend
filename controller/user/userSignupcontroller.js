import UserModel from "../../models/user.js";
import bcrypt from 'bcrypt';

const userSignup = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
      throw new Error("Please fill all the fields");
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    if (!hashPassword) {
      throw new Error("Something went wrong while hashing password");
    }

    const payload = {
      email,
      name,
      role: "user",
      password: hashPassword
    };

    const newUser = new UserModel(payload);
    const savedUser = await newUser.save();

    res.json({
      data: savedUser,
      message: "User created successfully",
      success: true,
      error: false
    });

  } catch (err) {
    res.json({
      message: err.message || err,
      success: false,
      error: true
    });
  }
};

export default userSignup;
