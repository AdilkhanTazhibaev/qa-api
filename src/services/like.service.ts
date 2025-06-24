import {LikeDto} from "../validators/like.validator";
import {LikeRepository} from "../repositories/like.repository";

export class LikeService {
    static async toggleLike(data: LikeDto) {
        const like = await LikeRepository.getById(data)
        console.log(like)
    }
}
