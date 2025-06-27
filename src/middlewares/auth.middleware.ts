import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
import {sendError} from "../helpers/responseHelper";
import db from "../config/db";

export const authMiddleware = async (request: Request, response: Response, next: NextFunction) => {
    const token = request.headers.authorization || ''
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET as string)  as jwt.JwtPayload & { id: number }
        const user = await db.user.findUnique({ where: { id: payload.id } })
        if (!user) {
            return sendError(response, 'User no longer exists', 401)
        }
        request.userId = payload?.id
        request.userRole = payload.role
        next()
    } catch (err) {
        return sendError(response, 'Unauthorized', 401, err)
    }
}

declare global {
    namespace Express {
        interface Request {
            userId?: number
            userRole?: string
        }
    }
}
