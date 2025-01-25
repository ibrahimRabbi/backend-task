import { NextFunction, Request, Response } from "express";

export const globalError = (err: any, req:Request, res:Response, next:NextFunction) => {
    res.status(404).json({
        success: false,
        status: 404,
        errorMessage: err.message,
        errorSource : err
    })
}