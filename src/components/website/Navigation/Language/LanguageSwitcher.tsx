import { usePathname, useRouter } from '@/src/lib/i18n/navigation'
import { useLocale } from 'next-intl'
import styles from './Language.module.scss'
import { routing } from '@/src/lib/i18n/routing'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

import useWindowSize from '@/src/hooks/useWindowSize'
import { ChevronDownSVG } from '@/src/assets/icons/ArrowsIcons'

const LanguageSwitcher = () => {
	const { isMobile } = useWindowSize()
	const [isActive, setIsActive] = useState<boolean>(false)
	const dropRef = useRef<HTMLDivElement | null>(null)
	const locale = useLocale()
	const pathname = usePathname()
	const router = useRouter()

	const changeLanguage = (el: string) => {
		if (locale === el) return
		router.replace(pathname, {
			locale: el,
		})
	}
	const toggleDropdown = () => {
		setIsActive(prev => !prev)
	}

	useEffect(() => {
		const globalClose = (e: globalThis.MouseEvent) => {
			const target = e.target as HTMLElement
			const el = dropRef.current

			if (el && !el?.contains(target) && !target.classList.contains(styles.langChangeButton)) setIsActive(false)
		}

		window.addEventListener('click', globalClose)

		return () => window.removeEventListener('click', globalClose)
	}, [])
	return (
		<div className={`${styles.langWrapper}`}>
			<button
				className={`${styles.langChangeButton}`}
				onClick={() => {
					toggleDropdown()
				}}>
				<span className={`${styles.title}`}>{locale}</span>
				{isMobile && <ChevronDownSVG className={clsx(styles.chevronSVG, { [styles.rotateChevron]: isActive })} />}
			</button>

			<div ref={dropRef} className={clsx(styles.dropdown, { [styles.active]: isActive })}>
				{routing.locales.map((el, index: number) => {
					return (
						<button
							key={el + index}
							className={`${styles.btn}`}
							onClick={() => {
								changeLanguage(el)
								toggleDropdown()
							}}>
							{el.toUpperCase()}
						</button>
					)
				})}
			</div>
		</div>
	)
}

export default LanguageSwitcher
