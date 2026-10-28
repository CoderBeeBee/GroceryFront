/* eslint-disable @next/next/no-img-element */
import { useAuthStore } from '@/src/store/useAuthStore'


type UserAccountInfoProps = {
	styles: Record<string, string>
}

const UserAccountInfo = ({ styles }: UserAccountInfoProps) => {
	const { image, firstName, lastName } = useAuthStore()
	return (
		<div className={`${styles.userAccountInfo}`}>
			<img
				loading="eager"
				src={image}
				alt="User Avatar"
				width={50}
				height={50}
				className={`${styles.userAccountAvatar}`}
			/>
			<p className={`${styles.userAccountName}`}>{`${firstName} ${lastName}`}</p>
		</div>
	)
}

export default UserAccountInfo
