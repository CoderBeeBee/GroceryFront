import { toggleMenu } from '@/src/store/useMobileStore'
import styles from './Hamburger.module.scss'
import { MenuSVG } from '@/src/assets/icons/GeneralIcons'
import NavButton from '@/src/components/ui/NavButton/NavButton'

const Hamburger = () => {
	return (
		// <button ref={refBtn} className={styles.btn} title="Menu" onClick={() => toggleMenu()}>
		// </button>
		<NavButton ariaLabel="Open Mobile Menu" fn={toggleMenu}>
			<MenuSVG className={styles.menuSVG} />
		</NavButton>
	)
}

export default Hamburger
