import clsx from 'clsx'
import styles from './Main.module.scss'


import BestSellers from '@/src/features/main/components/BestSellers/BestSellers'
import Categories from '@/src/features/main/components/Categories/Categories'
import Hero from '@/src/features/main/components/Hero/Hero'

const Main = () => {
	return (
		<main className={clsx(styles.main)}>
			<div className={clsx(styles.mainWrapper)}>
				<Hero />
				<Categories />

				<BestSellers />
			</div>
		</main>
	)
}

export default Main
