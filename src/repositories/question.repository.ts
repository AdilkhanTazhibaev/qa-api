
import db from "../config/db";
import {CreateQuestionDto} from "../validators/question.validators";
import {TPagination} from "../types";

export class QuestionRepository {
    static create(data: CreateQuestionDto) {
        return db.question.create({
            data: {
                title: data.title,
                description: data.description,
                userId: data.userId as number,
                fileUrl: data.fileUrl
            },
        })
    }
    static async getAll(userId: number, params: TPagination) {
        const where = {
            userId,
            ...(params.search && {
                title: {
                    contains: params.search as string,
                }
            })
        }
        const total = await db.question.count(
            {
                where
            }
        )

        const data = await db.question.findMany({
            skip: (params.page - 1) * params.limit,
            take: params.limit,
            include: {
                answers: true,
                _count: {
                    select: { likes: true }
                },
            },
            where
        })
        if (params?.sort === 'likes') {
            data.sort((a, b) => b._count.likes - a._count.likes)
        }

        return {
            data:  data.map((item) => ({
                ...item,
                likeCount: item?._count?.likes
            })),
            meta: {
                page: params.page,
                limit: params.limit,
                total,
                pages: Math.ceil(total / params.limit),
            }
        }
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
