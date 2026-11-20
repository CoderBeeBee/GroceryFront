import styles from './ReviewsSkeleton.module.scss'

const ReviewsSkeleton = () => {
	const skeletonCards = Array.from({ length: 4 })

	return (
		<div className={styles.reviewsCarouselWrapper} aria-busy="true">
			<div className={styles.cardsSlider}>
				<div className={styles.cardTrack}>
					{skeletonCards.map((_, index) => (
						<div key={index} className={styles.reviewsCardWrapper} aria-hidden="true">
							
							<div className={` ${styles.skeleton} ${styles.skeletonAvatar}`} />

							<div className={styles.customerFeedbackData}>
								
								<div className={styles.skeletonNameRow}>
									<div className={`${styles.skeleton} ${styles.skeletonName}`} />
									<div className={`${styles.skeleton} ${styles.skeletonBadge}`} />
								</div>

							
								<div className={`${styles.skeleton} ${styles.skeletonStars}`} />

								
								<div className={styles.skeletonTextGroup}>
									<div className={`${styles.skeleton} ${styles.skeletonText}`} />
									<div className={`${styles.skeleton} ${styles.skeletonText}`} />
									<div className={`${styles.skeleton} ${styles.skeletonTextShort}`} />
								</div>

								
								<div className={`${styles.skeleton} ${styles.skeletonVerified}`} />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ReviewsSkeleton
