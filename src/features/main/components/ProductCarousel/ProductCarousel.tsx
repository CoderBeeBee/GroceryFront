'use client'
import clsx from 'clsx'
import styles from './ProductCarousel.module.scss'
import { carouselCardsData } from '../../data/carouselCardsData'

import CategoryCard from '@/src/components/ui/CategoryCard/CategoryCard'
import useCarouselSlide from '@/src/hooks/useCarouselSlide'
import CarouselButton from '@/src/components/ui/CarouselButton/CarouselButton'

const ProductCarousel = () => {
	const {
		trackRef,
		translateX,
		isTransitioning,
		extendedCards,
		slideRef,
		prevSlide,
		nextSlide,
		handleSwipeEnd,
		handleSwipeStart,
	} = useCarouselSlide({
		data: carouselCardsData,
	})

	return (
		<div className={styles.carouseleCardWrapper}>
			<div
				className={clsx(styles.cardsSlider)}
				onMouseDown={e => handleSwipeStart(e)}
				onMouseUp={e => handleSwipeEnd(e)}
				onTouchStart={e => handleSwipeStart(e)}
				onTouchEnd={e => handleSwipeEnd(e)}
				
				>
				<div
					ref={trackRef}
					className={styles.cardTrack}
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
			<CarouselButton type="prev" prevSlide={prevSlide} className={styles.productButtonPrev} />
			<CarouselButton type="next" nextSlide={nextSlide} className={styles.productButtonNext} />
		</div>
	)
}

export default ProductCarousel
