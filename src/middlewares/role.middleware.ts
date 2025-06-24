import {Request, Response, NextFunction, RequestHandler} from "express";

export function roleMiddleware(roles: string[]): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!roles.includes(req.userRole as string)) {
             res.status(403).json({ message: 'Forbidden', status: 403 })
            return
        }
        next()
    }
}
