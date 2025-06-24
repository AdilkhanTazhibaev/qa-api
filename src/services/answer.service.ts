import {AnswerRepository} from "../repositories/answer.repository";
import {AnswerDto} from "../models/question.model";
import db from "../config/db";
import {AnswerCreateDto} from "../validators/answer.validator";

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
    static async getByUserId(userId: number) {
        const answer = await AnswerRepository.getByUserId(userId)
        if(!answer.length) {
            throw {status: 404, message: `Answer is not empty by ${userId}`}
        }
        return answer
    }
}
