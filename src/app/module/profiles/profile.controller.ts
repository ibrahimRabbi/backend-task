import { NextFunction, Request, Response } from "express"
import { profileModel } from "./profile.model"

export const getSingleUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getUser = await profileModel.findById(req.params.id)
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