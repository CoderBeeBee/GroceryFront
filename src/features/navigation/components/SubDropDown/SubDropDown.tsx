import { toggleDropDown, useMenuStore } from '@/src/store/useMenuStore'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { CategoriesTypes } from '../../types/menu.types'
import { NavigationHref } from '@/src/lib/i18n/navigation'
import { closeMobileMenu } from '@/src/store/useMobileStore'
import useWindowSize from '@/src/hooks/useWindowSize'

interface SubDropDownTypes {
	data: CategoriesTypes[]
	href: NavigationHref
	styles: Record<string, string>
	index: number
	parentIndex: number
}

const SubDropDown = ({ data, href, index, styles, parentIndex }: SubDropDownTypes) => {
	const t = useTranslations('Menu')
	const { isMobile } = useWindowSize()
	const { activeIndex, activeSubIndex } = useMenuStore()

	const isActive = index === activeSubIndex && activeIndex === parentIndex

	return (
		<ul
			id={`submenu-${index}`}
			className={clsx(styles.subDropdown, {
				[styles.activeSubDropdown]: isActive,
			})}>
			{data.map((item, i: number) => {
				return (
					<li
						key={i}
						className={`${styles.subDropdownElement}`}
						onClick={() => {
							if (!isMobile) return
							closeMobileMenu()
							toggleDropDown(parentIndex)
						}}>
						<Link
							href={{
								pathname: `${href}`,
								query: `category=${item.slug}`,
							}}
							className={`${styles.subDropdownLink}`}>
							{t(item.titleKey)}
						</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default SubDropDown
