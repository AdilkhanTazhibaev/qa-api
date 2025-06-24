
import {QuestionRepository} from "../repositories/question.repository";
import {CreateQuestionDto} from "../validators/question.validators";

export class QuestionService {
    static async create(data: CreateQuestionDto) {
        return QuestionRepository.create(data)
    }
    static async getAll(userId: number) {
        return QuestionRepository.getAll(userId)
    }
    static async getById(id: number, userId: number) {
        return QuestionRepository.getById(id, userId)
    }
    static async delete(id: number) {
        return QuestionRepository.deleteById(id)
    }
}
