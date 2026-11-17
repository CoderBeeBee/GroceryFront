import Image from 'next/image'
import styles from './Logo.module.scss'
import Link from 'next/link'
import clsx from 'clsx'
import { SITE_NAME } from '@/src/config/site'

type LogoProps = {
	showName?: boolean
	className?: string
}

const Logo = ({ showName = true, className }: LogoProps) => {
	return (
		<div className={styles.logoContainer}>
			<Link href="/" aria-label="CoderBee" title="CoderBee" className={`${styles.logoLink}`}>
				<Image
					loading="eager"
					src="/images/logo/logoSVG.svg"
					alt="Logo"
					width={200}
					height={100}
					style={{
						width: '100%',
						height: '100%',
					}}
				/>
			</Link>
			{showName && <h2 className={clsx(styles.logoText, className)}>{SITE_NAME}</h2>}
		</div>
	)
}

export default Logo
