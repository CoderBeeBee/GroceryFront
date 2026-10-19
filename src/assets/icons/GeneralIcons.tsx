import type { Ref } from 'react'
import styles from './Icons.module.scss'
interface IconsProps {
	arrowRef?: Ref<SVGSVGElement | null>
	className?: string
}
// <!-- License: PD. Made by icons8: https://icons8.com/c/flat-color-icons -->
const MenuSVG = ({ className }: IconsProps) => (
	<svg
		width="800px"
		height="800px"
		viewBox="0 0 32 32"
		xmlns="http://www.w3.org/2000/svg"
		className={`${styles.icon} ${styles.menuSVG} ${className ? className : ''}`}>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M5 8h22M5 16h22M5 24h22"
		/>
	</svg>
)
const SearchSVG = ({ className }: { className: string }) => {
	return (
		<svg
			className={`${styles.icon}${className ? className : ''}`}
			width="16"
			height="16"
			viewBox="0 0 17.982 17.983"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fill="currentColor"
				d="M12.622 13.611l-.209.163A7.607 7.607 0 017.7 15.399C3.454 15.399 0 11.945 0 7.7 0 3.454 3.454 0 7.7 0c4.245 0 7.699 3.454 7.699 7.7a7.613 7.613 0 01-1.626 4.714l-.163.209 4.372 4.371-.989.989-4.371-4.372zM7.7 1.399a6.307 6.307 0 00-6.3 6.3A6.307 6.307 0 007.7 14c3.473 0 6.3-2.827 6.3-6.3a6.308 6.308 0 00-6.3-6.301z"></path>
		</svg>
	)
}

// <!-- License: MIT. Made by Gitlab: https://gitlab.com/gitlab-org/gitlab-svgs?ref=iconduck.com -->
const CloseSVG = ({ className }: IconsProps) => {
	return (
		<svg
			width="800px"
			height="800px"
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			className={`${styles.icon} ${className ? className : ''}`}>
			<path d="M11.2929,3.29289 C11.6834,2.90237 12.3166,2.90237 12.7071,3.29289 C13.0976,3.68342 13.0976,4.31658 12.7071,4.70711 L9.41421,8 L12.7071,11.2929 C13.0976,11.6834 13.0976,12.3166 12.7071,12.7071 C12.3166,13.0976 11.6834,13.0976 11.2929,12.7071 L8,9.41421 L4.70711,12.7071 C4.31658,13.0976 3.68342,13.0976 3.29289,12.7071 C2.90237,12.3166 2.90237,11.6834 3.29289,11.2929 L6.58579,8 L3.29289,4.70711 C2.90237,4.31658 2.90237,3.68342 3.29289,3.29289 C3.68342,2.90237 4.31658,2.90237 4.70711,3.29289 L8,6.58579 L11.2929,3.29289 Z" />
		</svg>
	)
}
const CloseSVG2 = ({ className }: IconsProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="red"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`${styles.icon} ${className ? className : ''}`}>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M18 6l-12 12" />
			<path d="M6 6l12 12" />
		</svg>
	)
}
// <!-- License: Apache. Made by Iconscout: https://github.com/Iconscout/unicons -->
const SettingsSVG = ({ className }: IconsProps) => (
	<svg
		fill="currentColor"
		width="800px"
		height="800px"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		className={`${styles.icon} ${className ? className : ''}`}>
		<path d="M19.9,12.66a1,1,0,0,1,0-1.32L21.18,9.9a1,1,0,0,0,.12-1.17l-2-3.46a1,1,0,0,0-1.07-.48l-1.88.38a1,1,0,0,1-1.15-.66l-.61-1.83A1,1,0,0,0,13.64,2h-4a1,1,0,0,0-1,.68L8.08,4.51a1,1,0,0,1-1.15.66L5,4.79A1,1,0,0,0,4,5.27L2,8.73A1,1,0,0,0,2.1,9.9l1.27,1.44a1,1,0,0,1,0,1.32L2.1,14.1A1,1,0,0,0,2,15.27l2,3.46a1,1,0,0,0,1.07.48l1.88-.38a1,1,0,0,1,1.15.66l.61,1.83a1,1,0,0,0,1,.68h4a1,1,0,0,0,.95-.68l.61-1.83a1,1,0,0,1,1.15-.66l1.88.38a1,1,0,0,0,1.07-.48l2-3.46a1,1,0,0,0-.12-1.17ZM18.41,14l.8.9-1.28,2.22-1.18-.24a3,3,0,0,0-3.45,2L12.92,20H10.36L10,18.86a3,3,0,0,0-3.45-2l-1.18.24L4.07,14.89l.8-.9a3,3,0,0,0,0-4l-.8-.9L5.35,6.89l1.18.24a3,3,0,0,0,3.45-2L10.36,4h2.56l.38,1.14a3,3,0,0,0,3.45,2l1.18-.24,1.28,2.22-.8.9A3,3,0,0,0,18.41,14ZM11.64,8a4,4,0,1,0,4,4A4,4,0,0,0,11.64,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,11.64,14Z" />
	</svg>
)
export { MenuSVG, SearchSVG, CloseSVG, CloseSVG2, SettingsSVG }
