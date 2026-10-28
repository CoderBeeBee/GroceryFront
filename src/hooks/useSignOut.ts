import { useSignOutMutation } from '../api/userApi'
import { usePathname, useRouter } from '../lib/i18n/navigation'
import { setSignOut } from '../store/useAuthStore'
import { toggleNavActions } from '../store/useMenuStore'
import { closeMobileMenu } from '../store/useMobileStore'

const useSignOut = () => {
	const [signOutAction] = useSignOutMutation()
	const pathname = usePathname()
	const router = useRouter()

	const signOut = async () => {
		try {
			setSignOut()
			
			await signOutAction({})
			
			toggleNavActions(null)
			closeMobileMenu()

			if (pathname !== '/') {
				router.replace('/')
			}

			window.scrollTo({ top: 0, behavior: 'instant' })
		} catch (error) {
			console.log('Error during sign out:', error)
		}
	}

	return { signOut }
}

export default useSignOut
