import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../global.scss'
import { globalMetaData } from '@/src/config/metadata/metadata'
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

export const metadata: Metadata = globalMetaData

type Props = {
	children: ReactNode
	params: Promise<{ lang: string }>
}
const RootLayout = async ({ children, params }: Props) => {
	const { lang } = await params

	if (!hasLocale(routing.locales, lang)) {
		notFound()
	}

	const messages = await getMessages()
	return (
		<html lang={lang} className={`${inter.variable}  h-full antialiased`}>
			<body>
				<NextIntlClientProvider locale={lang} messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
export default RootLayout
