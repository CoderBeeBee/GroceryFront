import z from 'zod'

export const createAccountSchema = z
	.object({
		email: z.email().trim().min(6, { error: 'emailTooShort' }).max(254, { error: 'emailTooLong' }),
		password: z.string().trim().min(8, { error: 'passwordTooShort' }).max(32, { error: 'passwordTooLong' }),
		repeatPassword: z.string().trim(),
		firstName: z.string().trim().min(1, { error: 'firstNameTooShort' }).max(100, { error: 'firstNameTooLong' }),
		lastName: z.string().trim().min(1, { error: 'lastNameTooShort' }).max(100, { error: 'lastNameTooLong' }),
		consents: z.boolean().refine(v => v === true, { error: 'terms' }),
	})
	.refine(data => data.password === data.repeatPassword, {
		error: 'repeatPassword',
		path: ['repeatPassword'],
	})
	// .transform(({repeatPassword,...data})=> data)

export type createAccountType = z.infer<typeof createAccountSchema>

export type createAccountRequest = Omit<createAccountType,'repeatPassword'>
// export type CreateAccountFormType = z.input<typeof createAccountSchema>
// export type CreateAccountType = z.output<typeof createAccountSchema>
export const defaultAccountValues = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	repeatPassword: '',
	consents: false,
}
