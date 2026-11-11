import NavButton from '@/src/components/ui/NavButton/NavButton'
import styles from './NavCart.module.scss'
import { CartSVG } from '@/src/assets/icons/ShopIcons'

import { useMenuStore } from '@/src/store/useMenuStore'
import { useTranslations } from 'next-intl'

import { dataMenu } from '@/src/features/navigation/data/dataMenu'

import NavCartDropDown from './NavCartDropDown/NavCartDropDown'
import NavCartWarn from './NavCartWarn/NavCartWarn'
import useProductCart from '@/src/hooks/useProductCart'

const NavCart = () => {
	const t = useTranslations('NavCart')
	const { activeIndex } = useMenuStore()
	const { count } = useProductCart()

	const cartIndex = dataMenu.length * 10
	const isActive = cartIndex === activeIndex

	return (
		<div className={`${styles.navCartWrapper}`}>
			<NavButton ariaLabel={t('ariaLabel')} index={cartIndex}>
				<CartSVG className={styles.navCartSVG} />
				<span className={styles.cartCount}>{count}</span>
			</NavButton>
			<NavCartWarn />
			<NavCartDropDown isActive={isActive} />
		</div>
	)
}

export default NavCart
