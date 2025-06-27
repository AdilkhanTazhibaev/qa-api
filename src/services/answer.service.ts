import {AnswerRepository} from "../repositories/answer.repository";
import {AnswerCreateDto} from "../validators/answer.validator";
import {TPagination} from "../types";

export class AnswerService {
    static async create(data: AnswerCreateDto) {
       return await AnswerRepository.create(data)
    }
    static async getByQuestionId(questionId: number) {
       const answer = await AnswerRepository.getByQuestionId(questionId)
        if(!answer.length) {
            throw {status: 404, message: `Answer is not empty by ${questionId}`}
        }
        return answer
    }
    static async getByUserId(userId: number, params: TPagination) {
        const answer = await AnswerRepository.getByUserId(userId, params)
        if(!answer.length) {
            throw {status: 404, message: `Answer is not empty by ${userId}`}
        }
        return answer
    }
}
