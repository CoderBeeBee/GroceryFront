import {
	closeMenu,
	closeSubMenu,
	expandMenu,
	expandSubMenu,
	toggleSubDropDown,
	useMenuStore,
} from '@/src/store/useMenuStore'
import clsx from 'clsx'

import SubDropDown from '../SubDropDown/SubDropDown'
import useWindowSize from '@/src/hooks/useWindowSize'
import { useTranslations } from 'next-intl'
import { ChevronDownSVG } from '@/src/assets/icons/ArrowsIcons'
import { MenuTypes } from '../../types/menu.types'


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
				data.categories?.map((item, i: number) => {
					const isActive = activeSubIndex === i

					return (
						<li
							key={item.titleKey}
							className={clsx(styles.dropDownElement, { [styles.activeSubDropdown]: isActive })}
							onMouseEnter={() => {
								if (isMobile) return
								if (item.categories) expandSubMenu(i)
								else closeSubMenu()
							}}
							// onClick={() => {
							// 				if (item.categories) toggleSubDropDown(i)
							// 			}}
						>
							{
								item.categories && item.categories?.length && (
									<button
										// href={{
										// 	pathname:`${data.href}`,
										// 	query:`category=${item.slug}`
										// }}
										onClick={() => {
											if (item.categories) toggleSubDropDown(i)
										}}
										type="button"
										className={clsx(styles.dropDownLink, { [styles.activeLinkDropdown]: isActive })}
										aria-expanded={isActive}
										aria-controls={`submenu-${index}`}>
										<span>{t(item.titleKey)}</span>
										<ChevronDownSVG className={clsx(styles.chevron, { [styles.activeRotateChevron]: isActive })} />
									</button>
								)
								// : (
								// 	<Link href={data.href} className={`${styles.dropDownLink}`}>
								// 		{t(item.titleKey)}
								// 	</Link>
								// )
							}
							{item.categories && (
								<SubDropDown href={data.href} data={item.categories} index={i} parentIndex={index} styles={styles} />
							)}
						</li>
					)
				})}
		</ul>
	)
}

export default DropDown
