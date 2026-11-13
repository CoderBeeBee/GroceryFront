'use client'
import clsx from 'clsx'
import styles from './CarouselCards.module.scss'
import { carouselCardsData } from '../../data/carouselCardsData'

import { ChevronNextSVG, ChevronPrevSVG } from '@/src/assets/icons/ArrowsIcons'
import { useEffect, useRef, useState } from 'react'

import CategoryCard from '@/src/components/ui/CategoryCard/CategoryCard'

const getVisibleCards = () => {
	if (window.innerWidth < 650) return 1
	if (window.innerWidth < 1000) return 2
	if (window.innerWidth < 1500) return 3
	return 4
}

const CarouselCards = () => {
	const [visible, setVisible] = useState(4)
	const [isTransitioning, setIsTransitioning] = useState<boolean>(true)
	const [currentIndex, setCurrentIndex] = useState(4)
	const [currentWidth, setCurrentWidth] = useState<number>(0)
	const slideRef = useRef<HTMLAnchorElement | null>(null)
	const trackRef = useRef<HTMLDivElement | null>(null)
	const total = carouselCardsData.length
	const extendedCards = [
		...carouselCardsData.slice(-visible),
		...carouselCardsData,
		...carouselCardsData.slice(0, visible),
	]

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

	const nextSlide = () => {
		if (!isTransitioning) return
		setCurrentIndex(i => i + 1)
	}

	const prevSlide = () => {
		if (!isTransitioning) return
		setCurrentIndex(i => i - 1)
	}
	return (
		<div className={styles.carouseleCardWrapper}>
			<div className={clsx(styles.categoryCardsSlider)}>
				<div
					ref={trackRef}
					className={styles.categoryCardTrack}
					style={{
						transform: `translateX(-${translateX}px)`,
						transition: isTransitioning ? 'transform 0.5s' : 'none',
					}}>
					{extendedCards &&
						extendedCards.map((item, index) => {
							return (
								<CategoryCard key={index} data={item} index={index} slideRef={slideRef} translation="CarouselCard" />
							)
						})}
				</div>
			</div>
			<button
				type="button"
				aria-label="Prev Slide"
				className={clsx(styles.controlButton, styles.controlButtonPrev)}
				onClick={prevSlide}>
				<ChevronPrevSVG />
			</button>
			<button
				type="button"
				aria-label="Next Slide"
				className={clsx(styles.controlButton, styles.controlButtonNext)}
				onClick={nextSlide}>
				<ChevronNextSVG className={styles.rotateArrow} />
			</button>
		</div>
	)
}

export default CarouselCards
