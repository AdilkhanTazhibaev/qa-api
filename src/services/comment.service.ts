import {CommentDto} from "../validators/comment.validator";
import {CommentRepository} from "../repositories/comment.repository";

export class CommentService {
    static async create(data: CommentDto) {
        return CommentRepository.create(data)
    }
}
