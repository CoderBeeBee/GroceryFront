import clsx from 'clsx'
import { heroTopData } from '../../data/heroTopData'
import styles from './HeroTop.module.scss'
import { type JSX } from 'react'
import { EntityType } from '../../types/heroTopTypes'
import { DeliverySVG, Farm2SVG, Oragnic1SVG } from '@/src/assets/icons/CardsIcons'
import Button from '@/src/components/ui/Button/Button'
import { useTranslations } from 'next-intl'

const HeroTop = () => {
	const t = useTranslations('Hero')
	return (
		<div className={clsx(styles.heroTopWrapper)}>
			<div className={clsx(styles.heroTopContent)}>
				<h1 className={clsx(styles.heroH1)}>{t('heroH1')}</h1>
				<h2 className={clsx(styles.heroH2)}>{t('heroH2')}</h2>
				<p className={clsx(styles.heroP)}>
					{t('heroP')}
				</p>

				<div className={clsx(styles.heroTopLinks)}>
				<Button variant='green' href={`/shop`} ariaLabel={t('ariaShop')}>
					{t('shopNow')}
				</Button>
				<Button variant='yellow' href={`/shop/all-products`} ariaLabel={t('ariaExplore')}>
					{t('exploreProd')}
				</Button>
				</div>

			</div>

			<div className={clsx(styles.heroTopDelivery)}>
				{heroTopData.map((item, index) => {
					const iconsMap: Record<EntityType, JSX.Element> = {
						Organic: <Oragnic1SVG className={styles.icons} />,
						Fresh: <Farm2SVG className={styles.icons} />,
						Fast: <DeliverySVG className={styles.icons} />,
					}
					const icon = iconsMap[item.type]
					return (
						<div key={index} className={clsx(styles.deliveryBox)}>
							<div className={clsx(styles.deliveryBoxContent)}>
								{icon}
								<div className={clsx(styles.deliveryInfo)}>
									<p className={clsx(styles.deliveryTitle)}>{t(item.title)}</p>
									<span className={clsx(styles.deliverySubtitle)}>{t(item.subtitle)}</span>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default HeroTop
