import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
	locales: ['en', 'pl', 'de'],
	defaultLocale: 'en',
	localePrefix: 'as-needed',
	pathnames: {
		
		'/about': {
			en:'/about',
			pl: '/o-nas',
			de: '/über-uns',
		},
	},
})
