import { useLocale } from 'next-intl'

const useFormatPrice = () => {
	const locale = useLocale()
	const countryFormat = locale === 'en' ? 'en-EN' : locale === 'de' ? 'de-DE' : 'pl-PL'
	const currency = locale === 'en' || locale === 'de' ? 'EUR' : 'PLN'

	const formatProductPrice = (discount: number | null, price: number) => {
		const discountedPrice = discount ? Number((price - (discount * price) / 100).toFixed(2)) : 0

		const formattedDiscountPrice = new Intl.NumberFormat(countryFormat, {
			style: 'currency',
			currency: currency,
		}).format(discountedPrice)

		const formattedProductPrice = new Intl.NumberFormat(countryFormat, {
			style: 'currency',
			currency: currency,
		}).format(price)

		return {
			formattedDiscountPrice,
			formattedProductPrice,
			discountedPrice,
		}
	}

	const formatTotalPrice = (price: number) => {
		const formattedTotalPrice = new Intl.NumberFormat(countryFormat, {
			style: 'currency',
			currency,
		}).format(price)

		return { formattedTotalPrice }
	}

	return {
		formatProductPrice,
		formatTotalPrice,
	}
}

export default useFormatPrice
