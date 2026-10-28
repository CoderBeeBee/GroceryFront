import styles from './CreateAccountForm.module.scss'
import { FormProvider, useWatch } from 'react-hook-form'
import { createAccountSchema, createAccountType, defaultAccountValues } from '../../schemas/createAccountSchema'
import RHFInput from '@/src/components/ui/Form/RHFInput/RHFInput'
import clsx from 'clsx'
import { Link } from '@/src/lib/i18n/navigation'
import RHFCheckbox from '@/src/components/ui/Form/RHFCheckbox/RHFCheckbox'
import CheckMark from '@/src/components/ui/Form/CheckMark/CheckMark'
import Logo from '@/src/components/ui/Logo/Logo'
import { SITE_NAME } from '@/src/config/site'
import { useTranslations } from 'next-intl'
import AuthButton from '@/src/components/ui/Form/AuthButton/AuthButton'
import SocialLinks from '@/src/components/ui/SocialLinks/SocialLinks'
import { useEffect } from 'react'
import APIResponseMessage from '@/src/components/ui/Form/ApiResponseMessage/ApiResponseMessage'
import { useCreateAccountMutation } from '@/src/api/userApi'
import { useRouter } from 'next/navigation'
import useRHF from '@/src/hooks/useRHF'

const CreateAccountForm = () => {
	const t = useTranslations('AuthForm')
	const { methods, onSubmit, successMessage } = useRHF<createAccountType>({
		schema: createAccountSchema,
		defaultValues: defaultAccountValues,
	})

	const [createAccount, { isSuccess }] = useCreateAccountMutation()
	const router = useRouter()

	const {
		control,
		handleSubmit,
		clearErrors,
		formState: { isSubmitting, errors },
	} = methods

	const [firstName, lastName, email, password, repeatPassword, consents] = useWatch({
		control,
		name: ['firstName', 'lastName', 'email', 'password', 'repeatPassword', 'consents'],
	})

	const handleSubmitRequest = onSubmit(data => createAccount(data).unwrap())

	useEffect(() => {
		if (firstName || lastName || email || password || repeatPassword || consents) {
			clearErrors('root')
		}
	}, [clearErrors, consents, email, firstName, lastName, password, repeatPassword])

	useEffect(() => {
		if (isSuccess) {
			const timer = setTimeout(() => {
				router.replace('/')
			}, 3000)

			return () => clearTimeout(timer)
		}
	}, [isSuccess, router])

	return (
		<FormProvider {...methods}>
			<div className={styles.createAccountFormContainer}>
				<div className={styles.createAccountFormWrapper}>
					<div className={styles.logoWrapper}>
						<Logo text={SITE_NAME} />
					</div>
					<div className={styles.createAccountTextWrapper}>
						<h1 className={styles.createAccountTitle}>{t('Create an account')}</h1>
						<p className={styles.createAccountText}>
							{t('Already have an account ?')} <Link href="/sign-in">{t('Sign In')}</Link>
						</p>
					</div>
					<form
						className={clsx(styles.formWrapper)}
						aria-busy={isSubmitting}
						autoComplete="off"
						onSubmit={handleSubmit(handleSubmitRequest)}>
						<RHFInput<createAccountType>
							type="text"
							name="firstName"
							id="firstName"
							label="First Name"
							placeholder="Enter your name"
							isSubmitting={isSubmitting}
						/>
						<RHFInput<createAccountType>
							type="text"
							name="lastName"
							id="lastName"
							label="Last Name"
							placeholder="Enter your last name"
							isSubmitting={isSubmitting}
						/>
						<RHFInput<createAccountType>
							type="email"
							name="email"
							id="email"
							label="Email"
							placeholder="Enter your email"
							isSubmitting={isSubmitting}
						/>
						<RHFInput<createAccountType>
							type="password"
							name="password"
							id="password"
							label="Password"
							placeholder="Enter your password"
							isSubmitting={isSubmitting}
						/>
						<RHFInput<createAccountType>
							type="password"
							name="repeatPassword"
							id="repeatPassword"
							label="Repeat Password"
							placeholder="Repeat password"
							isSubmitting={isSubmitting}
						/>
						<div className={styles.checkbox}>
							<RHFCheckbox name="consents" id="consents" isSubmitting={isSubmitting}>
								<>
									<CheckMark isChecked={consents} className={styles.checkMark} />
									<span>
										{t('I have read and understood the')} <Link href="/terms-and-conditions">{t('Terms')}</Link>{' '}
										{t('and')} <Link href="/privacy-policy">{t('Privacy Policy')}</Link>
									</span>
								</>
							</RHFCheckbox>
						</div>
						{(errors.root?.message || successMessage) && (
							<APIResponseMessage messageType={successMessage ? 'success' : 'error'} className={styles.apiResponse}>
								{errors.root?.message ? t(errors.root?.message) : t(successMessage)}
							</APIResponseMessage>
						)}
						<AuthButton
							isSubmitting={isSubmitting}
							type="submit"
							ariaLabel={isSubmitting ? 'Creating' : 'Create account'}>
							{isSubmitting ? t('Creating') : t('Create account')}
						</AuthButton>
					</form>

					<SocialLinks />
				</div>
			</div>
		</FormProvider>
	)
}

export default CreateAccountForm
