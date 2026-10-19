import { usePathname, useRouter } from '@/src/lib/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import styles from './Language.module.scss'
import { routing } from '@/src/lib/i18n/routing'
import clsx from 'clsx'
import useWindowSize from '@/src/hooks/useWindowSize'
import { ChevronDownSVG } from '@/src/assets/icons/ArrowsIcons'
import NavButton from '@/src/components/ui/NavButton/NavButton'
import { toggleNavActions, useMenuStore } from '@/src/store/useMenuStore'
import { dataMenu } from '@/src/features/navigation/data/dataMenu'

const LanguageSwitcher = () => {
	const t = useTranslations('Language')
	const { isMobile } = useWindowSize()
	const { activeIndex } = useMenuStore()
	const languageIndex = dataMenu.length * 30
	const locale = useLocale()
	const pathname = usePathname()
	const router = useRouter()
	const isActive = languageIndex === activeIndex
	const changeLanguage = (el: string) => {
		if (locale === el) return
		router.replace(pathname, {
			locale: el,
		})
	}

	return (
		<div className={`${styles.langWrapper}`}>
			<NavButton index={languageIndex} ariaLabel="Open Language">
				<span className={`${styles.title}`}>{locale}</span>
				{isMobile && <ChevronDownSVG className={clsx(styles.chevronSVG, { [styles.rotateChevron]: isActive })} />}
			</NavButton>
			<div className={clsx(styles.languageDropdown, { [styles.active]: isActive })}>
				{routing.locales.map((el, index: number) => {
					return (
						<button
							type="button"
							aria-label={t('selectLanguage', { el })}
							key={el + index}
							className={`${styles.btn}`}
							onClick={() => {
								changeLanguage(el)

								toggleNavActions(null)
							}}>
							{el}
						</button>
					)
				})}
			</div>
		</div>
	)
}

export default LanguageSwitcher
