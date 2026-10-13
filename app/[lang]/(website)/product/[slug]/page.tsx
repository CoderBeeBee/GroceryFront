import { getProduct } from '@/src/api/getProduct'
import { generateProductJsonLd } from '@/src/config/metadata/jsonLD'
import { generateMetadata as buildMetadata } from '@/src/config/metadata/metadata'

import { Metadata } from 'next'
import Image from 'next/image'

type Params = Record<string, string | string[] | undefined>
type PageProps = { params: Promise<Params> }

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
	const resolvedParams = await params

	const slug = resolvedParams.slug
	return buildMetadata(slug as string)
}

const Page = async ({ params }: PageProps) => {
	const slug = await params.then(par => par.slug as keyof typeof par)

	const product = await getProduct(slug)

	if (!product) {
		return <div>Product not found: {slug}</div>
	}
	const productJsonLd = generateProductJsonLd(product)
	return (
		<div>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
			<div>
				<h1>{product.name}</h1>
				<p>{product.description}</p>
				<p>Brand: {product.brand}</p>
				<p>
					Price: {product.price} {product.currency}
				</p>
				<p>{product.inStock ? 'In stock' : 'Out of stock'}</p>
				<p>Rating: {product.rating}/5 stars</p>
				<Image src={product.image} alt={product.name} width={400} height={400} />
			</div>
		</div>
	)
}

export default Page
