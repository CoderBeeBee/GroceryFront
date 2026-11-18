import { MouseEvent, TouchEvent, useCallback, useEffect, useRef, useState } from 'react'

interface CarouselSlideProps<T> {
	data: T[]
}

const useCarouselSlide = <T, R extends HTMLElement = HTMLAnchorElement>({ data }: CarouselSlideProps<T>) => {
	const [visible, setVisible] = useState(4)
	const [isTransitioning, setIsTransitioning] = useState<boolean>(true)
	const [currentIndex, setCurrentIndex] = useState(4)
	const [currentWidth, setCurrentWidth] = useState<number>(0)
	const [swipeStartX, setSwipeStartX] = useState<number>(0)

	const observerRef = useRef<ResizeObserver | null>(null)
	const trackRef = useRef<HTMLDivElement | null>(null)
	const total = data.length
	const extendedCards = [...data.slice(-visible), ...data, ...data.slice(0, visible)]


	useEffect(() => {
		const mq650 = window.matchMedia('(max-width: 649px)')
		const mq1000 = window.matchMedia('(max-width: 999px)')
		const mq1500 = window.matchMedia('(max-width: 1499px)')

		const handleBreakpointChange = () => {
			if (mq650.matches) setVisible(1)
			else if (mq1000.matches) setVisible(2)
			else if (mq1500.matches) setVisible(3)
			else setVisible(4)
		}

		// Wywołaj raz przy montowaniu na kliencie
		handleBreakpointChange()

		// Nasłuchuj TYLKO przekroczenia progów, a nie każdego piksela
		mq650.addEventListener('change', handleBreakpointChange)
		mq1000.addEventListener('change', handleBreakpointChange)
		mq1500.addEventListener('change', handleBreakpointChange)

		return () => {
			mq650.removeEventListener('change', handleBreakpointChange)
			mq1000.removeEventListener('change', handleBreakpointChange)
			mq1500.removeEventListener('change', handleBreakpointChange)
		}
	}, [])

	// Zamiast slideRef + useEffect + handleObserve:
	const slideRef = useCallback((node: R | null) => {
		// Zawsze sprzątaj poprzedni obserwator
		if (observerRef.current) {
			observerRef.current.disconnect()
			observerRef.current = null
		}

		if (!node) return

		const observer = new ResizeObserver(entries => {
			const width = entries[0]?.borderBoxSize[0]?.inlineSize ?? 0
			const track = trackRef.current
			if (!track) return

			const styles = getComputedStyle(track)
			const gap = parseFloat(styles.columnGap) || 0

			setCurrentWidth(width + gap)
		})

		observer.observe(node)
		observerRef.current = observer
	}, [])

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
		// handleObserve,
	}
}

export default useCarouselSlide
