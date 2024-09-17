import express, { Router } from 'express'
import {RegisterUser,OTPVerification,LoginUser,LogoutUser,verifyUser} from '../controllers/AuthController.js'

import VeifyAccessToken from '../middlewares/auth.js'

const router=Router()


router.route('/v1/registeruser').post(RegisterUser);
router.route('/v1/otpverify').post(OTPVerification);
router.route('/v1/loginuser').post(LoginUser);
router.route('/v1/logout').post(LogoutUser);
router.route('/v1/get',VeifyAccessToken).get(verifyUser);



export default router