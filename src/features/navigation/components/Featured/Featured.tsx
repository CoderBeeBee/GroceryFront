import Button from '@/src/components/ui/Button/Button'
import styles from './Featured.module.scss'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FeaturedType } from '../../types/menu.types'

const Featured = ({ ...data }: FeaturedType) => {
	const t = useTranslations('Menu')
	return (
		<div className={styles.featuredWrapper}>
			<Image
				loading="eager"
				src="/images/hero/groceryWebp.webp"
				alt="Featured"
				width={120}
				height={60}
				className={styles.featuredImage}
			/>
			<div className={styles.featuredText}>
				<span className={styles.featuredLabel}>{data.label}</span>
				<h3 className={styles.featuredTitle}>{data.titleKey}</h3>
				<p className={styles.featuredDescription}>{data.description}</p>
				<Button
					href={data.href}
					params={data.titleKey}
					size='sm'
					variant="primary"
					ariaLabel={t('Read')}
					className={styles.featuredLink}>
					{t('Read')}
				</Button>
			</div>
		</div>
	)
}

export default Featured
