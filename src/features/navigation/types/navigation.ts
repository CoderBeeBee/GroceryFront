import { NavigationHref } from '@/src/lib/i18n/navigation'

export type MenuTypes = {
	titleKey: string
	href: NavigationHref | ''
	children?: MenuTypes[]
}
