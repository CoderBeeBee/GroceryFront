import { useTranslations } from 'next-intl'
import ReviewsCarousel from './ReviewsCarousel/ReviewsCarousel'
import styles from './Reviews.module.scss'
import clsx from 'clsx'
import { reviewsType } from '../../../types/reviews.type'
import { Suspense } from 'react'
import ReviewsSkeleton from './ReviewsSkeleton/ReviewsSkeleton'

const Reviews = ({ initialReviews }: { initialReviews: reviewsType[] }) => {
	const t = useTranslations('Reviews')
	return (
		<div className={clsx('row', styles.reviewsWrapper)}>
			<h3 className={styles.reviewsName}>{t('Title')}</h3>

			<Suspense fallback={<ReviewsSkeleton />}>
				<ReviewsCarousel initialReviews={initialReviews} />
			</Suspense>
		</div>
	)
}

export default Reviews
