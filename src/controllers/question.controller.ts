import { Request, Response } from 'express'
import {QuestionService} from "../services/question.service";
import {CreateQuestionSchema} from "../validators/question.validators";
import {sendError, sendSuccess} from "../helpers/responseHelper";

export class QuestionController {
    static async create(request: Request, response: Response) {
        const parsed = CreateQuestionSchema.safeParse(request.body)
        const fileUrl = request.file?.path
        if(!parsed.success) {
             response.status(400).json({ errors: parsed.error})
        }else  {
            try {
                await QuestionService.create({...parsed.data, userId: request.userId as number, fileUrl})
                sendSuccess(response, 'Created', undefined, 201)
            }catch (e) {
                sendError(response, 'Error', 500, e)
            }
        }
    }
    static async getAll(request: Request, response: Response) {
        try {
            const data =  await QuestionService.getAll(request.userId as number, {
                page: 1,
                limit: 10,
                search: ''
            })
            sendSuccess(response, 'Success', data)
        }catch (e) {
            sendError(response, 'Error', 500, e)
        }
    }

    static async getById(request: Request, response: Response) {
        try {
            const id = request.params?.id
            const data =  await QuestionService.getById(Number(id) as number, request.userId as number)
            if(!data) {
                return sendError(response, `Not found id: ${id}`, 404)
            }
            sendSuccess(response, 'Success', data)
        }catch (e) {
            sendError(response, 'Error', 500, e)
        }
    }

    static async deleteById(request: Request, response: Response) {
        try {
            const id = request.params?.id
            await QuestionService.delete(Number(id) as number, request.userId as number)
            sendSuccess(response, 'Deleted')
        }catch (e: any) {
            sendError(response, e?.message, e?.status || 500)
        }
    }
}
