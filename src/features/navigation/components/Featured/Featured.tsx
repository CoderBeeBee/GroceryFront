import Button from '@/src/components/ui/Button/Button'
import styles from './Featured.module.scss'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FeaturedType } from '../../types/menu.types'
import { toggleNavActions } from '@/src/store/useMenuStore'

const Featured = ({ ...data }: FeaturedType) => {
	const t = useTranslations('Discover')
	return (
		<div className={styles.featuredWrapper}>
			<Image
				loading="eager"
				src="/images/hero/groceryWebp.webp"
				alt="Featured"
				width={800}
				height={800}
				className={styles.featuredImage}
			/>
			<div className={styles.featuredText}>
				<span className={styles.featuredLabel}>{data.label}</span>
				<h3 className={styles.featuredTitle}>{data.titleKey}</h3>
				<p className={styles.featuredDescription}>{data.description}</p>
				<Button
					href={data.href}
					params={data.titleKey}
					size="sm"
					variant="primary"
					ariaLabel={t('Read')}
					onClick={() => toggleNavActions(null)}
					className={styles.featuredLink}>
					{t('Read')}
				</Button>
			</div>
		</div>
	)
}

export default Featured
