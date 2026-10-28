import { LogoutSVG } from '@/src/assets/icons/AuthIcons'
import useSignOut from '@/src/hooks/useSignOut'
import { closeMobileMenu } from '@/src/store/useMobileStore'
import { useTranslations } from 'next-intl'

interface SignOutButtonProps {
	styles: Record<string, string>
}

const SignOutButton = ({ styles }: SignOutButtonProps) => {
	const t = useTranslations('AuthLink')
	const { signOut } = useSignOut()
	return (
		<button
			type="button"
			title={t('Sign Out')}
			aria-label={t('Sign Out')}
			className={styles.signOutButton}
			onClick={() => {
				signOut()
				closeMobileMenu()
			}}>
			<LogoutSVG className={styles.logOutSVG} /> {t('Sign Out')}
		</button>
	)
}

export default SignOutButton
