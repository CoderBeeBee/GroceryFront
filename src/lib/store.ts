import { setupListeners } from '@reduxjs/toolkit/query'
import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { userApi } from '../api/RTKQuery/userApi'
import { reviewsApi } from '../api/RTKQuery/reviewsApi'
import { productApi } from '../api/RTKQuery/productApi'
import { newsLetterApi } from '../api/RTKQuery/newsLetterApi'

export const store = configureStore({
	reducer: {
		[productApi.reducerPath]: productApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
		[reviewsApi.reducerPath]: reviewsApi.reducer,
		[newsLetterApi.reducerPath]: newsLetterApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			.concat(productApi.middleware)
			.concat(userApi.middleware)
			.concat(reviewsApi.middleware)
			.concat(newsLetterApi.middleware),
})

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
