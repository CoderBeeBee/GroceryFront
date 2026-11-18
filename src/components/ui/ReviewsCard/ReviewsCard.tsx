import Image from 'next/image'
import styles from './ReviewsCard.module.scss'

import StarRating from '../StarRating/StarRating'
import { CheckSVG } from '@/src/assets/icons/DashboardIcons'
import { reviewsType } from '@/src/features/main/types/reviews.type'

type ReviewsCardType = {
	data: reviewsType
	index: number
	slideRef: ((node: HTMLDivElement | null) => void) | null
}

const ReviewsCard = ({ data, index, slideRef }: ReviewsCardType) => {
	return (
		<div ref={index === 0 ? slideRef : null} className={styles.reviewsCardWrapper}>
			<Image src={data.author.image} loading='lazy' alt="User Image" width={70} height={70} className={styles.customerImage} />

			<div className={styles.customerFeedbackData}>
				<h3 className={styles.customerName}>
					{data.author.firstName} {data.author.lastName}
					<span className={styles.customerCheckBox}>
						<CheckSVG className={styles.checkSVG} />
					</span>
				</h3>
				<StarRating rating={data.rating} className={styles.starsSVG} />
				<p className={styles.customerFeedback}>{data.review}</p>
				<span className={styles.customerVerified}>Verified Buyer</span>
			</div>
		</div>
	)
}

export default ReviewsCard
