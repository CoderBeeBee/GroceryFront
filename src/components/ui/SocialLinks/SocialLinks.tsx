import { FacebookSVG, InstagramSVG, TwitterSVG, YouTubeSVG } from '@/src/assets/icons/SocialIcons'
import styles from './SocialLinks.module.scss'
import { ReactNode } from 'react'
import { useTranslations } from 'next-intl'

interface SocialLinksProps {
	className?: string
}

interface SocialProps {
	name: string
	url: string
	icon: ReactNode
	ariaLabel: string
}

const socialLinks: SocialProps[] = [
	{ name: 'YoutTube', url: 'https://www.youtube.com', icon: <YouTubeSVG />, ariaLabel: 'Youtube' },
	{ name: 'Instagram', url: 'https://www.instagram.com', icon: <InstagramSVG />, ariaLabel: 'Instagram' },
	{ name: 'X(Twitter)', url: 'https://www.x.com', icon: <TwitterSVG />, ariaLabel: 'X(Twitter)' },
	{ name: 'Facebook', url: 'https://www.facebook.com', icon: <FacebookSVG />, ariaLabel: 'Facebook' },
]

const SocialLinks = ({ className }: SocialLinksProps) => {
	const t = useTranslations("Social")
	return (
		<div className={styles.socialWrapper}>
			<p className={styles.followUs}>{t('Follow')}:</p>
			<div className={styles.linksWrapper}>
				{socialLinks.map(social => (
					<a
						key={social.name}
						href={social.url}
						className={`${styles.socialLink} ${className ? className : ''}`}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={social.ariaLabel}>
						{social.icon}
					</a>
				))}
			</div>
		</div>
	)
}

export default SocialLinks
