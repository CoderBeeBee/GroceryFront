import { configureStore } from '@reduxjs/toolkit'
import { productApi } from '../api/productApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import { useDispatch } from 'react-redux'

export const store = configureStore({
	reducer: {
		[productApi.reducerPath]: productApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware),
})

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
