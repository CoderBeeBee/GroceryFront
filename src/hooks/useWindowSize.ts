import { useEffect, useState } from 'react'
interface WindowSize {
	width: number
	height: number
}
const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: 0,
		height: 0,
	})

	useEffect(() => {
		let timeOutId: ReturnType<typeof setTimeout> | null = null

		const updateSize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}

		const checkSize = () => {
			if (timeOutId) clearTimeout(timeOutId)

			timeOutId = setTimeout(updateSize, 200)
		}
		updateSize()
		window.addEventListener('resize', checkSize)

		return () => {
			if (timeOutId) clearTimeout(timeOutId)
			window.removeEventListener('resize', checkSize)
		}
	}, [])

	const widthGreater900 = windowSize.width > 900

	const widthLess1300 = windowSize.width < 1300
	const widthLess1100 = windowSize.width < 1100
	const widthLess900 = windowSize.width < 900
	const widthLess800 = windowSize.width < 800
	const widthLess700 = windowSize.width < 700
	const widthLess600 = windowSize.width < 600

	const isMobile = windowSize.width <= 1200
	const isMobilePanel = windowSize.width < 600
	return {
		width: windowSize.width,
		height: windowSize.height,
		widthGreater900,
		widthLess1300,
		widthLess1100,
		widthLess900,
		widthLess800,
		widthLess700,
		isMobile,
		isMobilePanel,
		widthLess600
	}
}

export default useWindowSize
