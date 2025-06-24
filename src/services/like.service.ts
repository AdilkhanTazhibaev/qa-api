import {LikeDto} from "../validators/like.validator";
import {LikeRepository} from "../repositories/like.repository";

export class LikeService {
    static async toggleLike(data: LikeDto) {
        const like = await LikeRepository.findByUserAndQuestion(data.userId, data.questionId)
        if(!like) {
            await LikeRepository.create(data)
        } else {
            await LikeRepository.deleteByUserAndQuestion(data.userId, data.questionId)
        }
    }
    static async getLikes(data: LikeDto) {
        return await LikeRepository.getListById(data)
    }
}
