import z from 'zod'

export const newsLetterSchema = z.object({
	email: z.email().trim().min(6, { error: 'emailTooShort' }).max(254, { error: 'emailTooLong' }),
})

export type newsLetterType = z.infer<typeof newsLetterSchema>

export const defaultNewsLetterValues= {
    email:''
}