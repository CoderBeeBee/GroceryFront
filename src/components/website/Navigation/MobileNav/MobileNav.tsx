import styles from './MobileNav.module.scss'

import clsx from 'clsx'
import { closeMobileMenu, useMobileStore } from '@/src/store/useMobileStore'
import { useMenuStore } from '@/src/store/useMenuStore'
import { useEffect } from 'react'
import useWindowSize from '@/src/hooks/useWindowSize'

import MobileSettings from './MobileSettings/MobileSettings'
import MobileMenu from './MobileMenu/MobileMenu'
import CloseMobileMenu from './CloseMobileMenu/CloseMobileMenu'
import { useAuthStore } from '@/src/store/useAuthStore'

import Profile from './Profile/Profile'
import AuthNav from './AuthNav/AuthNav'

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
				{!isLogged ? <AuthNav /> : <Profile />}

				<MobileSettings />
				<MobileMenu />
			</div>
		</nav>
	)
}

export default MobileNav
