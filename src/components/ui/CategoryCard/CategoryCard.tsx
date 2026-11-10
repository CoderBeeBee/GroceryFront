import Image from 'next/image'
import styles from './CategoryCard.module.scss'
import { ArrowNext } from '@/src/assets/icons/ArrowsIcons'
import { Link, NavigationHref } from '@/src/lib/i18n/navigation'
import { useTranslations } from 'next-intl'
import { carouselCardType } from '@/src/features/main/types/carouselCards.type'
import { RefObject } from 'react'

type CategoryCardType = {
	data: carouselCardType
	index: number
	slideRef: RefObject<HTMLAnchorElement | null>
	translation: string
}

const CategoryCard = ({ data, index, slideRef, translation }: CategoryCardType) => {
	const t = useTranslations(translation)
	let linkHref = ''

	if (data.href && data.href.includes('[category]')) {
		linkHref = data.href.replace('[category]', data.params)

		if (data.slug) {
			linkHref = `${data.href.replace('[category]', data.params)}?category=${data.slug}`
		}
	}
	return (
		<Link ref={index === 0 ? slideRef : null} href={linkHref as NavigationHref} className={styles.cardSlide}>
			<Image
				src={data.img}
				width={800}
				height={800}
				alt={data.titleKey}
				className={styles.cardImage}
			/>
			<div className={styles.cardText}>
				<h3 className={styles.cardH3}>{t(data.titleKey)}</h3>
				<p className={styles.cardP}>{t(data.desc)}</p>

				<ArrowNext className={styles.chevronSVG} />
			</div>
		</Link>
	)
}

export default CategoryCard
