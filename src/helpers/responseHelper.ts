import {Response} from "express";

export const sendSuccess = (
    res: Response,
    message: string,
    data?: any,
    status: number = 200
) => {
    res.status(status).json({
        status,
        message,
        ...(data && { data })
    })
}

export const sendError = (
    res: Response,
    message: string,
    status: number = 500,
    error?: any
) => {
    res.status(status).json({
        status,
        message,
        ...(error && { error })
    })
}


