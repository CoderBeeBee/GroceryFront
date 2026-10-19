import { getProduct } from '@/src/api/getProduct'
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://farma-rico-jumbo.pl'
const globalMetaData : Metadata = {
	metadataBase: new URL(SITE_URL),

	title: {
		default: 'CoderBee',
		template: '%s | Healthy Food',
	},

	description:
		'Sklep internetowy ze świeżymi warzywami, owocami oraz domowymi przetworami. Naturalne produkty i smak, który warto mieć na swoim stole.',

	authors: [{ name: 'CoderBee' }],
	creator: 'CoderBee',
	publisher: 'CoderBee',

	alternates: {
		canonical: '/',
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},

	openGraph: {
		type: 'website',
		locale: 'pl_PL',
		url: SITE_URL,
		siteName: 'CoderBee',
		title: 'Świeże warzywa, owoce i domowe przetwory',
		description: 'Świeże warzywa, owoce i domowe przetwory. Zamów naturalne produkty prosto do swojego domu.',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Świeże warzywa, owoce i domowe przetwory',
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		title: 'CoderBee',
		description: 'Sklep internetowy ze świeżymi warzywami, owocami i domowymi przetworami.',
		images: ['/og-image.jpg'],
	},

	icons: {
		icon: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
}

const generateMetadata = async (slug: string) : Promise<Metadata> => {
	const product = await getProduct(slug)

	if (!product) {
		return {
			title: 'Produkt nie znaleziony | CoderBee',
			robots: {
				index: false,
				follow: false,
				
			},
		}
	}

	const title = `${product.name} - ${product.brand} | CoderBee`
	const des = product.description.length > 155 ? `${product.description.slice(0, 152)}...` : product.description
	const description = `${des}, Price: ${product.price} ${product.currency}, ${product.inStock ? 'In stock' : 'Out of stock'}. Rating: ${product.rating}/5 stars. Buy now!`

	return {
		title,
		description,

		alternates: {
			canonical: `${SITE_URL}/products/${product.slug}`,
		},

		openGraph: {
			type: 'website',
			locale: 'pl_PL',
			siteName: 'CoderBee',
			title,
			description,
			url: `${SITE_URL}/products/${product.slug}`,

			images: [
				{
					url: product.image,
					width: 1200,
					height: 630,
					alt: product.name,
				},
			],
		},

		twitter: {
			card: 'summary_large_image',
			title,
			description,
			creator: '@CoderBee',
			images: [product.image],
		},

		robots: {
			index: true,
			follow: true,
			nocache: false,
			googleBot: {
				index: true,
				follow: true,
				'max-image-preview': 'large',
				'max-snippet': -1,
				'max-video-preview': -1,
			},
		},
	}
}

export { globalMetaData, generateMetadata }
