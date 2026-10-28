import { CheckSVG } from '@/src/assets/icons/DashboardIcons'
import styles from './CheckMark.module.scss'
import clsx from 'clsx'

interface CheckMarkProps {
	isChecked: boolean
	className?: string
}

const CheckMark = ({ isChecked, className }: CheckMarkProps) => {
	return (
		<>
			<div
				className={clsx(
					styles.checkmark,
					{
						[styles.scaleCheckmark]: isChecked,
					},
					className,
				)}>
				<CheckSVG className={`${styles.checkmarkSVG} `} />
			</div>
			<div className={`${styles.animCheckmark} ${isChecked ? styles.animCheckmarkActive : ''}`}></div>
		</>
	)
}

export default CheckMark
