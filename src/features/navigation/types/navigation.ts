import { NavigationHref } from '@/src/lib/i18n/navigation'

export type MenuTypes = {
	titleKey: string
	href: NavigationHref | ''
	children?: MenuTypes[]
}

export type searchDataTypes = {
	_id:string
	name: string
	images: string
	slug: string
	inStock:boolean
}
