import type { MetadataRoute } from 'next'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://farma-rico-jumbo.pl'
const pages: MetadataRoute.Sitemap = [
	{
		url: BASE_URL,
		lastModified: new Date(),
		changeFrequency: 'daily',
		priority: 1,
	},
	{
		url: `${BASE_URL}/warzywa`,
		lastModified: new Date(),
		changeFrequency: 'daily',
		priority: 0.9,
	},
	{
		url: `${BASE_URL}/owoce`,
		lastModified: new Date(),
		changeFrequency: 'daily',
		priority: 0.9,
	},
	{
		url: `${BASE_URL}/domowe-wyroby`,
		lastModified: new Date(),
		changeFrequency: 'weekly',
		priority: 0.8,
	},
]

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
	

	const staticPages: MetadataRoute.Sitemap = pages.map(page => ({
		url: page.url,
		lastModified: page.lastModified,
		changeFrequency: page.changeFrequency,
		priority: page.priority,
	}))

	return staticPages
}
export default sitemap
