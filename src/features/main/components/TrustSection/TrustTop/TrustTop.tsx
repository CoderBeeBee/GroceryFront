import clsx from 'clsx'
import styles from './TrustTop.module.scss'
import Badges from '@/src/components/ui/Badges/Badges'
import { heroBadges, heroBadgesIcons } from '../../../data/heroBadges'
import { LeavesSVG } from '@/src/assets/icons/ShopIcons'
import { useTranslations } from 'next-intl'
const TrustTop = () => {
	const t = useTranslations('TrustTop')
	return (
		<div className={clsx(styles.trustTop)}>
			<div className={clsx('row', styles.trustWrapper)}>
				<div className={clsx(styles.trustText)}>
					<div className={styles.miniBadges}>
						<div className={styles.miniBadgesIcon}>
							<LeavesSVG className={styles.leaveSVG} />
						</div>
						<span className={styles.miniBadgesText}>{t('BadgesText')}</span>
					</div>
					<h2 className={styles.trustName}>{t('TrustName')}</h2>
					<p className={styles.trustDescription}>
						{t('TrustDesc')}
					</p>
				</div>
				<Badges data={heroBadges} badgesIcons={heroBadgesIcons} position="start" />
			</div>
		</div>
	)
}

export default TrustTop
