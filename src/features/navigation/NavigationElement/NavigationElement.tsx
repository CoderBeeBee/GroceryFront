import Link from 'next/link'
import { MenuTypes } from '../../../components/website/Navigation/dataMenu'

import DropDown from '../DropDown/DropDown'
import { closeMenu, expandMenu, toggleDropDown, useMenuStore } from '@/src/store/useMenuStore'
import clsx from 'clsx'
import { useParams, usePathname } from 'next/navigation'
import useWindowSize from '@/src/hooks/useWindowSize'
import { toggleMenu } from '@/src/store/useMobileStore'
import { useTranslations } from 'next-intl'
import { ChevronDownSVG } from '@/src/assets/icons/ArrowsIcons'

interface NavigationElementProps {
	styles: Record<string, string>
	item: MenuTypes
	index: number
}

const NavigationElement = ({ styles, item, index }: NavigationElementProps) => {
	const { locale } = useParams()

	const t = useTranslations('Menu')
	const { activeIndex } = useMenuStore(state => state)

	const { isMobile } = useWindowSize()
	const pathname = usePathname()
	const isActive = activeIndex === index
	const isActive2 = pathname === `${item.href.toLowerCase()}${locale}` && !isActive

	return (
		<li
			key={`${item.titleKey}-${index}`}
			tabIndex={item.children && 0}
			className={clsx(styles.navigationElementWrapper, { [styles.activeDropdown]: isActive })}>
			{item.href ? (
				<Link
					locale={`${locale}`}
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
					}}>
					{t(item.titleKey)}
				</Link>
			) : (
				<div
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
					}}>
					<span className={styles.title}>{t(item.titleKey)}</span>
					<ChevronDownSVG className={clsx({ [styles.activeRotateChevron]: isActive })} />
				</div>
			)}

			{item.children?.length && <DropDown data={item} styles={styles} index={index} />}
		</li>
	)
}

export default NavigationElement
