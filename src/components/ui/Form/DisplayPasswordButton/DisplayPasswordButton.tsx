import { ViewsSVG } from "@/src/assets/icons/DashboardIcons"
import styles from './DisplayPasswordButton.module.scss'
import clsx from "clsx"
interface DispalyPasswordProps {
    visible?:boolean
    
    fn:()=>void
    disabled?:boolean
    isSubmitting:boolean
}


const DisplayPasswordButton = ({visible=false, disabled=false,isSubmitting,fn}:DispalyPasswordProps) => {


  return (
    <button
    className={clsx(styles.displayPasswordButton,{[styles.displayVisibility]:visible})}
    type="button"
    disabled={disabled}
    aria-busy={isSubmitting}
    aria-label={visible ? 'Hide password': 'Show password'}
    onClick={fn}
    >
        <ViewsSVG className={styles.viewsSVG}/>
    </button>
  )
}

export default DisplayPasswordButton