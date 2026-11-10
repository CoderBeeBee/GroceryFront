import { StarSVG } from '@/src/assets/icons/ShopIcons'
import styles from './StarRating.module.scss'

const StarRating = ({ rating }: { rating: number }) => {
	return (
		<div className={styles.stars}>
			{Array.from({ length: 5 }).map((_, index) => (
				<StarSVG key={index} index={index} rating={rating} className={styles.starsSVG}/>
			))}
		</div>
	)
}

export default StarRating
