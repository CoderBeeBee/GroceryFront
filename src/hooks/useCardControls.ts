import { useCallback, useEffect, useRef, useState } from 'react'
import { useAddToCartStore } from '../store/useAddToCartStore'

const useCardControls = (productId: string, inStock: number) => {
	const { products } = useAddToCartStore()
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

	// 1. Stan magazynowy wyliczany bezpośrednio podczas renderowania
	const productInCart = products.find(pro => pro.productId === productId)
	const productQuantityInCard = productInCart ? productInCart?.quantity : 0
	const leftInStock = Math.max(0, inStock - (productInCart?.quantity ?? 0))
	const isOutOfStock = leftInStock === 0

	// 2. Surowy stan wyboru użytkownika (domyślnie 1)
	const [rawQuantity, setRawQuantity] = useState<number>(1)

	// 3. Bezpieczna wartość wyliczana w trakcie renderu (zero useEffect!)
	const quantity = isOutOfStock ? 0 : Math.min(Math.max(1, rawQuantity), leftInStock)

	const stopChanging = useCallback(() => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current)
			intervalRef.current = null
		}
	}, [])

	// Jedyny useEffect służy tylko do sprzątania zewnętrznego timera przy odmontowaniu
	useEffect(() => {
		return () => stopChanging()
	}, [stopChanging])

	const setQuantity = (value: number) => {
		if (isOutOfStock) return
		setRawQuantity(Math.min(Math.max(1, value), leftInStock))
	}

	const changeQuantity = (type: '+' | '-') => {
		if (isOutOfStock) return

		setRawQuantity(prev => {
			const current = Math.min(Math.max(1, prev), leftInStock)
			if (type === '+') return Math.min(current + 1, leftInStock)
			return Math.max(current - 1, 1)
		})
	}

	const startChanging = (type: '+' | '-') => {
		if (isOutOfStock) return
		stopChanging()

		changeQuantity(type)
		intervalRef.current = setInterval(() => {
			changeQuantity(type)
		}, 100)
	}

	const clearQuantity = () => {
		setRawQuantity(1)
	}

	return {
		quantity,
		leftInStock,
		isOutOfStock: leftInStock === 0,
		productQuantityInCard,
		setQuantity,
		changeQuantity,
		startChanging,
		stopChanging,
		clearQuantity,
	}
}

export default useCardControls
