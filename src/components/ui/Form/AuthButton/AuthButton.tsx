import { ReactNode } from 'react'
import styles from './AuthButton.module.scss'
import clsx from 'clsx'

interface AuthButtonProps {
	children: ReactNode
	type: 'submit' | 'button'
	isSubmitting?: boolean
	handleResetFields?: () => void
	handleResend?: () => void
	onClick?: () => void

	ariaLabel?: string
}

const AuthButton = ({
	children,
	isSubmitting,
	onClick,
	handleResetFields,
	handleResend,
	ariaLabel,

	type,
}: AuthButtonProps) => {
	
	return (
		<button
			type={type}
			disabled={isSubmitting}
			onClick={() => {
				onClick?.()
				handleResetFields?.()
				handleResend?.()
			}}
			aria-label={ariaLabel}
			className={clsx(styles.authButton)}>
			{children}
			{isSubmitting && (
				<>
					<span className={styles.animate1}>.</span>
					<span className={styles.animate2}>.</span>
					<span className={styles.animate3}>.</span>
				</>
			)}
		</button>
	)
}

export default AuthButton
