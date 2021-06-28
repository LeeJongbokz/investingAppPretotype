import express from "express";
import routes from "../routes";
import {home} from "../controllers/homeControllers";
import {getPhoneNum, postPhoneNum} from "../controllers/userControllers";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.post(routes.home, postPhoneNum);

globalRouter.get(routes.phoneNum, getPhoneNum);

export  default globalRouter;