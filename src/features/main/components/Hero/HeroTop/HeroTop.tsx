import clsx from 'clsx'
import styles from './HeroTop.module.scss'
import Button from '@/src/components/ui/Button/Button'
import { useTranslations } from 'next-intl'

const HeroTop = () => {
	const t = useTranslations('Hero')
	return (
		<div className={clsx(styles.heroTopWrapper)}>
			<div className={clsx(styles.heroTopContent)}>
				<h1 className={clsx(styles.heroH1)}>{t('heroH1')}</h1>
				<h2 className={clsx(styles.heroH2)}>{t('heroH2')}</h2>
				<p className={clsx(styles.heroP)}>{t('heroP')}</p>
			</div>

			<div className={clsx(styles.heroTopLinks)}>
				<Button 
				variant="primary" 
				
				href={`/shop`} 
				ariaLabel={t('ariaShop')}>
					{t('shopNow')}
				</Button>
				<Button
					variant="secondary"
					
					href={`/shop/[category]`}
					params="all-products"
					ariaLabel={t('ariaExplore')}>
					{t('exploreProd')}
				</Button>
			</div>
		</div>
	)
}

export default HeroTop
