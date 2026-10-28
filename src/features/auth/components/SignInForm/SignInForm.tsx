'use client'
import { FormProvider, useWatch } from 'react-hook-form'
import styles from './SignInForm.module.scss'

import { useTranslations } from 'next-intl'
import { SITE_NAME } from '@/src/config/site'
import Logo from '@/src/components/ui/Logo/Logo'
import { Link, useRouter } from '@/src/lib/i18n/navigation'
import clsx from 'clsx'
import RHFInput from '@/src/components/ui/Form/RHFInput/RHFInput'
import AuthButton from '@/src/components/ui/Form/AuthButton/AuthButton'
import APIResponseMessage from '@/src/components/ui/Form/ApiResponseMessage/ApiResponseMessage'
import SocialLinks from '@/src/components/ui/SocialLinks/SocialLinks'
import { defaultSignInValues, signInSchema, signInType } from '../../schemas/signInSchema'
import useRHF from '@/src/hooks/useRHF'
import { useSignInMutation } from '@/src/api/userApi'
import { useEffect } from 'react'
import { setSignIn } from '@/src/store/useAuthStore'

const SignInForm = () => {
	const t = useTranslations('AuthForm')
	const [signIn, { isSuccess }] = useSignInMutation()
	const router = useRouter()
	const { methods, successMessage, onSubmitHandler } = useRHF<signInType>({
		schema: signInSchema,
		defaultValues: defaultSignInValues,
	})

	const {
		control,
		handleSubmit,
		clearErrors,
		formState: { isSubmitting, errors },
	} = methods

	const [email, password] = useWatch({ control, name: ['email', 'password'] })

	const onSubmit = async (data: signInType) => {
		const res = await signIn(data).unwrap()
		console.log(res)
		if (res) {
			setSignIn(res)
		}
	}
	useEffect(() => {
		if (isSuccess) {
			const timer = setTimeout(() => {
				router.replace('/')
			}, 300)

			return () => clearTimeout(timer)
		}
	}, [isSuccess, router])

	useEffect(() => {
		if (email || password) {
			clearErrors('root')
		}
	}, [clearErrors, email, password])

	return (
		<FormProvider {...methods}>
			<div className={styles.signInFormContainer}>
				<div className={styles.signInFormWrapper}>
					<div className={styles.logoWrapper}>
						<Logo text={SITE_NAME} />
					</div>
					<div className={styles.signInTextWrapper}>
						<h1 className={styles.signInTittle}>{t('Sign In')}</h1>
						<p className={styles.signInText}>
							{t(`Don't have an account?`)} <Link href="/create-account">{t('Sign Up')}</Link>
						</p>
					</div>
					<form
						className={clsx(styles.formWrapper)}
						aria-busy={isSubmitting}
						autoComplete="off"
						onSubmit={handleSubmit(onSubmitHandler(onSubmit))}>
						<RHFInput<signInType>
							type="email"
							name="email"
							id="email"
							label="Email"
							placeholder="Enter your email"
							isSubmitting={isSubmitting}
						/>
						<RHFInput<signInType>
							type="password"
							name="password"
							id="password"
							label="Password"
							placeholder="Enter your password"
							isSubmitting={isSubmitting}
						/>
						<Link
							className={`${styles.forgotPassword}`}
							href={{
								pathname: `/reset-password`,
								query: { email },
							}}>
							{t(`forgotPassword`)}
						</Link>
						{(errors.root?.message || successMessage) && (
							<APIResponseMessage messageType={successMessage ? 'success' : 'error'} className={styles.apiResponse}>
								{errors.root?.message ? t(errors.root?.message) : t(successMessage)}
							</APIResponseMessage>
						)}
						<AuthButton
							isSubmitting={isSubmitting}
							type="submit"
							ariaLabel={isSubmitting ? t('Logging') : t('Sign In')}>
							{isSubmitting ? t('Logging') : t('Sign In')}
						</AuthButton>
					</form>

					<SocialLinks />
				</div>
			</div>
		</FormProvider>
	)
}

export default SignInForm
