
import { DeliverySVG, Farm2SVG, Oragnic1SVG } from '@/src/assets/icons/CardsIcons'
import { BadgeIcons, BaseBadge } from '@/src/components/ui/Badges/types/Badges.types'
import { HeroEntityType } from '../types/heroBadgesTypes'


export const heroBadges = [
	{
		type: 'Organic',
		title: 'Organic',
		subtitle: 'Pure',
	},
	{
		type: 'Fresh',
		title: 'Farm',
		subtitle: 'Direct',
	},
	{
		type: 'Fast',
		title: 'Fast',
		subtitle: 'OneTime',
	},
] satisfies BaseBadge[]

export const heroBadgesIcons: BadgeIcons< HeroEntityType> = {
	Organic: styles => <Oragnic1SVG className={styles.icons} />,
	Fresh: styles => <Farm2SVG className={styles.icons} />,
	Fast: styles => <DeliverySVG className={styles.icons} />,
}
