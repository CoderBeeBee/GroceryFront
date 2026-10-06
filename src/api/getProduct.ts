export type ProductType = {
	id: string
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

const getProduct = async (slug: string): Promise<ProductType | null> => {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL
	if (!apiUrl) {
		throw new Error('NEXT_PUBLIC_API_URL is not defined')
	}
	const url = `${apiUrl}/product/${encodeURIComponent(slug)}`
	
	const res = await fetch(url, {
		next: {
			revalidate: 60,
		},
	})

	if (!res.ok) {
		console.error(`Failed to fetch product: ${res.status} ${res.statusText}`)

		return null
	}
	const product = await res.json()
	return product
}

export { getProduct }
