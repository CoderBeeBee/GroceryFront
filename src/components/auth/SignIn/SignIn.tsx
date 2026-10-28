'use client'
import SignInForm from '@/src/features/auth/components/SignInForm/SignInForm'
import styles from './SignIn.module.scss'
import { Provider } from 'react-redux'
import { store } from '@/src/lib/store'
const SignIn = () => {
	
	return (
		<Provider store={store}>
			<div className={`${styles.signInWrapper}`}>
				<div className={styles.authBackground}></div>
				<SignInForm />
			</div>
		</Provider>
	)
}

export default SignIn
