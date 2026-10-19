import { useTranslations } from 'next-intl'
import LanguageSwitcher from '../../../localization/components/Language/LanguageSwitcher'
import styles from './MobileSettings.module.scss'

const MobileSettings = () => {
	const t = useTranslations('Mobile')
	return (
		<div className={`${styles.siteSettingsWrapper}`}>
			<p className={`${styles.menuTitle}`}>{t('Site Settings')}</p>
			<ul className={`${styles.siteSettingsList}`}>
				<li className={`${styles.siteSettingsLi}`}>
					<p className={`${styles.siteLiTitle}`}>{t('Language')}</p>
					<LanguageSwitcher />
				</li>
			</ul>
		</div>
	)
}

export default MobileSettings
