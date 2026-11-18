export type reviewsType = {
	_id: string
	author: { firstName: string; lastName: string; image: string }
	review: string
	rating: number
	createdAt: Date
}
