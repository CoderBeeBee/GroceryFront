import { useTranslations } from "next-intl"


const Page = () => {
  const t = useTranslations("About")
  return (
    <div className={`flex justify-center items-center w-full h-full text-red-900 text-[40px] font-bold underline`}>{t("About")}</div>
  )
}

export default Page