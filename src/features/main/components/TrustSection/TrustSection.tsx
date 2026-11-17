import Reviews from './Reviews/Reviews'
import TrustCTA from './TrustCTA/TrustCTA'
import TrustMetrics from './TrustMetrics/TrustMetrics'
import styles from './TrustSection.module.scss'
import TrustTop from './TrustTop/TrustTop'

const TrustSection = () => {
	return (
		<div className={styles.trustSection}>
			<TrustTop />

			<Reviews />
			<TrustMetrics />
			<TrustCTA />
		</div>
	)
}

export default TrustSection
