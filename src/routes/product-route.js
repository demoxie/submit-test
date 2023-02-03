import express from "express";
import productController from "../controller/product-controller.js";
import {CREATE_PRODUCT_ROUTE, FETCH_ALL_PRODUCTS_ROUTE} from "../constants/routes.js";
import {verifyToken} from "../middlewares/auth.js";

const productRoute = express.Router();

productRoute.get(FETCH_ALL_PRODUCTS_ROUTE,[verifyToken], productController.findAll);
productRoute.post(CREATE_PRODUCT_ROUTE, [verifyToken],productController.createProduct);

export default productRoute;