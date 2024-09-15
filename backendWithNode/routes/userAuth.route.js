import express, { Router } from 'express'
import {RegisterUser,OTPVerification,LoginUser,LogoutUser} from '../controllers/AuthController.js'

const router=Router()


router.route('/v1/registeruser').post(RegisterUser);
router.route('/v1/otpverify').post(OTPVerification);
router.route('/v1/loginuser').post(LoginUser);
router.route('/v1/logout').post(LogoutUser);



export default router