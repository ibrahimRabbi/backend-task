import { NextFunction, Request, response, Response } from "express";
import insertUserservice from "./user.services";

export const InsertUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const insertUserInDd = await insertUserservice(req.body)
        res.status(200).json({ success: true, status: 200, response: insertUserInDd })
    } catch (err: any) {
        next(err)
    }
}