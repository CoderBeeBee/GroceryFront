import { create } from 'zustand'

export const useSearchStore = create(() => ({
	isOpen: false,
	isVisible: false,
	activeList: false,
	activeHeight: false,
}))

export const toggleSearch = () => {
	const { isOpen } = useSearchStore.getState()

	if (isOpen) {
		useSearchStore.setState({ isVisible: false })
		setTimeout(() => {
			useSearchStore.setState({ isOpen: false })
		}, 300)
	} else {
		useSearchStore.setState({ isOpen: true })
		setTimeout(() => {
			useSearchStore.setState({ isVisible: true })
		}, 300)
	}
}

export const toggleList = () => {
	useSearchStore.setState({ activeList: true })
	setTimeout(() => {
		useSearchStore.setState({ activeHeight: true })
	}, 50)
}

export const closeList = () => {
	useSearchStore.setState({ activeList: false })
	useSearchStore.setState({ activeHeight: false })
}
