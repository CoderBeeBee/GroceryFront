import clsx from 'clsx'
import styles from './CartControllers.module.scss'
import { useTranslations } from 'next-intl'
import { changeQuantity, useAddToCartStore } from '@/src/store/useAddToCartStore'
import { ChangeEvent } from 'react'

type CartControllersType = {
	productId: string

	inStock: number
}

const CartControllers = ({ productId, inStock }: CartControllersType) => {
	const t = useTranslations('NavCart')

	// Pobieramy ilość bezpośrednio ze sklepu Zustand
	const productQuantityInCard = useAddToCartStore(
		state => state.products.find(pro => pro.productId === productId)?.quantity ?? 1,
	)

	const isOutOfStock = productQuantityInCard >= inStock

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const rawValue = e.target.value

		// Pozwalamy wyczyścić pole (ustawiając minimum 1)
		if (rawValue === '') {
			changeQuantity(productId, undefined, 1)
			return
		}

		const parsed = Number(rawValue)
		if (Number.isNaN(parsed)) return

		// Ograniczamy wartość do przedziału [1, inStock]
		const clampedQuantity = Math.min(Math.max(1, parsed), inStock)
		changeQuantity(productId, undefined, clampedQuantity)
	}

	return (
		<div className={clsx(styles.cartControllersWrapper)}>
			<button
				type="button"
				disabled={productQuantityInCard <= 1}
				aria-label={t('Reduce')}
				className={clsx(styles.subtractButton, { [styles.outOfStock]: productQuantityInCard <= 1 })}
				onClick={() => {
					if (productQuantityInCard <= 1) return

					changeQuantity(productId, '-')
				}}>
				-
			</button>
			<input
				name="cartInput"
				type="text"
				max={100}
				min={1}
				value={productQuantityInCard}
				onChange={e => handleInputChange(e)}
				className={clsx(styles.cartInput)}
			/>
			<button
				type="button"
				disabled={isOutOfStock}
				aria-label={t('Increase')}
				onClick={() => {
					if (isOutOfStock) return
					changeQuantity(productId, '+')
				}}
				className={clsx(styles.addButton, { [styles.outOfStock]: isOutOfStock })}>
				+
			</button>
		</div>
	)
}

export default CartControllers
