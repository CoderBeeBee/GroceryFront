import NavButton from '@/src/components/ui/NavButton/NavButton'
import styles from './NavCart.module.scss'
import { CartSVG } from '@/src/assets/icons/ShopIcons'
import clsx from 'clsx'
import { useMenuStore } from '@/src/store/useMenuStore'
import { useTranslations } from 'next-intl'

import { dataMenu } from '@/src/features/navigation/data/dataMenu'
import { useAddToCartStore } from '@/src/store/useAddToCartStore'
import { WarnSVG } from '@/src/assets/icons/DashboardIcons'
import NavCartDropDown from './NavCartDropDown/NavCartDropDown'

const NavCart = () => {
	const t = useTranslations('NavCart')
	const { activeIndex } = useMenuStore()
	const { products, isEqual } = useAddToCartStore()

	const total = Math.min(products.length, 100)

	const cartIndex = dataMenu.length * 10
	const isActive = cartIndex === activeIndex

	return (
		<div className={`${styles.navCartWrapper}`}>
			<NavButton ariaLabel={t('ariaLabel')} index={cartIndex}>
				<CartSVG className={styles.navCartSVG} />
				<span className={styles.cartCount}>{total}</span>
				<span className={clsx(styles.cartWarn, { [styles.displayCartWarn]: isEqual })}>
					<div className={styles.cartWarnSVGBox}>
						<WarnSVG className={styles.warnSVG} />
						Maximum quantity reached
					</div>
					<p className={styles.cartWarnText}>
						You cannot add any more products. The maximum quantity in the cart is 100.
					</p>
				</span>
			</NavButton>

			<NavCartDropDown isActive={isActive} />
		</div>
	)
}

export default NavCart
