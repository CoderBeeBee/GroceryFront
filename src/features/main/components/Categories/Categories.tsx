import clsx from 'clsx'
import CarouselCards from '../CarouselCards/CarouselCards'
import styles from './Categories.module.scss'
const Categories = () => {
	return (
		<section className={clsx('row', styles.categoriesSection)}>
            <h2>Categories</h2>
			<CarouselCards />
		</section>
	)
}

export default Categories
