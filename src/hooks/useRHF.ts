import { zodResolver } from '@hookform/resolvers/zod'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { useState } from 'react'
import { DefaultValues, FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import z from 'zod'

type UseRHFProps<T extends FieldValues> = {
	schema: z.ZodType<T, T>
	defaultValues: DefaultValues<T>
}

const useRHF = <T extends FieldValues>({ schema, defaultValues }: UseRHFProps<T>) => {
	const [successMessage, setSuccessMessage] = useState<string>('')

	const methods = useForm<T>({
		mode: 'onSubmit',
		reValidateMode: 'onChange',
		resolver: zodResolver(schema),
		defaultValues,
	})

	const { reset, setError } = methods

	const onSubmit =
		(fn: (data: T) => Promise<{ message: string }>): SubmitHandler<T> =>
		async data => {
			try {
				const res = await fn(data)

				if (res) {
					setSuccessMessage(res.message)
					reset()
				}
			} catch (error) {
				const message = await getErrorMessage(error)

				setError('root', { message })
			}
		}

	const onSubmitHandler =
		(fn: (data: T) => Promise<unknown>): SubmitHandler<T> =>
		async data => {
			try {
				await fn(data)
			} catch (error) {
				const message = await getErrorMessage(error)

				setError('root', { message })
			}
		}
	const getErrorMessage = async (error: unknown) => {
		let message

		if (typeof error === 'object' && error !== null) {
			const fetchError = error as FetchBaseQueryError
			const data = fetchError.data

			if (data && typeof data === 'object') {
				message = 'message' in data ? String(data.message) : 'An unexpected error has occured'
			} else {
				message = 'An unexpected error has occured'
			}
		}

		return message
	}

	return {
		methods,
		successMessage,
		onSubmit,
		getErrorMessage,
		onSubmitHandler,
	}
}

export default useRHF
