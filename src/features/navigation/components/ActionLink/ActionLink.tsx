import { ReactNode } from 'react'
import { Link, NavigationHref } from '@/src/lib/i18n/navigation'
import { useTranslations } from 'next-intl'
import { toggleMenu } from '@/src/store/useMobileStore'
import { toggleNavActions } from '@/src/store/useMenuStore'
import { CreateAccountSVG, LoginSVG, LogoutSVG, ProfileSVG } from '@/src/assets/icons/AuthIcons'
import { SettingsSVG } from '@/src/assets/icons/GeneralIcons'
import useWindowSize from '@/src/hooks/useWindowSize'

interface LoginProps {
	children: string
	href: NavigationHref
	translation: string
	styles: Record<string, string>
}
const refractorSVG: Record<string, (styles: Record<string, string>) => ReactNode> = {
	'/': styles => <LogoutSVG className={`${styles.actionSVG}`} />,
	'/login': styles => <LoginSVG className={`${styles.actionSVG}`} />,
	'/create-account': styles => <CreateAccountSVG className={`${styles.actionSVG}`} />,
	'/settings': styles => <SettingsSVG className={`${styles.actionSVG}`} />,
	'/profile': styles => <ProfileSVG className={`${styles.actionSVG}`} />,
}

const ActionLink = ({ href, children, translation, styles }: LoginProps) => {
	const { isMobile } = useWindowSize()
	const t = useTranslations(translation)
	return (
		<Link
			href={href}
			onClick={() => {
				if (isMobile) toggleMenu()
				else toggleNavActions(null)
			}}
			className={`${styles.actionLink}`}>
			{typeof href === 'string' ? refractorSVG[href]?.(styles) : null}
			{t(children)}
		</Link>
	)
}

export default ActionLink
