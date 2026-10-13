import Image from 'next/image'
import styles from './Profile.module.scss'
import profileLinks from './profileLinksData'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import useWindowSize from '@/src/hooks/useWindowSize'
import { toggleMenu } from '@/src/store/useMobileStore'

const Profile = () => {
	const { isMobile } = useWindowSize()
	const t = useTranslations('UserAccount')
	return (
		<div className={`${styles.profileWrapper}`}>
			<div className={`${styles.profileInfo}`}>
				<Image
					loading="eager"
					src="/images/logo/logoSVG.svg"
					alt="User Avatar"
					width={50}
					height={50}
					className={`${styles.profileAvatar}`}
				/>
				<p className={`${styles.profileUserName}`}>Rico Jumbo</p>
			</div>
			<div className={`${styles.accountWrapper}`}>
				<p className={`${styles.accountTitle}`}>{t('User Account')}</p>
				<div className={`${styles.accountLinks}`}>
					{profileLinks.map((link, index: number) => {
						return (
							<Link
								key={link.titleKey + index}
								href={link.href}
								className={`${styles.accountLink}`}
								onClick={() => {
									if (isMobile) toggleMenu()
								}}>
								{t(link.titleKey)}
							</Link>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Profile
