import { useMemo } from 'react'
import { topPicksData } from '../features/main/data/topPicksData'
import { useAddToCartStore } from '../store/useAddToCartStore'
import useFormatPrice from './useFormatPrice'

const useProductCart = () => {
	const { products } = useAddToCartStore()
	const { formatTotalPrice } = useFormatPrice()
	const count = Math.min(products.length, 100)
	const productsMap = useMemo(() => new Map(topPicksData.map(item => [item.id, item])), [])

	const shoppingCart = useMemo(
		() =>
			products.flatMap(item => {
				const product = productsMap.get(item.productId)

				return product ? [{ ...product, quantity: item.quantity }] : []
			}),
		[products, productsMap],
	)

	const isShoppingCart = shoppingCart.length > 0

	const { totalPrice, totalDiscountPrice, totalSavings } = useMemo(() => {
		return shoppingCart.reduce(
			(acc, item) => {
				const price = Number(item.price) || 0
				const discount = Number(item.discount) || 0
				const quantity = Math.max(0, Number(item.quantity) || 0)

				// const discountPrice = Number(((price * (1 - discount / 100) * 100) / 100).toFixed(2))
				const discountPrice = Math.round(price * (1 - discount / 100) * 100) / 100

				return {
					totalPrice: acc.totalPrice + price * quantity,
					totalDiscountPrice: acc.totalDiscountPrice + discountPrice * quantity,
					totalSavings: acc.totalSavings + (price - discountPrice) * quantity,
				}
			},
			{
				totalPrice: 0,
				totalDiscountPrice: 0,
				totalSavings: 0,
			},
		)
	}, [shoppingCart])

	const { formattedTotalPrice } = formatTotalPrice(totalDiscountPrice)

	return {
		count,
		shoppingCart,
		isShoppingCart,
		totalPrice,
		totalDiscountPrice,
		totalSavings,
		formattedTotalPrice,
	}
}

export default useProductCart
