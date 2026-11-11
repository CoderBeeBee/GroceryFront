import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type ProductType = {
	productId: string
	quantity: number
}

type ProductsStoreType = {
	products: ProductType[]
	isEqual: boolean
}

const initialState: ProductsStoreType = {
	products: [],
	isEqual: false,
}

export const useAddToCartStore = create<ProductsStoreType>()(
	persist(() => initialState, {
		name: 'products',
		storage: createJSONStorage(() => localStorage),
	}),
)
let timeoutRef: ReturnType<typeof setTimeout> | null = null

export const addToCart = ({ productId, quantity }: ProductType) => {
	const { products } = useAddToCartStore.getState()
	const productExists = products.find(pro => pro.productId === productId)

	const maxQuantityReached = products.length >= 100

	if (maxQuantityReached) {
		setIsEqual()
		return
	}

	if (productExists) {
		useAddToCartStore.setState({
			products: products.map(pro =>
				pro.productId === productId ? { ...pro, quantity: pro.quantity + quantity } : pro,
			),
		})

		return
	}

	useAddToCartStore.setState({
		products: [...products, { productId, quantity }],
	})
}

const setIsEqual = () => {
	useAddToCartStore.setState({ isEqual: true })

	if (timeoutRef !== null) {
		clearTimeout(timeoutRef)
	}

	timeoutRef = setTimeout(() => {
		useAddToCartStore.setState({ isEqual: false })
		timeoutRef = null
	}, 5000)

	return
}

export const removeFromCart = (productId: string) => {
	const { products } = useAddToCartStore.getState()

	useAddToCartStore.setState({
		products: products.filter(f => f.productId !== productId),
	})
}

export const changeQuantity = (productId: string, type?: '+' | '-', value?: number) => {
	const { products } = useAddToCartStore.getState()

	

	useAddToCartStore.setState({
		products: products.map(product => {
			if (product.productId !== productId) return product

			let nextQuantity = product.quantity

			if (typeof value === 'number' && !Number.isNaN(value)) {
				nextQuantity = value
			} else if (type === '+') {
				nextQuantity = product.quantity + 1
			} else if (type === '-') {
				nextQuantity = product.quantity - 1
			}

			// Zabezpieczenie przed zejściem poniżej 1 oraz przekroczeniem stanu magazynowego

			const clampedQuantity = Math.max(1, Math.floor(nextQuantity))

			return {
				...product,
				quantity: clampedQuantity,
			}
		}),
	})
}
