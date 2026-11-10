'use client'
import clsx from 'clsx'
import styles from './ProductCardControls.module.scss'
import Button from '@/src/components/ui/Button/Button'
import { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import useCartControls from '@/src/hooks/useCartControls'
import { addToCart } from '@/src/store/useAddToCartStore'

type ProductCardControlsType = {
	productId: string
}

const ProductCardControls = ({ productId }: ProductCardControlsType) => {
	const t = useTranslations('ProductCartControls')
	const { quantity, maxQuantity, intervalRef, setQuantity, startChanging, stopChanging } = useCartControls()

	useEffect(() => {
		const interval = intervalRef.current
		return () => {
			if (interval) clearInterval(interval)
		}
	}, [intervalRef])

	return (
		<div className={clsx(styles.productCardControlsWrapper)}>
			<div className={clsx(styles.productCardControls)}>
				<button
					type="button"
					aria-label="Subtract"
					onMouseDown={() => startChanging('-')}
					onMouseUp={stopChanging}
					onMouseLeave={stopChanging}
					onTouchStart={() => startChanging('-')}
					onTouchEnd={stopChanging}
					className={styles.subtractButton}>
					-
				</button>
				<input
					type="number"
					aria-label="Product Amount"
					max={100}
					value={quantity}
					onChange={e => {
						const value = Number(e.target.value)
						setQuantity(Math.min(maxQuantity, Math.max(1, value)))
					}}
					className={clsx(styles.productCardInput)}
				/>
				<button
					type="button"
					aria-label="Add"
					onMouseDown={() => startChanging('+')}
					onMouseUp={stopChanging}
					onMouseLeave={stopChanging}
					onTouchStart={() => startChanging('+')}
					onTouchEnd={stopChanging}
					className={styles.addButton}>
					+
				</button>
			</div>
			<Button
				ariaLabel="Add to Cart"
				size="xs"
				onClick={() => addToCart({ productId, quantity })}
				className={clsx(styles.addToCartButton)}>
				{t('Add')}
			</Button>
		</div>
	)
}

export default ProductCardControls
