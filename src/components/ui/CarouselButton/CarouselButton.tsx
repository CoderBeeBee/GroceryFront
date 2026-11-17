import clsx from 'clsx'
import styles from './CarouselButton.module.scss'
import { ChevronNextSVG, ChevronPrevSVG } from '@/src/assets/icons/ArrowsIcons'

type CarouselButtonType = {
	type: 'prev' | 'next'
	nextSlide?: () => void
	prevSlide?: () => void
	className?: string
}

const CarouselButton = ({ type, className, nextSlide, prevSlide }: CarouselButtonType) => {
	return (
		<button
			type="button"
			aria-label="Prev Slide"
			className={clsx(styles.controlButton, className, {
				[styles.controlButtonPrev]: type === 'prev',
				[styles.controlButtonNext]: type === 'next',
			})}
			onClick={type === 'prev' ? prevSlide : nextSlide}>
			{type === 'prev' && <ChevronPrevSVG />}
			{type === 'next' && <ChevronNextSVG />}
		</button>
	)
}

export default CarouselButton
