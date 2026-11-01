import clsx from 'clsx'
import styles from './Main.module.scss'
import HeroTop from '@/src/features/main/components/HeroTop/HeroTop'
import Badges from '../../ui/Badges/Badges'
import { heroBadges, heroBadgesIcons } from '@/src/features/main/data/heroBadges'
import CategoryCards from '@/src/features/main/components/CategoryCards/CategoryCards'

const Main = () => {
	return (
		<main className={clsx(styles.main)}>
			<div className={clsx('row', styles.mainWrapper)}>
				<section className={clsx(styles.heroSection)}>
					<HeroTop />
					<Badges data={heroBadges} badgesIcons={heroBadgesIcons} />
					<CategoryCards />
				</section>
			</div>
		</main>
	)
}

export default Main
