import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./database/database.js";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();

//dotenv
dotenv.config();

//middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

//Setting up a view engine
app.set("view engine", "ejs");

//import routes
import route from "./routes/route.js";

//routes
app.use(route);

//connect database
connectDatabase();

export default app;
