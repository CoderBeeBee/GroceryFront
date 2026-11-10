import { toggleDropDown, useMenuStore } from '@/src/store/useMenuStore'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { AppPathnames, CategoriesTypes } from '../../types/menu.types'
import { Link, NavigationHref } from '@/src/lib/i18n/navigation'
import { closeMobileMenu } from '@/src/store/useMobileStore'
import useWindowSize from '@/src/hooks/useWindowSize'

interface SubDropDownTypes {
	data: CategoriesTypes[]
	href: AppPathnames
	styles: Record<string, string>
	index: number
	parentIndex: number
	params: string
}

const SubDropDown = ({ data, params, href, index, styles, parentIndex }: SubDropDownTypes) => {
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
				

				let finalHref = ''

				// Pobieramy href z elementu lub jako fallback bierzemy przekazany z góry
				const currentHref = item.href || href

				// 1. Obsługa podwójnej dynamiki w Discover: /discover/[slug]/[subSlug]
				if (currentHref.includes('[category]') && currentHref.includes('[subCategory]')) {
					finalHref = currentHref
						.replace('[category]', params) // Podmienia np. na 'explore'
						.replace('[subCategory]', item.slug) // Podmienia np. na 'recipes'
				}
				// 2. Obsługa pojedynczej dynamiki w Sklepie: /shop/[slug] + filtrowanie query
				else if (currentHref.includes('[category]')) {
					finalHref = currentHref.replace('[category]', params)
					if (item.slug) {
						finalHref += `?category=${item.slug}` // Wynik: /shop/fresh-produce?category=fruits
					}
				}
				// 3. Obsługa statycznego Journal z parametrami query (np. /discover/journal?sort=latest)
				else if (currentHref.includes('journal')) {
					finalHref = `${currentHref.replace('[slug]', item.slug)}?sort=${item.slug}`
				}
				// 4. Fallback dla standardowych, prostych ścieżek
				else {
					finalHref = currentHref
				}
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
							href={finalHref as NavigationHref}
							aria-label={t(item.titleKey)}
							className={`${styles.subDropdownLink}`}>
							<span className={styles.dot}></span>

							{t(item.titleKey)}
						</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default SubDropDown
