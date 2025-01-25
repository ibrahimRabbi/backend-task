import { Router } from "express";
import { InsertUserController } from "./user.controller";


export const userRoute = Router()

userRoute.post('/',InsertUserController)