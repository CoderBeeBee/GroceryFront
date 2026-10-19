import { KeyboardEvent } from 'react'
import { create } from 'zustand'

type MenutState = {
	activeIndex: number | null
	activeSubIndex: number | null
	timeOutIn: ReturnType<typeof setTimeout> | null
	timeOutInSub: ReturnType<typeof setTimeout> | null
	setActiveIndex: (index: number | null) => void
}

export const useMenuStore = create<MenutState>(set => ({
	activeIndex: null,
	activeSubIndex: null,
	timeOutIn: null,
	timeOutInSub: null,
	setActiveIndex: index => {
		set({ activeIndex: index })
	},
}))

export const expandMenu = (index: number | null) => {
	const { activeIndex, timeOutIn } = useMenuStore.getState()
	if (timeOutIn) {
		clearTimeout(timeOutIn)
		useMenuStore.setState({ timeOutIn: null })
	}

	if (activeIndex === index) return

	useMenuStore.setState({ activeIndex: index, activeSubIndex: null })
}

export const closeMenu = () => {
	const { activeIndex, timeOutIn, timeOutInSub } = useMenuStore.getState()
	if (activeIndex === null) return

	if (timeOutIn) {
		clearTimeout(timeOutIn)
	}

	if (timeOutInSub) {
		clearTimeout(timeOutInSub)
	}
	const newTimeOutIn = setTimeout(() => {
		useMenuStore.setState({
			activeIndex: null,
			timeOutIn: null,
		})
	}, 1000)

	const newTimeOutInSub = setTimeout(() => {
		useMenuStore.setState({
			activeSubIndex: null,
			timeOutInSub: null,
		})
	}, 500)

	useMenuStore.setState({
		timeOutIn: newTimeOutIn,
		timeOutInSub: newTimeOutInSub,
	})
}

export const expandSubMenu = (index: number | null) => {
	const { activeSubIndex, timeOutInSub } = useMenuStore.getState()

	if (timeOutInSub) {
		clearTimeout(timeOutInSub)

		useMenuStore.setState({
			timeOutInSub: null,
		})
	}

	if (activeSubIndex === index) return

	useMenuStore.setState({
		activeSubIndex: index,
	})
}

export const closeSubMenu = () => {
	const { activeSubIndex, timeOutInSub } = useMenuStore.getState()

	if (activeSubIndex === null) return

	if (timeOutInSub) {
		clearTimeout(timeOutInSub)
	}

	useMenuStore.setState({
		activeSubIndex: null,
		timeOutInSub: null,
	})
}
export const toggleDropDown = (index: number | null) => {
	const { activeIndex } = useMenuStore.getState()

	toggleSubDropDown(null)

	if (activeIndex === index) {
		useMenuStore.setState({ activeIndex: null })
		return
	}
	useMenuStore.setState({ activeIndex: index })
}
export const toggleSubDropDown = (index: number | null) => {
	const { activeSubIndex } = useMenuStore.getState()
	if (activeSubIndex === index) {
		useMenuStore.setState({ activeSubIndex: null })
		return
	}
	useMenuStore.setState({ activeSubIndex: index })
}

export const toggleNavActions = (index: number | null) => {
	const { activeIndex, timeOutIn } = useMenuStore.getState()

	if (timeOutIn) clearTimeout(timeOutIn)

	if (activeIndex === index) {
		useMenuStore.setState({ activeIndex: null })
	} else {
		useMenuStore.setState({ activeIndex: index })
	}
}

export const onKeyDown = (e: KeyboardEvent, index: number) => {
	if ('key' in e && e.key !== 'Enter') return

	toggleDropDown(index)
}
