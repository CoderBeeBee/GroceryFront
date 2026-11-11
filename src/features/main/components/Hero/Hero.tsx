import clsx from 'clsx'
import styles from './Hero.module.scss'
import HeroTop from './HeroTop/HeroTop'
import Badges from '@/src/components/ui/Badges/Badges'
import { heroBadges, heroBadgesIcons } from '../../data/heroBadges'

const Hero = () => {
	return (
		<section className={clsx(styles.heroSection)}>
			<div className={clsx('row', styles.heroWrapper)}>
				<HeroTop />
				<Badges data={heroBadges} badgesIcons={heroBadgesIcons} />
			</div>
		</section>
	)
}

export default Hero
