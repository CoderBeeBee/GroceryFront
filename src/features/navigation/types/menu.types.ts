import { NavigationHref } from '@/src/lib/i18n/navigation'

export type CategoriesTypes = {
	titleKey:string,
	slug:string,
	categories?:CategoriesTypes[]
}

export type MenuTypes = {
	titleKey: string
	href: NavigationHref
	categories?: CategoriesTypes[]
}

export type searchDataTypes = {
	_id:string
	name: string
	images: string
	slug: string
	inStock:boolean
}
