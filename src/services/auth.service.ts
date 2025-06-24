import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {LoginAuthDto} from "../validators/auth.validator";
import {AuthRepository} from "../repositories/auth.repository";

export class AuthService {
    static async create(data: LoginAuthDto) {
       const user = await AuthRepository.findByEmail(data)
        if (user) {
            throw {
                status: 400,
                message: `User with email ${data.email} already exists`
            }
        }
        const password = await bcrypt.hash(data.password,10)

        return await AuthRepository.register({
            email: data.email,
            password,
            role: data.role
        })
    }
    static async login(data: LoginAuthDto) {
        const user = await AuthRepository.findByEmail(data)
        if(!user) {
            throw {status: 404, message: 'Not found user (email)'}
        }

        const isMatch = await bcrypt.compare(data.password, user.password)
        if(!isMatch) {
            throw { status: 401, message: 'Invalid credentials (password)' }
        }

        const token = jwt.sign({
            id: user.id,
            email: user.email,
            role: user.role
        }, 'TEST' as string, {
            expiresIn: '7d'
        })

        return {
            token,
            user: {
                id: user.id,
                email: user.email
            }
        }
    }
}
