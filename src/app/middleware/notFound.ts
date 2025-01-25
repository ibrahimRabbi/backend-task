import { NextFunction, Request, Response } from "express"


const notFounds = (req:Request, res:Response, next:NextFunction) => {
    return res.status(401).json({ success: false, status:404, message: 'route not found' })
}

export default notFounds