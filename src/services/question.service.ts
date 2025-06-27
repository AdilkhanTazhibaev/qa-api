
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
    static async delete(id: number) {
        return QuestionRepository.deleteById(id)
    }
}
