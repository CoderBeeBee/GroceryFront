import Navigation from '@/src/components/website/Navigation/Navigation'
// import '../../global.scss'

const layout = ({ children }: LayoutProps<'/[lang]'>) => {
	return (
		<>
			<Navigation />
			{children}

			<footer className={`column row`}>footer</footer>
		</>
	)
}

export default layout
