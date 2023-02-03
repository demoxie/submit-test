import express from "express";
import userController from "../controller/user-controller.js"
import {USER__SIGNUP_ROUTE, USER_LOGIN_ROUTE, USER_ROUTE} from "../constants/routes.js";
import {verifyToken} from "../middlewares/auth.js";
const userRoute = express.Router();

/* GET users listing. */
userRoute.get(USER_ROUTE, [verifyToken], userController.findByAll);
userRoute.post(USER__SIGNUP_ROUTE, userController.create);
userRoute.post(USER_LOGIN_ROUTE,  userController.login);

export default userRoute;
