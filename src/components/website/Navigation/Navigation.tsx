'use client'
import Logo from '../../ui/Logo/Logo'
import DesktopNav from './DesktopNav/DesktopNav'
import MobileNav from './MobileNav/MobileNav'
import styles from './Navigation.module.scss'
import Hamburger from '../../../features/navigation/components/Hamburger/Hamburger'
import useBrandName from '@/src/hooks/useBrandName'
import useWindowSize from '@/src/hooks/useWindowSize'
import LanguageSwitcher from '../../../features/localization/components/Language/LanguageSwitcher'

import { toggleNavActions } from '@/src/store/useMenuStore'
import { useEffect, useRef } from 'react'
import NavCart from '../../../features/navigation/components/NavCart/NavCart'
import NavAccount from '@/src/features/navigation/components/NavAccount/NavAccount'

const Navigation = () => {
	const { brandName } = useBrandName()
	const { isMobile } = useWindowSize()
	const actionRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (isMobile) return
		const handleClickOutside = (e: globalThis.MouseEvent) => {
			const target = e.target as HTMLElement
			const el = actionRef.current

			if (el && !el.contains(target)) {
				toggleNavActions(null)
			}
		}

		window.addEventListener('mousedown', handleClickOutside)

		return () => window.removeEventListener('mousedown', handleClickOutside)
	}, [isMobile])

	return (
		<header className={` ${styles.navigationContainer}`}>
			<div className={`row ${styles.navigationWrapper}`}>
				<Logo text={brandName} />
				<DesktopNav />
				<MobileNav />
				<div ref={actionRef} className={`${styles.navActions}`}>
					<NavCart />

					{isMobile ? (
						<Hamburger />
					) : (
						<>
							<NavAccount />
							<LanguageSwitcher />
						</>
					)}
				</div>
			</div>
		</header>
	)
}

export default Navigation
