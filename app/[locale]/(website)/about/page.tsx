import { useTranslations } from "next-intl"


const Page = () => {
  const t = useTranslations("About")
  return (
    <div style={{ padding: '20px', color: 'Red', fontSize: '44px' }}>{t("About")}</div>
  )
}

export default Page