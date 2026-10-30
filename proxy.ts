// import createMiddleware from 'next-intl/middleware'
// import { routing } from './src/lib/i18n/routing'

// export default createMiddleware(routing)

// export const config = {
// 	matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
// }
// middleware.ts
import createMiddleware from 'next-intl/middleware'
import { routing } from './src/lib/i18n/routing'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'
import { guardPathnames } from './src/lib/i18n/pathnames/guardPathnames'

type GuardLocale = keyof (typeof guardPathnames)['/sign-in']
const intlMiddleware = createMiddleware(routing)

function getLocale(pathname: string) {
	return routing.locales.find(l => pathname.startsWith(`/${l}`)) || routing.defaultLocale
}

function matchesPathname(pathname: string, routeKey: keyof typeof guardPathnames, locale: GuardLocale) {
	const translations = guardPathnames[routeKey][locale]

	const cleanPath = locale === 'en' ? pathname : pathname.replace(/^\/[a-z]{2}/, '') || '/'

	const decodedPath = decodeURIComponent(cleanPath)

	return decodedPath === translations
}

export default async function proxy(request: NextRequest) {
	const token = request.cookies.get('jwt')?.value
	const { pathname } = request.nextUrl
	const locale = getLocale(pathname)
	const secretKey = process.env.JWT_SECRET

	const isProtectedRoute = pathname.includes('/dashboard')
	const isAuthPage =
		matchesPathname(pathname, '/sign-in', locale) || matchesPathname(pathname, '/create-account', locale)

	let userRole: string | null = null

	if (token) {
		try {
			if (!secretKey) {
				console.log('👉 [MIDDLEWARE ERR] process.env.JWT_SECRET is UNDEFINED! Check env variables in Netlify.')
				return intlMiddleware(request)
			}

			const encodedSecret = new TextEncoder().encode(secretKey)

			const { payload } = await jwtVerify(token, encodedSecret)

			userRole = typeof payload.role === 'string' ? payload.role : null
		} catch (error) {
			console.log('Token verification error in Middleware', error)
		}
	} else {
		console.log('Token verification error in Middleware:', token)
	}

	const localizedSignInPath = guardPathnames['/sign-in'][locale as keyof (typeof guardPathnames)['/sign-in']]

	if (!userRole && isProtectedRoute) {
		return NextResponse.redirect(new URL(`/${locale}${localizedSignInPath}`, request.url))
	}

	if (userRole && userRole === 'customer' && isProtectedRoute) {
		return NextResponse.redirect(new URL(`/${locale}`, request.url))
	}

	if (userRole && isAuthPage) {
		return NextResponse.redirect(new URL(`/${locale}`, request.url))
	}

	return intlMiddleware(request)
}

export const config = {
	matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
}
