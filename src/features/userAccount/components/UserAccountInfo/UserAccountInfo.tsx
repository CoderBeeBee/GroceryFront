import Image from "next/image"

type UserAccountInfoProps = {
    styles:Record<string,string>
}

const UserAccountInfo = ({styles}:UserAccountInfoProps) => {
	return (
		<div className={`${styles.userAccountInfo}`}>
			<Image
				loading="eager"
				src="/images/logo/Pszczoły.jpg"
				alt="User Avatar"
				width={50}
				height={50}
				className={`${styles.userAccountAvatar}`}
			/>
			<p className={`${styles.userAccountName}`}>CoderBee</p>
		</div>
	)
}

export default UserAccountInfo
