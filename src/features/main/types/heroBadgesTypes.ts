import { BaseBadge } from '@/src/components/ui/Badges/types/Badges.types'

export type HeroEntityType = 'Organic' | 'Fresh' | 'Fast'

export type HeroBadgeType = BaseBadge & { type: HeroEntityType }
