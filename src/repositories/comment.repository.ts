import {CommentDto} from "../validators/comment.validator";
import db from "../config/db";

export class CommentRepository {
    static create(data: CommentDto) {
        return db.comment.create({data})
    }
}
