import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { reviewsType } from '../features/main/components/TrustSection/ReviewsCarousel/ReviewsCarousel'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL
const REVIEWS_URL = process.env.NEXT_PUBLIC_REVIEWS_URL

export const reviewsApi = createApi({
	reducerPath: 'review',
	baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
	endpoints: builder => ({
		getReviews: builder.query<reviewsType[], void>({
			query: () => `${REVIEWS_URL}/get-reviews`,
		}),
	}),
})

export const { useGetReviewsQuery } = reviewsApi
