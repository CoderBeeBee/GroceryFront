import NavButton from '@/src/components/ui/NavButton/NavButton'
import styles from './NavCart.module.scss'
import { CartSVG } from '@/src/assets/icons/ShopIcons'

import clsx from 'clsx'
import { useMenuStore } from '@/src/store/useMenuStore'
import { useTranslations } from 'next-intl'
import ActionLink from '@/src/features/navigation/components/ActionLink/ActionLink'
import { dataMenu } from '@/src/features/navigation/data/dataMenu'

const NavCart = () => {
	const t = useTranslations('NavCart')
	const count = 32
	const { activeIndex } = useMenuStore()
	const cartIndex = dataMenu.length * 10
	const isActive = cartIndex === activeIndex
	return (
		<div className={`${styles.navCartWrapper}`}>
			<NavButton ariaLabel={t('ariaLabel')} index={cartIndex}>
				<CartSVG className={styles.navCartSVG} />
				{count && <span className={styles.cartCount}>{count}</span>}
			</NavButton>

			<div className={clsx(styles.navCartDropdown, { [styles.activeDropdown]: isActive })}>
				<div className={`${styles.navCartProduct}`}>
					<p>Product: Cherries</p>
					<p>Price: 300$</p>
				</div>
				<ActionLink href="/shopping-cart" translation="NavCart" styles={styles}>
					View All
				</ActionLink>
			</div>
		</div>
	)
}

export default NavCart
