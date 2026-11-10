import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type productLikeStoreType = {
	productIds: string[]
}

const initialState: productLikeStoreType = {
	productIds: [],
}


export const useProductLikeStore = create<productLikeStoreType>()(
	persist(() => initialState, {
		name: 'productIds',
		storage: createJSONStorage(() => localStorage),
	}),
)

export const toggleFavorites = (productId: string) => {
	const { productIds } = useProductLikeStore.getState()

	if (productIds.includes(productId)) {
		useProductLikeStore.setState({ productIds: productIds.filter(id => id !== productId) })
	} else {
		useProductLikeStore.setState({ productIds: [...productIds, productId] })
	}
}
