'use client'
import CreateAccountForm from '@/src/features/auth/components/CreateAccountForm/CreateAccountForm'
import styles from './CreateAccount.module.scss'
import { Provider } from 'react-redux'
import { store } from '@/src/lib/store'

const CreateAccount = () => {
	return (
		<Provider store={store}>
			<div className={`${styles.createAccountWrapper}`}>
				<div className={styles.authBackground}></div>

				<CreateAccountForm />
			</div>
		</Provider>
	)
}

export default CreateAccount
