import styles from './NewsLetter.module.scss'
import clsx from 'clsx'
import { EnvelopeSVG } from '@/src/assets/icons/GeneralIcons'
import NewsLetterForm from '@/src/features/newsletter/NewsLetterForm'
import Providers from '@/src/features/Providers/Providers'
import { useTranslations } from 'next-intl'

const NewsLetter = () => {
    const t = useTranslations('NewsLetter')
	return (
		<div className={clsx('row', styles.newsLetterSection)}>
			<div className={styles.newsLetterTextGroup}>
				<div className={styles.envelopeBox}>
					<EnvelopeSVG className={styles.envelopeSVG} />
				</div>
				<div className={styles.newsLetterText}>
					<h3 className={styles.newsLetterH3}>{t('Title')}</h3>
					<p className={styles.newsLetterP}>{t('Description')}
					</p>
				</div>
			</div>
			<Providers>
				<NewsLetterForm />
			</Providers>
		</div>
	)
}

export default NewsLetter
