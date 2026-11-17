import Image from 'next/image'
import styles from './ReviewsCard.module.scss'
import { RefObject } from 'react'
import { carouselCardType } from '@/src/features/main/types/carouselCards.type'
import StarRating from '../StarRating/StarRating'
import { CheckSVG } from '@/src/assets/icons/DashboardIcons'

type ReviewsCardType = {
	data: carouselCardType
	index: number
	slideRef: RefObject<HTMLDivElement | null>
}

const ReviewsCard = ({ data, index, slideRef }: ReviewsCardType) => {
	return (
		<div ref={index === 0 ? slideRef : null} className={styles.reviewsCardWrapper}>
			<Image
				src={`/images/logo/coderBee.jpg`}
				alt="User Image"
				width={200}
				height={200}
				className={styles.customerImage}
			/>

			<div className={styles.customerFeedbackData}>
				<h3 className={styles.customerName}>
					CoderBee
					<div className={styles.customerCheckBox}>
						<CheckSVG className={styles.checkSVG}/>
					</div>
				</h3>
				<StarRating rating={5} className={styles.starsSVG} />
				<p className={styles.customerFeedback}>{`"Super fresh and fast delivery!.Super fresh and fast delivery!.Super fresh and fast delivery!.Super fresh and fast delivery!"`}</p>
				<span className={styles.customerVerified}>Verified Buyer</span>
			</div>
		</div>
	)
}

export default ReviewsCard
