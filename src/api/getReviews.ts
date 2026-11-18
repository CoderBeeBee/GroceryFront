const getReviews = async () => {
	try {
		const res = await fetch('http://localhost:8000/api/v1/reviews/get-reviews', {
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
