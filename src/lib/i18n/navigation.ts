import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'
import { ComponentProps } from 'react'

export const { Link, usePathname, useRouter, redirect } = createNavigation(routing)

export type NavigationHref = ComponentProps<typeof Link>['href']
