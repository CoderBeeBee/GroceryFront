import userAccountLinksData from './userAccountLinksData'
import { useTranslations } from 'next-intl'
import useWindowSize from '@/src/hooks/useWindowSize'
import ActionLink from '../../../navigation/components/ActionLink/ActionLink'

type UserAccountLinksProps = {
	styles: Record<string, string>
}

const UserAccountLinks = ({ styles }: UserAccountLinksProps) => {
	const t = useTranslations('UserAccount')
	const { isMobile } = useWindowSize()
	return (
		<div className={`${styles.accountLinksWrapper}`}>
			{isMobile && <p className={`${styles.accountLinksTitle}`}>{t('User Account')}</p>}
			<div className={`${styles.accountLinks}`}>
				{userAccountLinksData.map((link, index: number) => {
					return (
						<ActionLink key={link.titleKey + index} styles={styles} href={link.href} translation="UserAccount">
							{link.titleKey}
						</ActionLink>
					)
				})}
			</div>
		</div>
	)
}

export default UserAccountLinks
