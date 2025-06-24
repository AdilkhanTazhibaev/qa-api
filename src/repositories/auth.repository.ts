import db from "../config/db";
import {LoginAuthDto} from "../validators/auth.validator";

export class AuthRepository {
    static findByEmail(data: LoginAuthDto) {
        return db.user.findUnique({
            where: {email: data.email}
        })
    }
    static register(data: LoginAuthDto) {
        return db.user.create({data})
    }
}
