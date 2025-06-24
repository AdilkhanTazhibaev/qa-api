import { z } from 'zod'

export const AnswerCreateSchema = z.object({
    text: z.string().min(2),
    userId: z.number(),
    questionId: z.number(),
    Question: z.any(),
    author: z.string()
})

export type AnswerCreateDto = z.infer<typeof AnswerCreateSchema>
