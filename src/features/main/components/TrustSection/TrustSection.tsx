import getReviews from '@/src/api/getReviews'
import Reviews from './Reviews/Reviews'
import TrustCTA from './TrustCTA/TrustCTA'
import TrustMetrics from './TrustMetrics/TrustMetrics'
import styles from './TrustSection.module.scss'
import TrustTop from './TrustTop/TrustTop'

const TrustSection = async () => {
	const initialReviews = await getReviews()
	return (
		<div className={styles.trustSection}>
			<TrustTop />

			<Reviews initialReviews={initialReviews} />
			<TrustMetrics />
			<TrustCTA />
		</div>
	)
}

export default TrustSection
