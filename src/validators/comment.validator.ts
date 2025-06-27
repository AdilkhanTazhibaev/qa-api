import { z } from 'zod'

export const CommentCreateSchema = z.object({
    text: z.string().min(1),
    questionId: z.number(),
    userId: z.number()
})

export type CommentDto = z.infer<typeof CommentCreateSchema>
