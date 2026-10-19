import UserAccountInfo from '../../../userAccount/components/UserAccountInfo/UserAccountInfo'
import styles from './MobileNavAccount.module.scss'
import UserAccountLinks from '@/src/features/userAccount/components/UserAccountLinks/UserAccountLinks'

const MobileNavAccount = () => {
	return (
		<div className={`${styles.mobileNavAccountWrapper}`}>
			<UserAccountInfo styles={styles} />
			<UserAccountLinks styles={styles} />
		</div>
	)
}

export default MobileNavAccount
