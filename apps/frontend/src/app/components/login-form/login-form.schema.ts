import z from 'zod'

export const FORM_SCHEMA = z.object({
  email: z.email(),
  password: z.string().min(1, 'Password is required'),
})
