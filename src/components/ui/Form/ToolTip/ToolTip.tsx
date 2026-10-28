import { displayToolTip, hideToolTip, useToolTipStore } from '@/src/store/useToolTipStore'
import styles from './ToolTip.module.scss'
import { TipSVG } from '@/src/assets/icons/DashboardIcons'
import clsx from 'clsx'
interface ToolTipProps {
	id: string
	tipMessage?: string
	isSubmitting?: boolean
}
const ToolTip = ({ id, isSubmitting, tipMessage }: ToolTipProps) => {
	const { toolTipId } = useToolTipStore()

	const isActive = id === toolTipId
	return (
		<div className={`${styles.toolTipWrapper}`}>
			<button
				type="button"
				aria-label="Tool tip"
				className={`${styles.toolTipButton}`}
				onMouseEnter={() => displayToolTip(id)}
				onMouseLeave={() => hideToolTip()}
				disabled={isSubmitting}>
				<TipSVG className={`${styles.tipSVG}`} />
			</button>
			<div
				onMouseEnter={() => displayToolTip(id)}
				onMouseLeave={() => hideToolTip()}
				className={clsx(styles.tooltipInfo, { [styles.displayToolTip]: isActive })}>
				<p className={`${styles.tooltipText}`}>{tipMessage}</p>
			</div>
		</div>
	)
}

export default ToolTip
