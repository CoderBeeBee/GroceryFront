import { getAllProducts } from '@/src/api/getAllProducts'
import { routing } from '@/src/lib/i18n/routing'
import type { MetadataRoute } from 'next'

const pages: MetadataRoute.Sitemap = [
	{
		url: '',
		changeFrequency: 'daily',
		priority: 1,
	},
	{
		url: `/shop`,
		changeFrequency: 'daily',
		priority: 0.9,
	},
	{
		url: `/about`,
		changeFrequency: 'daily',
		priority: 0.9,
	},
	{
		url: `/login`,
		changeFrequency: 'weekly',
		priority: 0.8,
	},
	{
		url: `/register`,
		changeFrequency: 'weekly',
		priority: 0.8,
	},
]
// export const revalidate = 3600
const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
	const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://farma-rico-jumbo.pl'
	const { locales } = routing
	const products = await getAllProducts()

	const productUrls = locales.flatMap(locale =>
		products.map(product => ({
			url: `${BASE_URL}/${locale}/product/${product.slug}`,
			lastModified: new Date(),
		})),
	)
	const staticPages = locales.flatMap(locale =>
		pages.map(path => ({
			url: `${BASE_URL}/${locale}${path.url}`,
			lastModified: new Date(),
			changeFrequency: path.changeFrequency,
			priority: path.priority,
		})),
	)

	return [...staticPages, ...productUrls]
}
export default sitemap
