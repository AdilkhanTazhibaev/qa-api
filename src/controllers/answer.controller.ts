import {Response, Request} from 'express'
import {sendError, sendSuccess} from "../helpers/responseHelper";
import { AnswerCreateSchema} from "../validators/answer.validator";
import {AnswerService} from "../services/answer.service";

export class AnswerController {
    static async create(request: Request, response: Response) {
        const parsed = AnswerCreateSchema.safeParse({
            ...request.body,
            userId: request.userId,
            author: String(request.userId)
        })

        if(!parsed.success) {
            return sendError(response, 'ERROR', 400, parsed.error.format())
        }

        try {
            const answer = await AnswerService.create(parsed.data)
            sendSuccess(response, 'Success', answer, 201)
        }catch (e) {
            sendError(response, 'ERROR', 500, e)
        }
    }

    static async getListByUserId(request: Request, response: Response) {
        try {
            const answer = await AnswerService.getByUserId(request.userId as number, {
                page: 1,
                limit: 2
            })
            sendSuccess(response, 'Success', answer, 200)
        }catch (e) {
            sendError(response, 'ERROR', 500, e)
        }
    }
    static async getListByQuestionId(request: Request, response: Response) {
        const questionId = request.params?.questionId
        try {
            const answer = await AnswerService.getByQuestionId(Number(questionId) as number)
            sendSuccess(response, 'Success', answer, 200)
        }catch (e: any) {
            sendError(response, 'ERROR', e?.status, e)
        }
    }
}
