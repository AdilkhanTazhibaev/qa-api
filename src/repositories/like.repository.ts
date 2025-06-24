import db from "../config/db";
import {LikeDto} from "../validators/like.validator";

export class LikeRepository {
    static create(data: LikeDto) {
        return db.like.create({data})
    }

    static getListById(data: LikeDto) {
        return db.like.findMany({
            where: {
                questionId: data.questionId
            }
        })
    }
    static findByUserAndQuestion(userId: number, questionId: number) {
        return db.like.findUnique({
            where: {
                userId_questionId: {
                    userId,
                    questionId
                }
            }
        })
    }

    static deleteByUserAndQuestion(userId: number, questionId: number) {
        return db.like.delete({
            where: {
                userId_questionId: {
                    userId,
                    questionId
                }
            }
        })
    }
}
