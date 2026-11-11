import clsx from 'clsx'
import styles from './RemoveButton.module.scss'
import { ReactNode } from 'react'
import { TrashSVG } from '@/src/assets/icons/DashboardIcons'

type ButtonSize = 'es' | 'xs' | 'sm' | 'md' | 'lg'
type ButtonProps = {
	children?: ReactNode
	ariaLabel: string

	size?: ButtonSize

	icon?: 'trash' | null

	className?: string
	onClick?: () => void
}
const RemoveButton = ({
	ariaLabel,

	size = 'md',
	icon = 'trash',

	children,
	className,

	onClick,
	...props
}: ButtonProps) => {
	const buttonStyles = clsx(styles.button, styles[size], className)
	const content = (
		<>
			{children && <span className={styles.buttonTitle}>{children}</span>}

			{icon ? <TrashSVG className={styles.trashSVG} /> : ''}
		</>
	)
	return (
		<button type="button" aria-label={ariaLabel} className={buttonStyles} onClick={onClick} {...props}>
			{content}
		</button>
	)
}

export default RemoveButton
