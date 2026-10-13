

import { dataMenu } from '../dataMenu'
import NavigationElement from '../../../../features/navigation/NavigationElement/NavigationElement'
import styles from './DesktopNav.module.scss'

const DesktopNav = () => {
	return (
		<nav className={styles.desktopNav}>
			<ul className={styles.navigationList}>
				{dataMenu.map((item, index: number) => {
					return <NavigationElement key={index} styles={styles} item={item} index={index} />
				})}
			</ul>
		</nav>
	)
}

export default DesktopNav
