import { defineRouting } from 'next-intl/routing'
import { menuPathnames } from './pathnames/menuPathnames'
import { userAccountPathnames } from './pathnames/userAccountPathnames'

export const routing = defineRouting({
	locales: ['en', 'pl', 'de'],
	defaultLocale: 'en',
	localePrefix: 'as-needed',
	pathnames: { ...menuPathnames, ...userAccountPathnames },
})
