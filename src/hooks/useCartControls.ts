import { useRef, useState } from 'react'


const useCartControls = () => {
	const [quantity, setQuantity] = useState<number>(1)
	
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
	

	const product = {
		stock: 66,
	}
	const maxQuantity = Math.min(product.stock, 100)
	const changeQuantity = (type: '+' | '-') => {
		setQuantity(prev => {
			if (type === '+') return Math.min(prev + 1, maxQuantity)
			return Math.max(prev - 1, 1)
		})
	}
	const startChanging = (type: '+' | '-') => {
		if (intervalRef.current) clearInterval(intervalRef.current)

		changeQuantity(type)

		intervalRef.current = setInterval(() => {
			changeQuantity(type)
		}, 100)
	}

	const stopChanging = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current)
			intervalRef.current = null
		}
	}

	

	
	return {
		quantity,
		maxQuantity,
		intervalRef,
		setQuantity,
		changeQuantity,
		startChanging,
		stopChanging,
	}
}

export default useCartControls
