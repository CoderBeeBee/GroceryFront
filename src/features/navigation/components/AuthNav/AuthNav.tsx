import ActionLink from '@/src/features/navigation/components/ActionLink/ActionLink'
import styles from './AuthNav.module.scss'
import useWindowSize from '@/src/hooks/useWindowSize'

const AuthNav = () => {
	const { isMobile } = useWindowSize()
	return (
		<div className={`${styles.authNavWrapper}`}>
			<ActionLink href="/login" translation="AuthLink" styles={styles}>
				Log in
			</ActionLink>
			{!isMobile && (
				<ActionLink href="/create-account" translation="AuthLink" styles={styles}>
					Create Account
				</ActionLink>
			)}
		</div>
	)
}

export default AuthNav
