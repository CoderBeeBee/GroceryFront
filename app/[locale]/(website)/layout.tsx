import Navigation from '@/src/components/website/Navigation/Navigation'
import { globalMetaData } from '@/src/config/metadata/metadata'


export const metadata = globalMetaData

const layout = ({ children }: LayoutProps<'/[locale]'>) => {
	return (
		<>
			<Navigation />
			{children}

			<footer className={`column row`}>footer</footer>
		</>
	)
}

export default layout
