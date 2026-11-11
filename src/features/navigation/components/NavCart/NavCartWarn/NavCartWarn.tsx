import clsx from 'clsx'
import styles from './NavCartWarn.module.scss'
import { WarnSVG } from '@/src/assets/icons/DashboardIcons'
import { useAddToCartStore } from '@/src/store/useAddToCartStore'
import { useTranslations } from 'next-intl'

const NavCartWarn = () => {
    const t = useTranslations('NavCart')
	const { isEqual } = useAddToCartStore()
    
	return (
		<div className={clsx(styles.cartWarn, { [styles.displayCartWarn]: isEqual })}>
			<div className={styles.cartWarnSVGBox}>
				<WarnSVG className={styles.warnSVG} />
				{t('MaxAmount')}
			</div>
			<p className={styles.cartWarnText}>{t('WarnDescription')}</p>
		</div>
	)
}

export default NavCartWarn
