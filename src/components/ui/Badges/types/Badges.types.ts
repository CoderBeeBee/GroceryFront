import { JSX } from 'react'

export type BaseBadge = {
	type: string
	title: string
	subtitle: string
}

export type BadgeIcons<T extends string> = Record<T, (styles: Record<string, string>) => JSX.Element>

export type BadgesProps<T extends BaseBadge> = {
	data: T[]
	badgesIcons: BadgeIcons<string>
}
