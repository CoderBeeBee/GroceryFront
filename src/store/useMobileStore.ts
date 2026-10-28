import { create } from 'zustand'
import { useMenuStore } from './useMenuStore'

type MobileState = {
	isOpen: boolean | null
	isVisible: boolean | null
}

export const useMobileStore = create<MobileState>(() => ({
	isOpen: false,
	isVisible: false,
}))

export const toggleMenu = () => {
	const { isOpen } = useMobileStore.getState()

	if (isOpen) {
		useMenuStore.setState({ activeIndex: null, activeSubIndex: null })

		useMobileStore.setState({ isVisible: false })
		setTimeout(() => {
			useMobileStore.setState({ isOpen: false })
		}, 500)
		return
	}

	useMobileStore.setState({ isOpen: true })

	setTimeout(() => {
		useMobileStore.setState({ isVisible: true })
	}, 100)
}

export const closeMobileMenu = () => {
	const { isOpen } = useMobileStore.getState()
	if (!isOpen) return
	useMobileStore.setState({ isVisible: false })
	setTimeout(() => {
		useMobileStore.setState({ isOpen: false })
	}, 500)
}
