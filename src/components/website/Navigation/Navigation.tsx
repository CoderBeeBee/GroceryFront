'use client'
import Logo from '../../ui/Logo/Logo'
import DesktopNav from './DesktopNav/DesktopNav'
import MobileNav from './MobileNav/MobileNav'
import styles from './Navigation.module.scss'
import Hamburger from './Hamburger/Hamburger'
import useBrandName from '@/src/hooks/useBrandName'
import useWindowSize from '@/src/hooks/useWindowSize'
import LanguageSwitcher from './Language/LanguageSwitcher'
import { useAuthStore } from '@/src/store/useAuthStore'
import { ProfileSVG } from '@/src/assets/icons/AuthIcons'
import { CartSVG } from '@/src/assets/icons/ShopIcons'

const Navigation = () => {
	const { brandName } = useBrandName()
	const { isMobile } = useWindowSize()
	const { isLogged } = useAuthStore()
	return (
		<header className={` ${styles.navigationContainer}`}>
			<div className={`row ${styles.navigationWrapper}`}>
				<Logo text={brandName} />
				<DesktopNav />
				<MobileNav />
				<div className={`${styles.additionalNavWrapper}`}>
				<CartSVG/>
				{!isMobile && (!isLogged ? <ProfileSVG /> : 'Rico Jumbo')}
				{!isMobile && <LanguageSwitcher />}
				{isMobile && <Hamburger />}
				</div>
			</div>
		</header>
	)
}

export default Navigation
