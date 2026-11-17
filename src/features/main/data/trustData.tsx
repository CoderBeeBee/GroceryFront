import { Oragnic1SVG } from '@/src/assets/icons/CardsIcons'
import { UsersSVG } from '@/src/assets/icons/DashboardIcons'
import { PackingSVG, QualitySVG, ShopBagSVG, SmileSVG } from '@/src/assets/icons/ShopIcons'
import { ReactNode } from 'react'

type trustDataType = {
	type: string
	title: string
	subtitle: string
	info: string
}

export const trustData = [
	{
		type: 'Customers',
		title: '10K+',
		subtitle: 'Customers',
		info: 'Happy',
	},
	{
		type: 'Orders',
		title: '50K+',
		subtitle: 'Orders Delivered',
		info: 'Across',
	},
	{
		type: 'Satisfaction',
		title: '99%',
		subtitle: 'Satisfaction Rate',
		info: 'Because',
	},
] satisfies trustDataType[]

export const trustIcon: Record<string, (styles: Record<string, string>) => ReactNode> = {
	Customers: styles => <UsersSVG className={styles.icon} />,
	Orders: styles => <ShopBagSVG className={styles.icon} />,
	Satisfaction: styles => <SmileSVG className={styles.icon} />,
}

export type certificatesDataType = Pick<trustDataType, 'type' | 'title'>

export const certificatesData = [
	{
		type: 'Organic',
		title: 'Organic Certified',
	},
	{
		type: 'Eco',
		title: 'Eco-friendly Packing',
	},
	{
		type: 'Quality',
		title: 'Quality Checked',
	},
] satisfies certificatesDataType[]

export const certificatesIcon: Record<string, (styles: Record<string, string>) => ReactNode> = {
	Organic: styles => <Oragnic1SVG className={styles.certificateIcon} />,
	Eco: styles => <PackingSVG className={styles.certificateIcon} />,
	Quality: styles => <QualitySVG className={styles.certificateIcon} />,
}
