import { toggleMenu } from '@/src/store/useMobileStore'
import { useEffect, useRef } from 'react'
import styles from './Hamburger.module.scss'
import useWindowSize from '@/src/hooks/useWindowSize'
import { MenuSVG } from '@/src/assets/icons/Icons'
const Hamburger = () => {
	const refBtn = useRef<HTMLButtonElement>(null)
	const { width } = useWindowSize()

	useEffect(() => {
		if (width <= 900) {
			refBtn.current?.classList.add(styles.toggle)
		} else {
			refBtn.current?.classList.remove(styles.toggle)
		}
	}, [width])

	return (
		<button ref={refBtn} className={styles.btn} title="Menu" onClick={() => toggleMenu()}>
			<MenuSVG />
		</button>
	)
}

export default Hamburger
