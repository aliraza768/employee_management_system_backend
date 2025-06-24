// routes/userRoutes.js
import express from 'express';
import userSigup from '../controller/user/userSignupcontroller.js';
import { userLogin, verify } from '../controller/user/userLoginController.js';
import VerifyUser from '../middleware/Authmiddleware.js';
import Logout from '../controller/user/userLogoutController.js';

import addDepartmnet from '../controller/department/addNewDepartmentController.js';
import AllDepartment from '../controller/department/allDepartment.js';
import editDepartment from '../controller/department/editDepartment.js';
import DeleteDepartment from '../controller/department/deleteDepartment.js';

const router = express.Router();

// 🧑‍💻 User routes
router.post("/signup", userSigup);
router.post("/login", userLogin);
router.get("/verify", VerifyUser, verify);
router.get("/logout", Logout);

// 🏢 Department routes
router.post("/department", addDepartmnet); // this POST expects JSON body
router.get("/all", AllDepartment);
router.put("/edit", editDepartment);
router.delete("/delete", DeleteDepartment);

export default router;
