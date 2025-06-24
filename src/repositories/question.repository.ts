
import db from "../config/db";
import {CreateQuestionDto} from "../validators/question.validators";

export class QuestionRepository {
    static create(data: CreateQuestionDto) {
        return db.question.create({
            data: {
                title: data.title,
                description: data.description,
                userId: data.userId as number,
            },
        })
    }
    static getAll(userId: number) {
        return db.question.findMany({
            include: {
                answers: true,
                likes: true,
            },
            where: {
                userId: userId,
            },
        })
    }

    static deleteById(id: number) {
        return db.question.delete({
            where: {
                id
            }
        })
    }
    static getById(id: number, userId: number) {
        return db.question.findUnique({
            include: {
                answers: true,
                likes: true,
            },
            where: {id, userId}
        })
    }
}
