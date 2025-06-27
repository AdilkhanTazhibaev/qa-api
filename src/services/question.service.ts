
import {QuestionRepository} from "../repositories/question.repository";
import {CreateQuestionDto} from "../validators/question.validators";
import {TPagination} from "../types";

export class QuestionService {
    static async create(data: CreateQuestionDto) {
        return QuestionRepository.create(data)
    }
    static async getAll(userId: number, params: TPagination) {
        return QuestionRepository.getAll(userId, params)
    }
    static async getById(id: number, userId: number) {
        return QuestionRepository.getById(id, userId)
    }

    static async checkOwnership(id: number, userId: number): Promise<boolean> {
        const question = await this.getById(id, userId)
        return question?.userId === userId
    }
    static async delete(id: number, userId: number) {
        const isOwner = await this.checkOwnership(id, userId)
        if(!isOwner) {
            throw {
                message: `Forbidden: Question: ${id} has not ${userId}`,
                status: 403
            }
        }
        return QuestionRepository.deleteById(id)
    }
}
