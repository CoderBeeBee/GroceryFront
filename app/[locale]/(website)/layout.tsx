import Navigation from '@/src/components/website/Navigation/Navigation'
// import '../../global.scss'

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
