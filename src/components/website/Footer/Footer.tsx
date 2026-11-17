import Logo from '../../ui/Logo/Logo'
import styles from './Footer.module.scss'
import SocialLinks from '../../ui/SocialLinks/SocialLinks'
import { dataMenu, shopMenu } from '@/src/features/navigation/data/dataMenu'
import { Link, NavigationHref } from '@/src/lib/i18n/navigation'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const Footer = () => {
	const t = useTranslations('Footer')
	const year = new Date().getFullYear()
	return (
		<div className={styles.footerContainer}>
			<div className={clsx('row', styles.footerWrapper)}>
				<div className={clsx(styles.footerBrand)}>
					<Logo />
					<p className={styles.footerInfo}>{t('Info')}</p>
					<SocialLinks />
				</div>

				<div className={clsx(styles.footerBox, styles.quickLinks)}>
					<div className={styles.footerBoxContent}>
						<h3 className={styles.footerTitle}>{t('Links')}</h3>
						{dataMenu &&
							dataMenu.map((item, index) => {
								return (
									<Link key={index} href={item.href} className={styles.footerLink}>
										{' '}
										{t(item.titleKey)}
									</Link>
								)
							})}
					</div>
				</div>
				<div className={clsx(styles.footerBox, styles.footerCategories)}>
					<div className={styles.footerBoxContent}>
						<h3 className={styles.footerTitle}>{t('Categories')}</h3>
						{shopMenu &&
							shopMenu.categories.map((item, index) => {
								let finalHref = ''
								if (item.href.includes('[category]')) {
									finalHref = item.href.replace('[category]', item.slug)
								}
								return (
									<Link key={index} href={finalHref as NavigationHref} className={styles.footerLink}>
										{t(item.titleKey)}
									</Link>
								)
							})}
					</div>
				</div>
				<div className={clsx(styles.footerBox, styles.customerCare)}>
					<div className={styles.footerBoxContent}>
						<h3 className={styles.footerTitle}>{t('Customer')}</h3>

						<Link href={'/'} className={styles.footerLink}>
							{t('My account')}
						</Link>
						<Link href={'/'} className={styles.footerLink}>
							{t('Track Order')}
						</Link>
						<Link href={'/'} className={styles.footerLink}>
							{t('Return & Refunds')}
						</Link>
						<Link href={'/'} className={styles.footerLink}>
							{t('Shipping Policy')}
						</Link>
						<Link href={'/'} className={styles.footerLink}>
							{t('FAQs')}
						</Link>
						<Link href={'/'} className={styles.footerLink}>
							{t('Terms & Conditions')}
						</Link>
					</div>
				</div>
				<div className={clsx(styles.footerBox, styles.contactUs)}>
					<div className={styles.footerBoxContent}>
						<h3 className={styles.footerTitle}>{t('Contact us')}</h3>
						<div>
							<span>+48 777 777 777</span>
						</div>
						<div>
							<span>coderBee@proton.me</span>
						</div>
						<div>
							<span>77 Coder Way, 77-777 Coder, Poland</span>
						</div>
						<div>
							<span>Mon - Fri : 8:00 - 16:00</span>
						</div>
					</div>
				</div>
				<div className={clsx(styles.footerBox, styles.weAccept)}>
					<div className={styles.footerBoxContent}>
						<h3 className={styles.footerTitle}>{t('We accept')}</h3>
						<div>
							<span>BLIK</span>
						</div>
						<div>
							<span>PAYPAL</span>
						</div>
					</div>
				</div>
			</div>
			<div> &copy; {year} CoderBee. All rights reserved.</div>
		</div>
	)
}

export default Footer
