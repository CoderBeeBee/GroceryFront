import { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => {
	const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://farma-rico-jumbo.pl'
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: [
					'/admin/',
					'/login/',
					'/api/*',
					'/bucket/*',
					'/dashboard/',
					'/checkout/*',
					'/cart/*',
					'/account/*',
					'/orders/*',
				],
			},
		],
		sitemap: `${BASE_URL}/sitemap.xml`,
	}
}

export default robots
