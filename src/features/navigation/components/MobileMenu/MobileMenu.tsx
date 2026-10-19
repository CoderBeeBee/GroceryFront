import NavigationElement from '@/src/features/navigation/components/NavigationElement/NavigationElement'
import { dataMenu } from '../../data/dataMenu'
import styles from './MobileMenu.module.scss'

const MobileMenu = () => {
	return (
		<ul className={styles.mobileMenuWrapper}>
			<p className={`${styles.menuTitle}`}>Menu</p>
			{dataMenu.map((item, index: number) => {
				return <NavigationElement key={index} styles={styles} item={item} index={index} />
			})}
		</ul>
	)
}

export default MobileMenu
