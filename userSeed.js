import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/db.js"
import bcrypt from 'bcrypt'
import UserModel from "./models/user.js"

const userRegister = async () => {
  await connectDB();  // await ensures DB is connected first
  try {
    const hashPassword = await bcrypt.hash("admin", 10);
    const newUser = new UserModel({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashPassword,
      role: "admin"
    });
    await newUser.save();
    console.log("User created successfully");
  } catch (error) {
    console.log("Error creating user:", error.message);
  } finally {
    process.exit(); // Exit the script
  }
};

userRegister();
