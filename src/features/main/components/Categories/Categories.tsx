import clsx from 'clsx'
import CarouselCards from '../CarouselCards/CarouselCards'
import styles from './Categories.module.scss'
import { useTranslations } from 'next-intl'
import Badges from '@/src/components/ui/Badges/Badges'
import { heroBadges, heroBadgesIcons } from '../../data/heroBadges'
const Categories = () => {
	const t = useTranslations('Categories')
	return (
		<section className={clsx('row', styles.categoriesSection)}>
			
			<div className={styles.categoriesHeader}>
				<h2 className={styles.categoriesTitle}>{t('CategoriesTitle')}</h2>
				<p className={styles.categoriesDescription}> {t('CategoriesDescription')}</p>
			</div>
			<CarouselCards />
			<div className={styles.categoriesBadges}>
				<Badges data={heroBadges} badgesIcons={heroBadgesIcons} />
			</div>
		</section>
	)
}

export default Categories
