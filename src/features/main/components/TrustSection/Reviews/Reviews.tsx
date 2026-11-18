import { useTranslations } from 'next-intl'
import ReviewsCarousel from '../ReviewsCarousel/ReviewsCarousel'
import styles from './Reviews.module.scss'
import clsx from 'clsx'
import { reviewsType } from '../../../types/reviews.type'

const Reviews = ({ initialReviews }: { initialReviews: reviewsType[] }) => {
	const t = useTranslations('Reviews')
	return (
		
		<div className={clsx('row', styles.reviewsWrapper)}>
			<h3 className={styles.reviewsName}>{t('Title')}</h3>
			<ReviewsCarousel initialReviews={initialReviews} />
		</div>
		
	)
}

export default Reviews
