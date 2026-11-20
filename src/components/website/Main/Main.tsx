import clsx from 'clsx'
import styles from './Main.module.scss'

import BestSellers from '@/src/features/main/components/BestSellers/BestSellers'
import Categories from '@/src/features/main/components/Categories/Categories'
import Hero from '@/src/features/main/components/Hero/Hero'
import TrustSection from '@/src/features/main/components/TrustSection/TrustSection'
import NewsLetter from '@/src/features/main/components/NewsLetter/NewsLetter'

const Main = () => {
	return (
		<main className={clsx(styles.main)}>
			<Hero />
			<div className={styles.section}>
				<Categories />

				<BestSellers />
			</div>
			<TrustSection />
			<NewsLetter />
		</main>
	)
}

export default Main
