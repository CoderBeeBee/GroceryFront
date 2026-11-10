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
	const productExists = products.some(pro => pro.productId === productId)

	if (productExists) {
		useAddToCartStore.setState({
			products: products.map(pro =>
				pro.productId === productId ? { ...pro, quantity: pro.quantity + quantity } : pro,
			),
		})

		return
	}

	if (products.length >= 100) {
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
	useAddToCartStore.setState({
		products: [...products, { productId, quantity }],
	})
}

export const removeFromCart = ( productId: string ) => {
	const { products } = useAddToCartStore.getState()

	useAddToCartStore.setState({
		products: products.filter(f => f.productId !== productId),
	})
}
