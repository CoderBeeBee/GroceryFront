import { useMenuStore } from '@/src/store/useMenuStore'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { MenuTypes } from '../../types/navigation'

interface SubDropDownTypes {
	data: MenuTypes[]
	styles: Record<string, string>
	index: number
	parentIndex: number
}

const SubDropDown = ({ data, index, styles, parentIndex }: SubDropDownTypes) => {
	const t = useTranslations('Menu')
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
					<li key={i} className={`${styles.subDropdownElement}`}>
						<Link href={item.href} className={`${styles.subDropdownLink}`}>
							{t(item.titleKey)}
						</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default SubDropDown
