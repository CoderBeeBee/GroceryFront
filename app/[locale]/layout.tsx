import '../global.scss'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { routing } from '@/src/lib/i18n/routing'
import { notFound } from 'next/navigation'
import { getMessages } from 'next-intl/server'


const inter = Inter({
	variable: '--font-inter',
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
})

export function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }))
}


type Props = {
	children: ReactNode
	params: Promise<{ locale: string }>
}
const RootLayout = async ({ children, params }: Props) => {
	const { locale } = await params

	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	const messages = await getMessages()
	return (
		<html lang={locale} className={`${inter.variable}  antialiased`}>
			<body>
				<NextIntlClientProvider locale={locale} messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
export default RootLayout
