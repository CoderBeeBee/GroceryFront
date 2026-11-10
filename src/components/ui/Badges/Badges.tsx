import clsx from 'clsx'
import styles from './Badges.module.scss'
import { useTranslations } from 'next-intl'
import { BadgesProps, BaseBadge } from './types/Badges.types'

const Badges = <T extends BaseBadge>({ data, badgesIcons }: BadgesProps<T>) => {
	const t = useTranslations('Hero')
	return (
		<div className={clsx(styles.heroBadgesWrapper)}>
			{data.map((item, index) => {
				const Icon = badgesIcons[item.type](styles)
				return (
					<div key={index} className={clsx(styles.badgesBox)}>
						<div className={clsx(styles.badgesBoxContent)}>
							{Icon}
							<div className={clsx(styles.badgesInfo)}>
								<p className={clsx(styles.badgesTitle)}>{t(item.title)}</p>
								<span className={clsx(styles.badgesSubtitle)}>{t(item.subtitle)}</span>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Badges
