import { MouseEvent, TouchEvent, useEffect, useRef, useState } from 'react'
const getVisibleCards = () => {
	if (window.innerWidth < 650) return 1
	if (window.innerWidth < 1000) return 2
	if (window.innerWidth < 1500) return 3
	return 4
}

interface CarouselSlideProps<T> {
	data: T[]
}

const useCarouselSlide = <T, R extends HTMLElement = HTMLAnchorElement>({ data }: CarouselSlideProps<T>) => {
	const [visible, setVisible] = useState(4)
	const [isTransitioning, setIsTransitioning] = useState<boolean>(true)
	const [currentIndex, setCurrentIndex] = useState(4)
	const [currentWidth, setCurrentWidth] = useState<number>(0)
	const [swipeStartX, setSwipeStartX] = useState<number>(0)
	const slideRef = useRef<R>(null)
	const trackRef = useRef<HTMLDivElement | null>(null)
	const total = data.length
	const extendedCards = [...data.slice(-visible), ...data, ...data.slice(0, visible)]

	useEffect(() => {
		const abort = new AbortController()
		const handleResize = () => {
			const newVisible = getVisibleCards()

			setVisible(newVisible)
			setCurrentIndex(newVisible)
		}
		handleResize()
		window.addEventListener('resize', handleResize, {
			signal: abort.signal,
		})
		return () => abort.abort()
	}, [])

	useEffect(() => {
		const element = slideRef.current

		if (!element) return

		const observer = new ResizeObserver(entries => {
			const width = entries[0]?.borderBoxSize[0].inlineSize ?? 0

			const track = trackRef.current as HTMLDivElement
			if (!track) return
			const styles = getComputedStyle(track)

			const gap = parseFloat(styles.columnGap) || 0

			setCurrentWidth(width + gap)
		})

		observer.observe(element)

		return () => observer.disconnect()
	}, [visible])

	useEffect(() => {
		if (!isTransitioning) return

		let timeout: ReturnType<typeof setTimeout> | undefined

		if (currentIndex >= total + visible) {
			timeout = setTimeout(() => {
				setIsTransitioning(false)
				setCurrentIndex(visible)
			}, 500)
		} else if (currentIndex < visible) {
			timeout = setTimeout(() => {
				setIsTransitioning(false)
				setCurrentIndex(total + visible - 1)
			}, 500)
		}

		return () => {
			if (timeout) clearTimeout(timeout)
		}
	}, [currentIndex, isTransitioning, total, visible])
	useEffect(() => {
		if (!isTransitioning) {
			requestAnimationFrame(() => {
				setIsTransitioning(true)
			})
		}
	}, [isTransitioning])

	const translateX = currentWidth * currentIndex

	const getClientX = (e: MouseEvent | TouchEvent): number => {
		if ('touches' in e && e.touches.length > 0) {
			return e.touches[0].clientX
		}
		if ('changedTouches' in e && e.changedTouches.length > 0) {
			return e.changedTouches[0].clientX
		}
		if ('clientX' in e) {
			return e.clientX
		}
		return 0
	}

	const handleSwipeStart = (e: MouseEvent | TouchEvent) => {
		setSwipeStartX(getClientX(e))
	}

	const handleSwipeEnd = (e: MouseEvent | TouchEvent) => {
		const swipeEndX = getClientX(e)

		const diff = +swipeEndX.toFixed(0) - +swipeStartX.toFixed(0)

		if (diff > 60) {
			prevSlide()
		} else if (diff < -60) {
			nextSlide()
		}

		setSwipeStartX(0)
	}

	const nextSlide = () => {
		if (!isTransitioning) return
		setCurrentIndex(i => i + 1)
	}

	const prevSlide = () => {
		if (!isTransitioning) return
		setCurrentIndex(i => i - 1)
	}

	return {
		slideRef,
		trackRef,
		isTransitioning,
		translateX,
		prevSlide,
		nextSlide,
		extendedCards,
		handleSwipeEnd,
		handleSwipeStart,
	}
}

export default useCarouselSlide
