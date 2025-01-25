import { NextFunction, Request, Response } from "express"
import { profileModel } from "./profile.model"



export const createProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const profiles = await profileModel.create(req.body)
        res.status(200).json({
            success: true,
            status: 200,
            message: 'profile created successfully',
            response: profiles
        })
    } catch (error) {
        next(error)
    }
}

export const getProfiles = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const profiles = await profileModel.findById(req.params.id)
        res.status(200).json({
            success: true,
            status: 200,
            message: 'profile retrive successfully',
            response: profiles
        })
    } catch (error) {
        next(error)
    }
}