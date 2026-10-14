export type ProductType = {
	id: number
	slug: string
	name: string
	description: string
	brand: string
	image: string
	price: number
	category: string
	currency: string
	inStock: boolean
	rating: number
}

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

const getProduct = async (slug: string): Promise<ProductType | null> => {
	// const apiUrl = process.env.NEXT_PUBLIC_API_URL
	// if (!apiUrl) {
	// 	throw new Error('NEXT_PUBLIC_API_URL is not defined')
	// }
	// const url = `${apiUrl}/product/${encodeURIComponent(slug)}`

	// const res = await fetch(url, {
	// 	next: {
	// 		revalidate: 60,
	// 	},
	// })

	// if (!res.ok) {
	// 	console.error(`Failed to fetch product: ${res.status} ${res.statusText}`)

	// 	return null
	// }
	// const product = await res.json()

	const product = products.find(p  => p.slug === slug)

	return product ?? null
}

export { getProduct }
