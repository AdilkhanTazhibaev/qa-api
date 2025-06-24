import { z } from 'zod'

export const LikeDtoSchema = z.object({
    questionId: z.number(),
    userId: z.number()
})

export type LikeDto = z.infer<typeof LikeDtoSchema>
