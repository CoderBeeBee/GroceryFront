import clsx from 'clsx'
import styles from './BestSellers.module.scss'
import Button from '@/src/components/ui/Button/Button'
import ProductCard from '@/src/features/products/components/ProductCard/ProductCard'
import { useTranslations } from 'next-intl'
import { topPicksData } from '../../data/topPicksData'

const BestSellers = () => {
	const t = useTranslations('Best')
	return (
		<section className={clsx('row', styles.bestellersSection)}>
			<div className={clsx(styles.bestSellersWrapper)}>
				<div className={clsx(styles.bestSellersHeader)}>
					<div className={clsx(styles.bestSellersText)}>
						<h3 className={clsx(styles.bestSellersH3)}>{t('Bestsellers')}</h3>
						<span className={clsx(styles.bestSellersLabel)}>{t('Label')}</span>
					</div>
					<Button
						href={`/shop/[category]`}
						params={'top-picks'}
						size="sm"
						ariaLabel="Top Picks"
						className={clsx(styles.bestSellersButton)}>
						{t('View')}
					</Button>
				</div>
				<div className={clsx(styles.bestSellersList)}>
					{topPicksData &&
						topPicksData.map((item, index) => {
							return <ProductCard key={index} data={item} index={index} />
						})}

					<div className={styles.dealOfTheDay}>deal</div>
				</div>
			</div>
		</section>
	)
}

export default BestSellers
