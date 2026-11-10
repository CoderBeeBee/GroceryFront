'use client'
import clsx from 'clsx'
import styles from './ProductCardLike.module.scss'
import { HeartSVG } from '@/src/assets/icons/DashboardIcons'
import { MouseEvent } from 'react'
import { toggleFavorites, useProductLikeStore } from '@/src/store/useProductLikeStore'

type ProductCardLikeType = {
	productId: string
}

const ProductCardLike = ({ productId }: ProductCardLikeType) => {
	
	// temporary solution
    const {productIds} = useProductLikeStore()
	const likeHandler = (e: MouseEvent<HTMLButtonElement>, id: string) => {
		e.stopPropagation()
		toggleFavorites(id)
	}

	return (
		<button type="button" className={clsx(styles.productCardLikeButton)} onClick={e => likeHandler(e, productId)}>
			<HeartSVG className={clsx(styles.heartSVG, { [styles.favorites]: productIds.includes(productId) })} />
		</button>
	)
}

export default ProductCardLike
