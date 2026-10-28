import z from 'zod'

export const signInSchema = z
    .object({
        email: z.email().trim().min(6, { error: 'emailTooShort' }).max(254, { error: 'emailTooLong' }),
        password: z.string().trim().min(8, { error: 'passwordTooShort' }).max(32, { error: 'passwordTooLong' }),
       
    })
    

export type signInType = z.infer<typeof signInSchema>

export const defaultSignInValues = {
   
    email: '',
    password: '',
    
}
