import { closeMenu, expandMenu, toggleNavActions, toggleSubDropDown, useMenuStore } from '@/src/store/useMenuStore'
import clsx from 'clsx'

import SubDropDown from '../SubDropDown/SubDropDown'
import useWindowSize from '@/src/hooks/useWindowSize'
import { useTranslations } from 'next-intl'
import { ChevronDownSVG } from '@/src/assets/icons/ArrowsIcons'
import { MenuTypes } from '../../types/menu.types'
import Button from '@/src/components/ui/Button/Button'
import { closeMobileMenu } from '@/src/store/useMobileStore'

import Featured from '../Featured/Featured'

interface DropDownTypes {
	data: MenuTypes
	styles: Record<string, string>
	index: number
}

const CategoriesDropDown = ({ data, styles, index }: DropDownTypes) => {
	const translation = data.titleKey === 'Shop' ? 'ShopMenu' : 'Discover'
	const t = useTranslations(translation)
	const { activeIndex, activeSubIndex } = useMenuStore(state => state)
	const { isMobile } = useWindowSize()

	const isActive = activeIndex === index

	return (
		<div
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
			{data && data.categories && !isMobile && (
				<div className={styles.labelWrapper}>
					<h3 className={styles.labelH3}>{t(data.titleKey)}</h3>
					<p className={styles.labelDescription}>{t(data.description)}</p>
				</div>
			)}
			<ul className={clsx(styles.dropDownList)}>
				{data &&
					data.categories?.map((item, i: number) => {
						const isActive = activeSubIndex === i

						return (
							<li
								key={item.titleKey}
								className={clsx(styles.dropDownElement, { [styles.activeSubDropdown]: isActive })}>
								{item.categories && item.categories?.length && (
									<button
										onClick={() => {
											if (item.categories && isMobile) toggleSubDropDown(i)
										}}
										type="button"
										className={clsx(styles.dropDownLink, { [styles.activeLinkDropdown]: isActive })}
										aria-expanded={isActive}
										aria-controls={`submenu-${index}`}>
										<span>{t(item.titleKey)}</span>
										{isMobile && (
											<ChevronDownSVG className={clsx(styles.chevron, { [styles.activeRotateChevron]: isActive })} />
										)}
									</button>
								)}
								{item.categories && item.href && (
									<SubDropDown
										href={item.href}
										params={item.slug}
										data={item.categories}
										index={i}
										parentIndex={index}
										styles={styles}
										translation={translation}
									/>
								)}
							</li>
						)
					})}
			</ul>
			{data && data.featured && !isMobile && <Featured {...data.featured} />}
			{data && data.footer && (
				<Button
					href={data.footer.href}
					params={data.footer.slug}
					variant="primary"
					ariaLabel={t(data.footer.titleKey)}
					onClick={() => {
						closeMobileMenu()
						toggleNavActions(null)
					}}
					className={styles.mobileFotterButton}>
					{t(data.footer.titleKey)}
				</Button>
			)}
		</div>
	)
}

export default CategoriesDropDown
