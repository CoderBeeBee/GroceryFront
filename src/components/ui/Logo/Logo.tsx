import Image from 'next/image'
import styles from './Logo.module.scss'
import Link from 'next/link'

type LogoProps = {
  text?: string
}

const Logo = ({ text }: LogoProps) => {
	return (
		<div className={styles.logoContainer}>
			<Link href="/" aria-label="Organic Food Logo" title="Organic Food Logo" className={`${styles.logoLink}`}>
				<Image loading="eager" src="/images/logo/logoSVG.svg" alt="Logo" width={100} height={50} />
			</Link>
			{text && <h2 className={styles.logoText}>{text}</h2>}
		</div>
	)
}

export default Logo
