import express from "express";
import {CREATE_STOCK, FETCH_ALL_STOCKS, GET_ONE_STOCK_BY_ID} from "../constants/routes.js";
import stockController from "../controller/stock-controller.js";
import {verifyToken} from "../middlewares/auth.js";

const stockRoute = express.Router()

stockRoute.get(FETCH_ALL_STOCKS,[verifyToken],stockController.findAll)
stockRoute.post(CREATE_STOCK,[verifyToken],stockController.createStock)
stockRoute.get(GET_ONE_STOCK_BY_ID,[verifyToken], stockController.findById)
export default stockRoute