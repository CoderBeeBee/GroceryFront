const getReviews = async () => {
	const BASE_URL = process.env.NEXT_PUBLIC_API_URL
	const REVIEWS_URL = process.env.NEXT_PUBLIC_REVIEWS_URL

	try {
		const res = await fetch(`${BASE_URL}${REVIEWS_URL}/get-reviews`, {
			next: { revalidate: 3600 },
		})
		if (!res.ok) return []

		const data = await res.json()
		return data
	} catch (error) {
		console.error('Error fetching reviews:', error)
	}
}
export default getReviews
