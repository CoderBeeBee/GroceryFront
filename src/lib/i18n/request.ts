// import { getRequestConfig } from 'next-intl/server'
// import { hasLocale } from 'next-intl'

// import { routing } from './routing'

// export default getRequestConfig(async ({ requestLocale }) => {
//   const requestedLocale = await requestLocale

//   const locale = hasLocale(
//     routing.locales,
//     requestedLocale,
//   )
//     ? requestedLocale
//     : routing.defaultLocale

//   return {
//     locale,
//     messages: (
//       await import(`../../messages/${locale}.json`)
//     ).default,
//   }
// })

import * as rootParams from 'next/root-params'
import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { routing } from './routing'

export default getRequestConfig(async () => {
	const lang = await rootParams.lang()

	if (!hasLocale(routing.locales, lang)) {
		notFound()
	}

	return {
		locale: lang,
		messages: (await import(`../../messages/${lang}.json`)).default,
	}
})
