import {Request, Response} from "express";
import {LikeService} from "../services/like.service";
import {sendError, sendSuccess} from "../helpers/responseHelper";

export class LikeController {
    static async toggle(request: Request, response: Response) {
        try {
            await LikeService.toggleLike({
                userId: request.userId as number,
                questionId: Number(request.params?.questionId) as number
            })
            sendSuccess(response, 'Success')
        }  catch (e: any) {
            sendError(response, 'ERROR', e?.status, e)
        }
    }
    static async getList(request: Request, response: Response) {
        try {
          const list =  await LikeService.getLikes({
                userId: request.userId as number,
                questionId: Number(request.params?.questionId) as number
            })
            sendSuccess(response, 'Success', list)
        }  catch (e: any) {
            sendError(response, 'ERROR', e?.status, e)
        }
    }
}
