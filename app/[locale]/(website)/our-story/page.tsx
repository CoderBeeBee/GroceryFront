import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
	title: 'About',
	description: 'About',
}

const Page = () => {
	const t = useTranslations('Our Story')
	return (
		<div className={`flex justify-center items-center w-full h-full text-red-900 text-[40px] font-bold underline`}>
			{t('Our Story')}
		</div>
	)
}

export default Page
