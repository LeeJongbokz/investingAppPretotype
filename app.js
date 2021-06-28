import express from "express";
import globalRouter from "./routers/globalRouter";

import bodyParser from "body-parser";

import "./db";
import routes from "./routes";
import "./models/User.js";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

const handleListening = () => {
    console.log("Listening on localhost:4000")
}

app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(routes.home, globalRouter);

app.listen(PORT, handleListening);