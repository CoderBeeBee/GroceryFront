import AuthLink from "@/src/features/navigation/AuthLink/AuthLink"
import styles from './AuthNav.module.scss'

const AuthNav = () => {
  return (
    <div className={`${styles.authNavWrapper}`}>
        <AuthLink href="/login">Log in</AuthLink>
    </div>
  )
}

export default AuthNav