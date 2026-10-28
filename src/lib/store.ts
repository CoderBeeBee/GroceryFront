import { setupListeners } from '@reduxjs/toolkit/query'
import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { productApi } from '../api/productApi'
import { userApi } from '../api/userApi'


export const store = configureStore({
	reducer: {
		[productApi.reducerPath]: productApi.reducer,
		[userApi.reducerPath]:userApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware).concat(userApi.middleware),
})

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
