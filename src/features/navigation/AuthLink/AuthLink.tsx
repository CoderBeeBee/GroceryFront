import { useTranslations } from 'next-intl'
import Link from 'next/link'
import styles from './AuthLink.module.scss'
import {  toggleMenu } from '@/src/store/useMobileStore'
import useWindowSize from '@/src/hooks/useWindowSize'
import { CreateAccountSVG, LoginSVG, LogoutSVG } from '@/src/assets/icons/AuthIcons'

interface LoginProps {
	children: string
	href: string
}

const AuthLink = ({ href, children }: LoginProps) => {
	const { isMobile } = useWindowSize()
	const t = useTranslations('AuthLink')
	return (
		<Link
			href={href}
			onClick={() => {
				if (isMobile) toggleMenu()
			}}
			className={`${styles.authLink}`}>
			{href === '/login' && <LoginSVG className={`${styles.authSVG}`} />}
			{href === '/' && <LogoutSVG className={`${styles.authSVG}`} />}
			{href === '/register' && <CreateAccountSVG className={`${styles.authSVG}`} />}
			{t(children)}
		</Link>
	)
}


export default AuthLink
