import { ArrowNext } from '@/src/assets/icons/ArrowsIcons'
import { Link, NavigationHref } from '@/src/lib/i18n/navigation'
import clsx from 'clsx'
import { type ReactNode } from 'react'
import styles from './Button.module.scss'
type ButtonProps = {
	children: ReactNode
	ariaLabel: string
	variant: 'green' | 'yellow'
	type?: 'submit' | 'reset' | 'button' | undefined
	href?: NavigationHref
	className?: string
	onClick?: () => void
}
// & Omit<ComponentProps<'button'>, 'children' | 'className'>
const Button = ({
	ariaLabel,
	type = 'submit',
	variant = 'green',
	href,
	children,
	className,
	onClick,
	...props
}: ButtonProps) => {
	const buttonStyles = clsx(styles.button, styles[variant], className)
	const content = (
		<>
			<span className={styles.buttonTitle}>{children}</span>
			<ArrowNext className={styles.arrowNextSVG} />
		</>
	)
	if (href) {
		return (
			<Link href={href} aria-label={ariaLabel} className={buttonStyles} onClick={onClick}>
				{content}
			</Link>
		)
	}

	return (
		<button type={type} aria-label={ariaLabel} className={buttonStyles} onClick={onClick} {...props}>
			{content}
		</button>
	)
}

export default Button
