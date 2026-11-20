'use client'
import styles from './NewsLetterForm.module.scss'
import useRHF from '@/src/hooks/useRHF'
import { Controller, FormProvider, useWatch } from 'react-hook-form'
import { defaultNewsLetterValues, newsLetterSchema, newsLetterType } from './schemas/newsLetterSchema'

import APIResponseMessage from '@/src/components/ui/Form/ApiResponseMessage/ApiResponseMessage'
import { useTranslations } from 'use-intl'
import { useSaveNewsLetterMutation } from '@/src/api/RTKQuery/newsLetterApi'
import { useEffect } from 'react'
import Button from '@/src/components/ui/Button/Button'

const NewsLetterForm = () => {
	const t = useTranslations('NewsLetter')
	
	const [saveNewsletter] = useSaveNewsLetterMutation()
	const { methods, onSubmit, successMessage } = useRHF<newsLetterType>({
		schema: newsLetterSchema,
		defaultValues: defaultNewsLetterValues,
	})

	const {
		control,
		handleSubmit,
		clearErrors,
		formState: { isSubmitting, errors },
	} = methods

	const [email] = useWatch({ control, name: 'email' })

	const handleSubmitRequest = onSubmit(data => saveNewsletter(data).unwrap())

	useEffect(() => {
		if (email) clearErrors('root')
	}, [clearErrors, email])

	return (
		<FormProvider {...methods}>
			<div className={styles.newsLetterWrapper}>
				<form
					aria-busy={isSubmitting}
					autoComplete="off"
					onSubmit={handleSubmit(handleSubmitRequest)}
					className={styles.newsLetterForm}>
					<Controller
						control={control}
						name="email"
						render={({ field: { onChange, value }, fieldState: { error } }) => {
							return (
								<input
									type="text"
									id="email"
                                    value={value}
                                    onChange={e =>{
                                        const value = e.target.value
                                        onChange(value)
                                    }}
                                    placeholder={t('Placeholder')}
                                    className={styles.newsLetterInput}
									readOnly={isSubmitting}
									aria-invalid={!!error}
									aria-describedby={error ? `email-error` : undefined}
								/>
							)
						}}
					/>
                    <Button type='button' size='xs' ariaLabel={t('Subscribe')} className={styles.newsLetterButton}>Subscribe now</Button>
				</form>
					{(errors.root?.message || successMessage) && (
						<APIResponseMessage messageType={successMessage ? 'success' : 'error'} className={styles.apiResponse}>
							{errors.root?.message ? t(errors.root?.message) : t(successMessage)}
						</APIResponseMessage>
					)}

                    <p></p>
			</div>
		</FormProvider>
	)
}

export default NewsLetterForm
