import { Router } from "express";
import { getSingleUserController, InsertUserController } from "./user.controller";


export const userRoute = Router()

userRoute.post('/', InsertUserController)

userRoute.get('/:id', getSingleUserController)