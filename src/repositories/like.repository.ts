import db from "../config/db";
import {LikeDto} from "../validators/like.validator";

export class LikeRepository {
    static create(data: LikeDto) {
        return db.like.create({data})
    }

    static getById(data: LikeDto) {
        return db.like.findMany({
            where: {
                questionId: data.questionId
            }
        })
    }
}
