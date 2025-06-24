import { z } from 'zod'

export const LoginAuthSchema = z.object({
    email: z.string().min(2).email(),
    password: z.string().min(8),
    role: z.enum(['USER', 'ADMIN']).optional()
})

export type LoginAuthDto = z.infer<typeof LoginAuthSchema>
