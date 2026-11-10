export type ProductType = {
	id: string
	name: string
	image: string
	ratings: number
	price: number
	currency: string
	categories: string
	discount: number | null
	slug: string
	productQuantity: number
	productType: string[]
	salesUnit: string
	totalProductReviews: number
}
