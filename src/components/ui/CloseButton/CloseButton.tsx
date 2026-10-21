import { CloseSVG } from "@/src/assets/icons/GeneralIcons"
import styles from './CloseButton.module.scss'

interface HandleCloseProps {
	
	handleClose: () => void
	ariaLabel?: string
}

const CloseButton = ({ handleClose, ariaLabel }: HandleCloseProps) => {
	return (
		<button type="button" aria-label={ariaLabel} className={styles.close} onClick={() => handleClose()}>
			<CloseSVG className={styles.closeSVG} />
		</button>
	)
}

export default CloseButton
