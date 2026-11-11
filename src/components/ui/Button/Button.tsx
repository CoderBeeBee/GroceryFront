import { ArrowNext } from '@/src/assets/icons/ArrowsIcons'
import { Link, NavigationHref } from '@/src/lib/i18n/navigation'
import clsx from 'clsx'
import { type ReactNode } from 'react'
import styles from './Button.module.scss'
import { AppPathnames } from '@/src/features/navigation/types/menu.types'
import { TrashSVG } from '@/src/assets/icons/DashboardIcons'

type ButtonVariant = 'primary' | 'secondary' | 'remove'
type ButtonSize = 'es' | 'xs' | 'sm' | 'md' | 'lg'
type ButtonProps = {
	children?: ReactNode
	ariaLabel: string
	variant?: ButtonVariant
	size?: ButtonSize
	type?: 'submit' | 'reset' | 'button' | undefined
	icon?: 'arrow' | 'trash' | null
	href?: AppPathnames
	className?: string
	onClick?: () => void
	params?: string | undefined
	disabled?:boolean
}
// & Omit<ComponentProps<'button'>, 'children' | 'className'>
const Button = ({
	ariaLabel,
	type = 'submit',
	variant = 'primary',
	size = 'md',
	icon = 'arrow',
	href,
	children,
	className,
	params,
	disabled,
	onClick,
	...props
}: ButtonProps) => {
	const buttonStyles = clsx(styles.button, styles[variant], styles[size], className)
	const content = (
		<>
			<span className={styles.buttonTitle}>{children}</span>

			{icon ? (
				icon === 'arrow' ? (
					<ArrowNext className={styles.arrowNextSVG} />
				) : (
					<TrashSVG className={styles.trashSVG} />
				)
			) : (
				''
			)}
		</>
	)
	if (href) {
		let finalHref = ''

		if (href.includes('[category]') && params) {
			finalHref = href.replace('[category]', params)
		} else if (href.includes('[slug]') && params) {
			finalHref = href.replace('[slug]', params)
		} else {
			finalHref = href
		}
		return (
			<Link href={finalHref as NavigationHref} aria-label={ariaLabel} className={buttonStyles} onClick={onClick}>
				{content}
			</Link>
		)
	}

	return (
		<button disabled={disabled} type={type} aria-label={ariaLabel} className={buttonStyles} onClick={onClick} {...props}>
			{content}
		</button>
	)
}

export default Button
