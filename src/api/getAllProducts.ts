import { ProductType } from './getProduct'

const products: ProductType[] = [
	{
		id: 1,
		slug: '/wisnia',
		name: 'Wiśnia',
		description: 'wisienka',
		brand: 'wisienka',
		image: 'sdsd',
		price: 99.99,
		category: 'fruits',
		currency: 'PLN',
		inStock: true,
		rating: 10,
	},
	{
		id: 1,
		slug: '/banan',
		name: 'Banan',
		description: 'wisienka',
		brand: 'wisienka',
		image: 'sdsd',
		price: 99.99,
		category: 'fruits',
		currency: 'PLN',
		inStock: true,
		rating: 10,
	},
	{
		id: 1,
		slug: '/wisnia',
		name: 'Śliwka',
		description: 'wisienka',
		brand: 'wisienka',
		image: '/sdsd',
		price: 99.99,
		category: 'fruits',
		currency: 'PLN',
		inStock: true,
		rating: 10,
	},
]

export const getAllProducts = async (): Promise<ProductType[]> => {
	// const apiUrl = process.env.NEXT_PUBLIC_API_URL

	// if (!apiUrl) {
	// 	throw new Error('NEXT_PUBLIC_API_URL is not defined')
	// }

	// const res = await fetch(`${apiUrl}/products`, {
	// 	cache: 'force-cache',
	// })

	// if (!res.ok) {
	// 	throw new Error(`Failed to fetch products: ${res.status}`)
	// }

	// const products = await res.json()
	return products
}
