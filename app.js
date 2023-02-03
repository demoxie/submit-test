import cookieParser from "cookie-parser";
import morgan from "morgan";
import appRoutes from "./src/routes/index.js";
import express from 'express'
import cors from "cors";

const app = express();

app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(appRoutes.userRoute);
app.use(appRoutes.productRoute);
app.use(appRoutes.stockRoute)

export default app;
