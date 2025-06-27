import {Request, Response} from "express";
import {sendError, sendSuccess} from "../helpers/responseHelper";
import {CommentCreateSchema} from "../validators/comment.validator";
import {CommentService} from "../services/comment.service";

export class CommentController {
    static async create(request: Request, response: Response) {
        const parsed = CommentCreateSchema.safeParse(request.body)
        if(!parsed.success) {
            sendError(response, 'Error', 400, parsed.error.format())
            return
        }
        try {
            await CommentService.create({
                ...parsed.data,
                userId: request.userId as number
            })
            sendSuccess(response, 'Created', undefined, 201)
        }catch (e) {
            sendError(response, 'ERROR', 500, e)
        }
    }
}
