import clsx from 'clsx'
import styles from './Main.module.scss'

import BestSellers from '@/src/features/main/components/BestSellers/BestSellers'
import Categories from '@/src/features/main/components/Categories/Categories'
import Hero from '@/src/features/main/components/Hero/Hero'
import TrustSection from '@/src/features/main/components/TrustSection/TrustSection'

const Main = () => {
	return (
		<main className={clsx(styles.main)}>
			<Hero />
			<section className={styles.section}>
				<Categories />

				<BestSellers />
			</section>
			<TrustSection/>
		</main>
	)
}

export default Main
