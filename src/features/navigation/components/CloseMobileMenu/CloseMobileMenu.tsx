import { toggleMenu } from '@/src/store/useMobileStore'
import styles from './CloseMobileMenu.module.scss'
import CloseButton from "@/src/components/ui/CloseButton/CloseButton"
import { useTranslations } from 'next-intl'
const CloseMobileMenu = () => {
    const t = useTranslations('Mobile')
	return (
		<div className={styles.closeMobileWrapper}>
			<CloseButton
				
				handleClose={() => {
					toggleMenu()
				}}
				ariaLabel={t('Close mobile menu')}
			/>
			<h2 className={styles.title}>{t('Menu')}</h2>
		</div>
	)
}

export default CloseMobileMenu
