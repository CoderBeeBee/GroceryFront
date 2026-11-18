'use client'
import clsx from 'clsx'
import styles from './ReviewsCarousel.module.scss'
import useCarouselSlide from '@/src/hooks/useCarouselSlide'
import ReviewsCard from '@/src/components/ui/ReviewsCard/ReviewsCard'
import CarouselButton from '@/src/components/ui/CarouselButton/CarouselButton'
import { reviewsType } from '../../../types/reviews.type'



const ReviewsCarousel = ({ initialReviews }: { initialReviews: reviewsType[] }) => {
	

	const {
		trackRef,
		translateX,
		isTransitioning,
		extendedCards,
		slideRef,
		prevSlide,
		nextSlide,
		handleSwipeStart,
		handleSwipeEnd,
		
	} = useCarouselSlide<reviewsType, HTMLDivElement>({
		data: initialReviews,
	})

	
	return (
		<div className={styles.reviewsCarouselWrapper}>
			<div
				className={clsx(styles.cardsSlider)}
				onMouseDown={e => handleSwipeStart(e)}
				onMouseUp={e => handleSwipeEnd(e)}
				onTouchStart={e => handleSwipeStart(e)}
				onTouchEnd={e => handleSwipeEnd(e)}>
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
								<ReviewsCard
									key={`${item._id}-${index}`}
									data={item}
									index={index}
									slideRef={slideRef}
									
								/>
							)
						})}
				</div>
			</div>
			<CarouselButton type="prev" prevSlide={prevSlide} className={styles.reviewButtonPrev} />
			<CarouselButton type="next" nextSlide={nextSlide} className={styles.reviewButtonNext} />
		</div>
	)
}

export default ReviewsCarousel
