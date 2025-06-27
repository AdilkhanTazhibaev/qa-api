import db from "../config/db";
import {AnswerDto} from "../models/question.model";
import {AnswerCreateDto} from "../validators/answer.validator";
import {TPagination} from "../types";

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
    static getByUserId(userId: number, params: TPagination) {
        return db.answer.findMany({
            skip: (params.page - 1) * params.limit,
            take: params.limit,
            where: {
                userId,
            }
        })
    }
}
