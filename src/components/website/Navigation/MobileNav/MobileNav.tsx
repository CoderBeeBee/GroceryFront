import styles from './MobileNav.module.scss'
import clsx from 'clsx'
import { closeMobileMenu, useMobileStore } from '@/src/store/useMobileStore'
import { useMenuStore } from '@/src/store/useMenuStore'
import { useEffect } from 'react'
import useWindowSize from '@/src/hooks/useWindowSize'
import MobileSettings from '../../../../features/navigation/components/MobileSettings/MobileSettings'
import MobileMenu from '../../../../features/navigation/components/MobileMenu/MobileMenu'
import CloseMobileMenu from '../../../../features/navigation/components/CloseMobileMenu/CloseMobileMenu'
import { useAuthStore } from '@/src/store/useAuthStore'
import AuthNav from '../../../../features/navigation/components/AuthNav/AuthNav'
import MobileNavAccount from '../../../../features/navigation/components/MobileNavAccount/MobileNavAccount'

const MobileNav = () => {
	const { isOpen, isVisible } = useMobileStore()
	const { isLogged } = useAuthStore()
	const { activeIndex } = useMenuStore()
	const { isMobile } = useWindowSize()
	useEffect(() => {
		if (!isMobile) closeMobileMenu()
	}, [isMobile])

	return (
		<nav
			className={clsx(styles.mobileNav, {
				[styles.activeMobile]: isOpen,
				[styles.activeAnim]: isVisible,
				[styles.scrollMenu]: activeIndex,
			})}>
			<div className={`${styles.mobileNavWrapper}`}>
				<CloseMobileMenu />
				{!isLogged ? <AuthNav /> : <MobileNavAccount />}

				<MobileSettings />
				<MobileMenu />
			</div>
		</nav>
	)
}

export default MobileNav
