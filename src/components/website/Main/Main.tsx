import clsx from 'clsx'
import styles from './Main.module.scss'
import HeroTop from '@/src/features/main/components/HeroTop/HeroTop'
import Badges from '../../ui/Badges/Badges'
import { heroBadges, heroBadgesIcons } from '@/src/features/main/data/heroBadges'
import CarouselCards from '@/src/features/main/components/CarouselCards/CarouselCards'
import BestSellers from '@/src/features/main/components/BestSellers/BestSellers'

const Main = () => {
	return (
		<main className={clsx(styles.main)}>
			<div className={clsx(styles.mainWrapper)}>
				<section className={clsx(styles.heroSection)}>
					<div className={clsx('row', styles.heroWrapper)}>
						<HeroTop />
						<Badges data={heroBadges} badgesIcons={heroBadgesIcons} />
					</div>
				</section>
				<section className={clsx('row', styles.products)}>
					<BestSellers />
					<CarouselCards />
				</section>
			</div>
		</main>
	)
}

export default Main
