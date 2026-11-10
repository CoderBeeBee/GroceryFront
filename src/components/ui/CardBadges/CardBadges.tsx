import { ReactNode } from 'react'
import styles from './CardBadges.module.scss'
import clsx from 'clsx'
type CardBadgesType = {
	children: ReactNode
	variant?: 'organic' | 'fresh' | 'saleOrange' | 'saleRed'
	position?: 'top' | 'bottom'
}

const CardBadges = ({ children, variant = 'organic', position = 'top' }: CardBadgesType) => {
	return (
		<div className={clsx(styles.cardBadgesWrapper, styles[variant], styles[position])}>
			<p className={styles.cardBadgesName}>{children}</p>
		</div>
	)
}

export default CardBadges
