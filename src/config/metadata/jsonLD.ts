import type { Product, WithContext } from 'schema-dts'
import { ProductType } from '@/src/api/getProduct'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://farma-rico-jumbo.pl'

const generateProductJsonLd = (product: ProductType): WithContext<Product> => {
	const url = `${SITE_URL}/produkty/${product.slug}`

	const jsonLd: WithContext<Product> = {
		'@context': 'https://schema.org',
		'@type': 'Product',

		name: product.name,

		description: product.description,

		image: [product.image],

		brand: {
			'@type': 'Brand',
			name: product.brand,
		},

		url,
		category: product.category,
		offers: {
			'@type': 'Offer',

			url,

			priceCurrency: product.currency,
			price: product.price,

			availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',

			itemCondition: 'https://schema.org/NewCondition',
		},

		...(product.rating !== undefined &&
			product.rating > 0 && {
				aggregateRating: {
					'@type': 'AggregateRating',
					ratingValue: product.rating,
					bestRating: 5,
					worstRating: 1,
					ratingCount: 1,
				},
			}),
	}

	return jsonLd
}

export { generateProductJsonLd }
