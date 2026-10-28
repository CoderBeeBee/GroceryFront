'use client'
import Logo from '../../ui/Logo/Logo'
import DesktopNav from './DesktopNav/DesktopNav'
import MobileNav from './MobileNav/MobileNav'
import styles from './Navigation.module.scss'
import Hamburger from '../../../features/navigation/components/Hamburger/Hamburger'

import useWindowSize from '@/src/hooks/useWindowSize'
import LanguageSwitcher from '../../../features/localization/components/Language/LanguageSwitcher'

import { toggleNavActions } from '@/src/store/useMenuStore'
import { useEffect, useRef } from 'react'
import NavCart from '../../../features/navigation/components/NavCart/NavCart'
import NavAccount from '@/src/features/navigation/components/NavAccount/NavAccount'
import NavSearch from '@/src/features/navigation/components/NavSearch/NavSearch'
import NavButton from '../../ui/NavButton/NavButton'
import { SearchSVG } from '@/src/assets/icons/GeneralIcons'
import { toggleSearch } from '@/src/store/useSearchStore'
import { Provider } from 'react-redux'
import { store } from '@/src/lib/store'
import { SITE_NAME } from '@/src/config/site'


const Navigation = () => {
	
	const { isMobile, widthLess600 } = useWindowSize()
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
		<Provider store={store}>
			<header className={` ${styles.navigationContainer}`}>
				<div className={`row ${styles.navigationWrapper}`}>
					<Logo text={SITE_NAME} />
					<DesktopNav />
					<MobileNav />
					<div ref={actionRef} className={`${styles.navActions}`}>
						<NavSearch />
						{widthLess600 && (
							<NavButton ariaLabel="Open search" fn={toggleSearch}>
								{' '}
								<SearchSVG />
							</NavButton>
						)}
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
		</Provider>
	)
}

export default Navigation
