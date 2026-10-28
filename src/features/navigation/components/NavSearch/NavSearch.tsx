import clsx from 'clsx'
import styles from './NavSearch.module.scss'
import { SearchSVG } from '@/src/assets/icons/GeneralIcons'
import CloseButton from '@/src/components/ui/CloseButton/CloseButton'
import { closeList, toggleList, toggleSearch, useSearchStore } from '@/src/store/useSearchStore'
import useWindowSize from '@/src/hooks/useWindowSize'
import { Link } from '@/src/lib/i18n/navigation'
import { toggleNavActions } from '@/src/store/useMenuStore'
import { ChangeEvent, useEffect, useState } from 'react'
import useDebounce from '@/src/hooks/useDebounce'
import { useLazySearchProductQuery } from '@/src/api/productApi'
import { searchDataTypes } from '../../types/navigation'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { useTranslations } from 'next-intl'

const NavSearch = () => {
	const t = useTranslations("Search")
	const url = 'wisnia'
	const { widthLess600 } = useWindowSize()
	const { isOpen, isVisible, activeList, activeHeight } = useSearchStore()
	const [value, setValue] = useState<string>('')
	const debouncedValue = useDebounce(value, 500)
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [searchProduct, { data, reset }] = useLazySearchProductQuery()

	useEffect(() => {
		if (!debouncedValue) {
			reset()
			return
		}

		searchProduct(debouncedValue)
			.unwrap()
			.catch((error: unknown) => {
				const fetchError = error as FetchBaseQueryError

				const errorMessage =
					fetchError.data && typeof fetchError.data === 'object' && 'message' in fetchError.data
						? String(fetchError.data.message)
						: 'An unexpected error has occurred'

				setErrorMessage(errorMessage)
			})
	}, [debouncedValue, searchProduct, reset, setErrorMessage])

	if (data && errorMessage) {
		setErrorMessage('')
	}

	const serachInput = (e: ChangeEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement

		setValue(target.value.trim())
	}

	const searchFocus = () => {
		toggleList()
		toggleNavActions(null)
	}

	return (
		<div className={clsx(styles.navSearchWrapper, { [styles.fadeIn]: isOpen })}>
			<div className={clsx(styles.navSearchHeader, { [styles.showSearch]: isVisible })}>
				<div className={`${styles.navSearchForm}`}>
					{/* input */}
					<form className={`${styles.formWrapper}`}>
						<label htmlFor="search" className={`${styles.navSearchBox}`}>
							<input
								value={value}
								id="search"
								name="search"
								type="text"
								autoComplete="off"
								placeholder={t("Search")}
								className={`${styles.formInput}`}
								onChange={e => serachInput(e)}
								onFocus={() => searchFocus()}
								onBlur={() => closeList()}
							/>
							<SearchSVG />
						</label>
					</form>

					{/* product list dropdown */}
					<div
						className={clsx(styles.elementSearchList, {
							[styles.fadeOut]: activeList,
							[styles.height]: activeHeight,
						})}>
						{Array.from({ length: 10 }, (_, index) => {
							return (
								<Link
									key={index}
									href={{
										pathname: '/product/[slug]',
										params: { slug: url },
									}}
									className={`${styles.elementSearchListLink}`}>
									Produkt {index + 1}
								</Link>
							)
						})}
						{data &&
							data.map((item: searchDataTypes) => {
								return (
									<Link
										key={item._id}
										href={{
											pathname: '/product/[slug]',
											params: { slug: item.slug },
										}}
										className={`${styles.elementSearchListLink}`}>
										{item.name}
									</Link>
								)
							})}

						{errorMessage && <span className={styles.elementSearchListLink}>{errorMessage}</span>}
					</div>
				</div>
				{widthLess600 && <CloseButton handleClose={toggleSearch} ariaLabel="Close Search" />}
			</div>
		</div>
	)
}

export default NavSearch
