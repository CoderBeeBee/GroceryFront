import { useTranslations } from 'next-intl'

const Page = () => {
	const t = useTranslations('Shop')
	return (
		<div className={`flex justify-center items-center w-[100dvw] h-[100dvh] text-red-900 text-[40px] underline`}>
			{t('Shop')}
		</div>
	)
}

export default Page
