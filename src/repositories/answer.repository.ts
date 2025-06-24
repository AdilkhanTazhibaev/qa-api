import db from "../config/db";
import {AnswerDto} from "../models/question.model";
import {AnswerCreateDto} from "../validators/answer.validator";

export class AnswerRepository {
    static create(data: AnswerCreateDto) {
        return db.answer.create({data})
    }
    static getByQuestionId(questionId: number) {
        return db.answer.findMany({
            where: {
                questionId,
            }
        })
    }
    static getByUserId(userId: number) {
        return db.answer.findMany({
            where: {
                userId,
            }
        })
    }
}
