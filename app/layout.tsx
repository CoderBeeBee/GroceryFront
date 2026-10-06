import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './global.scss'
import { globalMetaData } from '@/src/config/metadata/metadata'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = globalMetaData

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	)
}
