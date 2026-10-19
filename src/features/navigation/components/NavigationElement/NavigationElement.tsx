import DropDown from '../DropDown/DropDown'
import { closeMenu, expandMenu, onKeyDown, toggleDropDown, useMenuStore } from '@/src/store/useMenuStore'
import clsx from 'clsx'

import useWindowSize from '@/src/hooks/useWindowSize'
import { toggleMenu } from '@/src/store/useMobileStore'
import { useTranslations } from 'next-intl'
import { ChevronDownSVG } from '@/src/assets/icons/ArrowsIcons'
import { Link, usePathname } from '@/src/lib/i18n/navigation'
import { MenuTypes } from '../../types/navigation'

interface NavigationElementProps {
	styles: Record<string, string>
	item: MenuTypes
	index: number
}

const NavigationElement = ({ styles, item, index }: NavigationElementProps) => {
	const t = useTranslations('Menu')
	const { activeIndex } = useMenuStore(state => state)

	const { isMobile } = useWindowSize()
	const pathname = usePathname()
	const isActive = activeIndex === index

	const isActive2 = pathname === item.href && !activeIndex

	return (
		<li
			
			className={clsx(styles.navigationElementWrapper, { [styles.activeDropdown]: isActive })}>
			{item.href ? (
				<Link
					href={item.href}
					className={clsx(styles.link, { [styles.activeLink]: isActive2 })}
					onMouseEnter={() => {
						if (isMobile) return
						expandMenu(null)
					}}
					onClick={() => {
						if (isMobile) {
							if (isActive2) return
							toggleMenu()
						}
					}}
					onKeyDown={e => {
						if (isMobile) return
						onKeyDown(e, index)
					}}>
					{t(item.titleKey)}
				</Link>
			) : (
				<button
					aria-expanded={isActive}
					aria-controls={`menu-${index}`}
					className={clsx(styles.link, { [styles.activeLink]: isActive })}
					onMouseEnter={() => {
						if (isMobile) return
						expandMenu(index)
					}}
					onMouseLeave={() => {
						if (isMobile) return
						closeMenu()
					}}
					onClick={() => {
						if (isMobile) {
							toggleDropDown(index)
						}
					}}
					onKeyDown={e => {
						if (isMobile) return
						onKeyDown(e, index)
					}}>
					<span className={styles.title}>{t(item.titleKey)}</span>
					<ChevronDownSVG className={clsx({ [styles.activeRotateChevron]: isActive })} />
				</button>
			)}

			{item.children?.length && <DropDown data={item} styles={styles} index={index} />}
		</li>
	)
}

export default NavigationElement
