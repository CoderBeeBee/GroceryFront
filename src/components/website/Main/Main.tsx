import clsx from 'clsx'
import styles from './Main.module.scss'
import HeroTop from '@/src/features/main/components/HeroTop/HeroTop'

const Main = () => {
	return (
		<main className={clsx(styles.main)}>
			<div className={clsx("row",styles.mainWrapper)}>
                <section className={clsx(styles.heroSection)}>

				<HeroTop />
                </section>
			</div>
		</main>
	)
}

export default Main
