import { useTranslations } from 'next-intl'

const Page = () => {
	const t = useTranslations('Contact')
	return (
		<div className={`flex justify-center items-center h-full w-full text-[40px] text-red-900 underline`}>
			{t('Contact')}
		</div>
	)
}

export default Page
