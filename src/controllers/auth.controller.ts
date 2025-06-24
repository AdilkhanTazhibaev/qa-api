import {Request, Response} from 'express'
import {sendError, sendSuccess} from "../helpers/responseHelper";
import {AuthService} from "../services/auth.service";
import {LoginAuthSchema} from "../validators/auth.validator";

export class AuthController {
    static async login(request: Request, response: Response) {
        const payload = LoginAuthSchema.safeParse(request.body)
        if (!payload.success) {
            return sendError(response, 'Bad cred', 400, payload.error.format())
        }

        try {
            const result = await AuthService.login(payload.data)
            return sendSuccess(response, 'Login successful', result)
        } catch (e: any) {
            return sendError(
                response,
                e.message || 'Unexpected error',
                e.status || 500
            )
        }
    }



    static async register(request: Request, response: Response) {
        const payload = LoginAuthSchema.safeParse(request.body)
        if (!payload.success) {
            return sendError(response,'Bad cred', 400, payload.error.format())
        }
        try {
            const result = await AuthService.create(payload.data)
            return sendSuccess(response, 'Register successful', result)
        } catch (e: any) {
            return sendError(
                response,
                e.message || 'Unexpected error',
                e.status || 500
            )
        }
    }
}
