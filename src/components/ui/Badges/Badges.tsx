import clsx from 'clsx'
import styles from './Badges.module.scss'
import { useTranslations } from 'next-intl'
import { BadgesProps, BaseBadge } from './types/Badges.types'

const Badges = <T extends BaseBadge>({ data, badgesIcons }: BadgesProps<T>) => {
	const t = useTranslations('Hero')
	return (
		<div className={clsx(styles.heroTopDelivery)}>
			{data.map((item, index) => {
				const Icon = badgesIcons[item.type](styles)
				return (
					<div key={index} className={clsx(styles.deliveryBox)}>
						<div className={clsx(styles.deliveryBoxContent)}>
							{Icon}
							<div className={clsx(styles.deliveryInfo)}>
								<p className={clsx(styles.deliveryTitle)}>{t(item.title)}</p>
								<span className={clsx(styles.deliverySubtitle)}>{t(item.subtitle)}</span>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Badges
