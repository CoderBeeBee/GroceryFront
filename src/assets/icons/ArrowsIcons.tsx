import type { Ref } from 'react'
import styles from './Icons.module.scss'
interface IconsProps {
	arrowRef?: Ref<SVGSVGElement | null>
	className?: string
}
export const ChevronDownSVG = ({ arrowRef, className }: IconsProps) => {
	return (
		<svg
			ref={arrowRef}
			className={`${styles.icon} ${className ? className : ''}`}
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fill="currentColor"
				d="M10 14a.997.997 0 01-.707-.293l-5-5a.999.999 0 111.414-1.414L10 11.586l4.293-4.293a.999.999 0 111.414 1.414l-5 5A.997.997 0 0110 14z"
			/>
		</svg>
	)
}

export const ArrowPrev = ({ className }: IconsProps) => {
	return (
		<svg
			viewBox="0 0 15 15"
			xmlns="http://www.w3.org/2000/svg"
			width="15"
			height="15"
			fill="currentColor"
			className={`${styles.icon} ${className ? className : ''}`}>
			<path d="M1.5 7.5l4-4m-4 4l4 4m-4-4H14" stroke="currentColor"></path>
		</svg>
	)
}
export const ArrowNext = ({ className }: IconsProps) => {
	return (
		<svg
			viewBox="0 0 15 15"
			xmlns="http://www.w3.org/2000/svg"
			width="15"
			height="15"
			fill="currentColor"
			className={`${styles.icon} ${className ? className : ''}`}>
			<path d="M13.5 7.5l-4-4m4 4l-4 4m4-4H1" stroke="currentColor"></path>
		</svg>
	)
}
export const ArrowUpSVG = ({ className }: IconsProps) => (
	<svg
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		className={`${styles.icon} ${className ? className : ''}`}>
		<path d="M11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967L18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303C18.2374 10.8232 17.7626 10.8232 17.4697 10.5303L12.75 5.81066L12.75 20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20L11.25 5.81066L6.53033 10.5303C6.23744 10.8232 5.76256 10.8232 5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967L11.4697 3.46967Z"></path>
	</svg>
)

export const ChevronPrevSVG = ({ className }: IconsProps) => (
	<svg
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		className={`${styles.icon} ${className ? className : ''}`}>
		<path d="M16.7071 3.29289C17.0976 3.68342 17.0976 4.31658 16.7071 4.70711L9.41421 12L16.7071 19.2929C17.0976 19.6834 17.0976 20.3166 16.7071 20.7071C16.3166 21.0976 15.6834 21.0976 15.2929 20.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L15.2929 3.29289C15.6834 2.90237 16.3166 2.90237 16.7071 3.29289Z"></path>
	</svg>
)

export const ChevronNextSVG = ({ className }: IconsProps) => (
	<svg
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		className={`${styles.icon} ${className ? className : ''}`}>
		<path d="M7.29289 3.29289C7.68342 2.90237 8.31658 2.90237 8.70711 3.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L8.70711 20.7071C8.31658 21.0976 7.68342 21.0976 7.29289 20.7071C6.90237 20.3166 6.90237 19.6834 7.29289 19.2929L14.5858 12L7.29289 4.70711C6.90237 4.31658 6.90237 3.68342 7.29289 3.29289Z"></path>
	</svg>
)
