import { UserSVG } from '@/src/assets/icons/AuthIcons'
import UserAccountLinks from '@/src/features/userAccount/components/UserAccountLinks/UserAccountLinks'
import styles from './NavAccount.module.scss'
import { useAuthStore } from '@/src/store/useAuthStore'
import AuthNav from '../AuthNav/AuthNav'
import NavButton from '@/src/components/ui/NavButton/NavButton'

import clsx from 'clsx'
import { dataMenu } from '../../data/dataMenu'
import { useMenuStore } from '@/src/store/useMenuStore'

import Image from 'next/image'
import UserAccountInfo from '@/src/features/userAccount/components/UserAccountInfo/UserAccountInfo'

const NavAccount = () => {
	const { isLogged } = useAuthStore()

	const { activeIndex } = useMenuStore()
	const accountIndex = dataMenu.length * 20
	const isActive = accountIndex === activeIndex
	return (
		<div className={`${styles.navAccountWrapper}`}>
			<NavButton index={accountIndex} ariaLabel={!isLogged ? 'Open Authorization' : 'Profile'}>
				{!isLogged ? (
					<UserSVG className={styles.userSVG} />
				) : (
					<Image
						loading="eager"
						src="/images/logo/Pszczoły.jpg"
						alt="User Avatar"
						width={50}
						height={50}
						className={`${styles.navAvatar}`}
					/>
				)}
			</NavButton>
			<div className={clsx(styles.navAccountDropdown, { [styles.activeDropdown]: isActive })}>
				{!isLogged ? (
					<AuthNav />
				) : (
					<>
						<UserAccountInfo styles={styles} />
						<UserAccountLinks styles={styles} />
					</>
				)}
			</div>
		</div>
	)
}

export default NavAccount
