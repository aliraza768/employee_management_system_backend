import express from 'express'
import userSigup from '../controller/user/userSignincontroller.js'


const router = express.Router()


{/* user routes */}

router.post("/signup" , userSigup)



export default router