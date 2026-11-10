import { ProductType } from '@/src/features/products/types/productCard.type'
import { Link, NavigationHref } from '@/src/lib/i18n/navigation'
import clsx from 'clsx'
import Image from 'next/image'
import styles from './ProductCard.module.scss'
import ProductCardControls from '@/src/features/products/components/ProductCardControls/ProductCardControls'
import useFormatPrice from '@/src/hooks/useFormatPrice'
import StarRating from '@/src/components/ui/StarRating/StarRating'

import CardBadges from '@/src/components/ui/CardBadges/CardBadges'
import { useTranslations } from 'next-intl'

import ProductCardLike from '@/src/features/products/components/ProductCardLike/ProductCardLike'

type ProductCardType = {
	data: ProductType
}

const ProductCard = ({ data }: ProductCardType) => {
	const t = useTranslations('ProductCart')
	const { formatProductPrice } = useFormatPrice()
	const { formattedDiscountPrice, formattedProductPrice } = formatProductPrice(data.discount, data.price)

	const linkHref = `/shop/${data.categories}/${data.slug}`
	const sale = data.discount && data.discount >= 25 ? 'saleRed' : 'saleOrange'

	return (
		<div className={clsx(styles.productCardWrapper)}>
			<Link href={linkHref as NavigationHref} className={clsx(styles.productCardLink)}>
				<Image src={data.image} alt={data.name} width={800} height={800} className={styles.productCardImage} />
				<ProductCardLike productId={data.id} />

				{data.productType.map((item, i) => {
					const index = data.productType.indexOf(item) === 0

					const position = data.productType.length >= 2 && !index ? 'bottom' : 'top'
					const variant = data.discount && index ? sale : item.toLowerCase() === 'organic' ? 'organic' : 'fresh'

					return (
						<CardBadges key={item + i} variant={variant} position={position}>
							{data.discount && index ? t('Sale') : t(item)}
						</CardBadges>
					)
				})}
			</Link>
			<div className={clsx(styles.productCardInfo)}>
				<h3 className={clsx(styles.productCardName)}>{data.name}</h3>
				<span className={clsx(styles.productCardQuantity)}>
					{data.productQuantity}
					{data.salesUnit}
				</span>

				<div className={clsx(styles.productCardRatings)}>
					<StarRating rating={data.ratings} />
					<div className={styles.productCardRatingsText}>
						<span className={clsx(styles.productCardRating)}>{data.ratings}</span>
						<span className={clsx(styles.productCardTotalProductReviews)}>({data.totalProductReviews})</span>
					</div>
				</div>
				<div className={clsx(styles.productCardPriceBox)}>
					{data.discount && <span className={styles.productCardFormattedPrice}>{formattedDiscountPrice}</span>}
					<span className={clsx(styles.producCardPrice, { [styles.formattedPrice]: data.discount })}>
						{formattedProductPrice}
					</span>
					{data.discount && <span className={styles.productCardDiscountValue}>{data.discount}% OFF</span>}
				</div>
			</div>

			<ProductCardControls productId={data.id} />
		</div>
	)
}

export default ProductCard
