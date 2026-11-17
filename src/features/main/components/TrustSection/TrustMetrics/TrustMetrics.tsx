import Button from '@/src/components/ui/Button/Button'
import styles from './TrustMetrics.module.scss'
import clsx from 'clsx'
import { certificatesData, certificatesIcon, trustData, trustIcon } from '../../../data/trustData'
import { Leaves2SVG } from '@/src/assets/icons/ShopIcons'
import { useTranslations } from 'next-intl'

const TrustMetrics = () => {
	const t = useTranslations('Metrics')
	return (
		<div className={clsx('row', styles.trustMetricsWrapper)}>
			<div className={styles.socialProofCard}>
				{trustData.map((item, index) => {
					const Icon = trustIcon[item.type](styles)
					return (
						<div key={index} className={styles.socialProofBox}>
							<div className={styles.iconBox}>{Icon}</div>
							<div className={styles.textBox}>
								<p className={styles.textBoxTitle}>{item.title}</p>
								<span className={styles.textBoxSubTitle}>{t(item.subtitle)}</span>
							</div>
							<span className={styles.textBoxInfo}>{t(item.info)}</span>
						</div>
					)
				})}
			</div>
			<div className={styles.certificatesCard}>
				<h4 className={styles.certificatesCardTitle}>
					<div className={styles.certificatesCardTitleBox}>
						{t('Certified')}
						<Leaves2SVG className={styles.trustIcon} />
					</div>
					<div className={styles.certificatesCardTitleBox}>
						{t('Trusted')}
						<Leaves2SVG className={styles.trustIcon} />
					</div>
					<div className={styles.certificatesCardTitleBox}>
						{t('Pure')}
						<Leaves2SVG className={styles.trustIcon} />
					</div>
				</h4>
				<div className={styles.certificates}>
					{certificatesData.map((item, index) => {
						const Icon = certificatesIcon[item.type](styles)

						return (
							<div key={index} className={styles.certificatesBox}>
								<div className={styles.certificateIconBox}>{Icon}</div>
								<span className={styles.certificateTitle}>{t(item.title)}</span>
							</div>
						)
					})}
				</div>
			</div>
			<div className={styles.trustIndicators}>
				
				<div className={styles.trustContent}>
					<h4 className={styles.trustTitle}>{t('Our Farm')}</h4>
					<p className={styles.trustText}>{t('Work')}</p>
					<Button href="/our-story" ariaLabel="Learn More" size="xs" 
					
					>
						{t('Learn')}
					</Button>
				</div>
			</div>
		</div>
	)
}

export default TrustMetrics
