import { StarSVG } from '@/src/assets/icons/ShopIcons'
import styles from './StarRating.module.scss'
import clsx from 'clsx'

type StarRatingType = {
	rating: number
	className?: string
}

const StarRating = ({ rating, className }: StarRatingType) => {
	return (
		<div className={styles.stars}>
			{Array.from({ length: 5 }).map((_, index) => (
				<StarSVG key={index} index={index} rating={rating} className={clsx(styles.starsSVG, className)} />
			))}
		</div>
	)
}

export default StarRating
