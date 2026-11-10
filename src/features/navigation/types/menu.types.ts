import { NavigationHref } from '@/src/lib/i18n/navigation'
import { routing } from '@/src/lib/i18n/routing'

export type AppPathnames = keyof typeof routing.pathnames

export type CategoriesTypes = {
	titleKey: string
	slug: string
	href?: AppPathnames
	categories?: CategoriesTypes[]
}

export type FooterTypes = {
	titleKey: string
	href:  AppPathnames
	slug?: string
}

export type FeaturedType = {
	label: string
	titleKey: string
	href:  AppPathnames
	description: string
	img: string
}

export type MenuTypes = {
	titleKey: string
	description: string
	href: NavigationHref
	categories?: CategoriesTypes[]
	featured?: FeaturedType
	footer?: FooterTypes
}

export type searchDataTypes = {
	_id: string
	name: string
	images: string
	slug: string
	inStock: boolean
}
