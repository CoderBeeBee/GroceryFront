import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type AuthTypes = {
	isLogged: boolean
	firstName: string
	lastName: string
	id: string
	role: string
	image: string
}

type RequestTypes = Omit<AuthTypes, 'isLogged'>


const initialState: AuthTypes = {
	isLogged: false,
	firstName: '',
	lastName: '',
	id: '',
	role: '',
	image: '',
}

export const useAuthStore = create<AuthTypes>()(
	persist(() => initialState, {
		name: 'user',
		storage: createJSONStorage(() => localStorage),
		// skipHydration: true,
		partialize: state => ({
			isLogged: state.isLogged,
			firstName: state.firstName,
			lastName: state.lastName,
			id: state.id,
			role: state.role,
			image: state.image,
		}),
	}),
)

export const setSignIn = async (data: RequestTypes) => {
	const firstName = data.firstName
	const lastName = data.lastName
	const role = data.role
	const image = data.image
	const id = data.id

	useAuthStore.setState({
		isLogged: true,
		firstName,
		lastName,
		id,
		role,
		image,
	})
}

export const setSignOut = async () => {
	useAuthStore.setState(initialState)
}
