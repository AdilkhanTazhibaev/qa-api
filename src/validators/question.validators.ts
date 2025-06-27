import { z } from 'zod'

export const CreateQuestionSchema = z.object({
    title: z.string().min(5),
    description: z.string().min(10),
    userId: z.any(),
    fileUrl: z.any()
})

export type CreateQuestionDto = z.infer<typeof CreateQuestionSchema>
