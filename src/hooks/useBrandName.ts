const useBrandName = () => {
	const brandName = process.env.NEXT_PUBLIC_BRAND_NAME || 'OrganicFood'
	return {
		brandName,
	}
}

export default useBrandName
