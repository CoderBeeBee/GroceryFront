import Button from '@/src/components/ui/Button/Button'
import styles from './TrustCTA.module.scss'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const TrustCTA = () => {
    const t = useTranslations('CTA')
	return (
		<div className={clsx('row', styles.trustCTAWrapper)}>
			<h3 className={styles.trustCTATitle}>
				{t('Start')} <span className={styles.ctaHealthy}>{t('Healthy')}</span> {t('Journey')}
			</h3>
			<div className={styles.trustCTABox}>
				<span className={styles.trustCTAText}>{t('Choose')}</span>
				<Button href="/shop" size='xs' ariaLabel="Go to Shop" className={styles.ctaButton}>
					{t('Shop Now')}
				</Button>
			</div>
		</div>
	)
}

export default TrustCTA
