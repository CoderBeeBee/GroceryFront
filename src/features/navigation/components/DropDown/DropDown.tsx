import {
	closeMenu,
	closeSubMenu,
	expandMenu,
	expandSubMenu,
	toggleSubDropDown,
	useMenuStore,
} from '@/src/store/useMenuStore'
import clsx from 'clsx'
import Link from 'next/link'
import SubDropDown from '../SubDropDown/SubDropDown'
import useWindowSize from '@/src/hooks/useWindowSize'
import { useTranslations } from 'next-intl'
import { ChevronDownSVG } from '@/src/assets/icons/ArrowsIcons'
import { MenuTypes } from '../../types/navigation'

interface DropDownTypes {
	data: MenuTypes
	styles: Record<string, string>
	index: number
}

const DropDown = ({ data, styles, index }: DropDownTypes) => {
	const t = useTranslations('Menu')
	const { activeIndex, activeSubIndex } = useMenuStore(state => state)
	const { isMobile } = useWindowSize()
	const isActive = activeIndex === index
	return (
		<ul
			id={`menu-${index}`}
			className={clsx(styles.dropDownWrapper, { [styles.activeDropdown]: isActive })}
			onMouseEnter={() => {
				if (isMobile) return
				expandMenu(index)
			}}
			onMouseLeave={() => {
				if (isMobile) return
				closeMenu()
			}}>
			{data &&
				data.children?.map((item, i: number) => {
					const isActive = activeSubIndex === i

					return (
						<li
							key={item.titleKey}
							className={clsx(styles.dropDownElement, { [styles.activeSubDropDown]: isActive })}
							onMouseEnter={() => {
								if (isMobile) return
								if (item.children) expandSubMenu(i)
								else closeSubMenu()
							}}
							onClick={() => {
								if (item.children) toggleSubDropDown(i)
							}}>
							{item.children && item.children?.length ? (
								<button
									type="button"
									className={clsx(styles.dropDownLink, { [styles.activeLinkDropdown]: isActive })}
									aria-expanded={isActive}
									aria-controls={`submenu-${index}`}
								>
									{t(item.titleKey)}

									<ChevronDownSVG className={clsx(styles.chevron, { [styles.activeRotateChevron]: isActive })} />
								</button>
							) : (
								<Link href={item.href} className={`${styles.dropDownLink}`}>
									{t(item.titleKey)}
								</Link>
							)}
							{item.children && <SubDropDown data={item.children} index={i} parentIndex={index} styles={styles} />}
						</li>
					)
				})}
		</ul>
	)
}

export default DropDown
