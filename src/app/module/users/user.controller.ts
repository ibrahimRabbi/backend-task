import { NextFunction, Request, response, Response } from "express";
import insertUserservice from "./user.services";
import { userModel } from "./user.model";
import { profileModel } from "../profiles/profile.model";



export const InsertUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const insertUserInDd = await insertUserservice(req.body)
        res.status(200).json({ success: true, status: 200, response: insertUserInDd })
    } catch (err: any) {
        next(err)
    }
}




export const getSingleUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getUser = await userModel.findById(req.params.id).populate('profile')
        if (!getUser) {
            throw new Error('user not found')
        }
        res.status(200).json({
            success: true,
            status: 200,
            message: 'user retrive successfully',
            response: getUser
        })
    } catch (err: any) {
        next(err)
    }
}


