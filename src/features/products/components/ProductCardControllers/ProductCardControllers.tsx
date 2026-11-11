'use client'
import clsx from 'clsx'
import styles from './ProductCardControllers.module.scss'
import Button from '@/src/components/ui/Button/Button'
import { useTranslations } from 'next-intl'
import useCardControls from '@/src/hooks/useCardControls'
import { addToCart } from '@/src/store/useAddToCartStore'

type ProductCardControlsType = {
	productId: string
	inStock: number
}

const ProductCardControllers = ({ productId, inStock }: ProductCardControlsType) => {
	const t = useTranslations('ProductCardControls')
	const {
		quantity,
		leftInStock,
		isOutOfStock,
		setQuantity,
		changeQuantity,
		startChanging,
		stopChanging,
		clearQuantity,
	} = useCardControls(productId, inStock)

	const disabledAddButton = isOutOfStock || quantity >= leftInStock
	const disabledSubtractButton = isOutOfStock || quantity <= 1

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const rawValue = e.target.value
		if (rawValue === '') {
			setQuantity(1)
			return
		}
		const parsed = Number(rawValue)
		if (!Number.isNaN(parsed)) {
			setQuantity(Math.min(leftInStock, Math.max(1, parsed)))
		}
	}

	const handleKeyDown = (e: React.KeyboardEvent, type: '+' | '-') => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			changeQuantity(type)
		}
	}

	const handleAddToCart = () => {
		if (isOutOfStock || quantity <= 0) return
		addToCart({ productId, quantity })
		clearQuantity()
	}

	return (
		<div className={clsx(styles.productCardControlsWrapper)}>
			<div className={clsx(styles.productCardControls)}>
				<button
					type="button"
					disabled={disabledSubtractButton}
					aria-label={t('Reduce')}
					onPointerDown={() => startChanging('-')}
					onPointerUp={stopChanging}
					onPointerLeave={stopChanging}
					onPointerCancel={stopChanging}
					onKeyDown={e => handleKeyDown(e, '-')}
					className={clsx(styles.subtractButton, { [styles.outOfStock]: disabledSubtractButton })}>
					-
				</button>
				<input
					type="number"
					disabled={isOutOfStock}
					aria-label={t('Enter')}
					min={isOutOfStock ? 0 : 1}
					max={leftInStock}
					value={quantity}
					onChange={handleInputChange}
					className={clsx(styles.productCardInput)}
				/>
				<button
					type="button"
					disabled={disabledAddButton}
					aria-label={t('Increase')}
					onPointerDown={() => startChanging('+')}
					onPointerUp={stopChanging}
					onPointerLeave={stopChanging}
					onPointerCancel={stopChanging}
					onKeyDown={e => handleKeyDown(e, '+')}
					className={clsx(styles.addButton, { [styles.outOfStock]: disabledAddButton })}>
					+
				</button>
			</div>
			<Button
				disabled={isOutOfStock}
				ariaLabel={t('Add')}
				size="xs"
				icon={null}
				onClick={handleAddToCart}
				className={clsx(styles.addToCartButton, { [styles.disabledAddToCartButton]: isOutOfStock })}>
				{isOutOfStock ? t('Out') : t('Add')}
			</Button>
		</div>
	)
}

export default ProductCardControllers
