import { ReactNode } from 'react'
import styles from './Navbutton.module.scss'
import { toggleNavActions, useMenuStore } from '@/src/store/useMenuStore'
import clsx from 'clsx'

import useWindowSize from '@/src/hooks/useWindowSize'

type NavButtonTypes = {
	children: ReactNode
	ariaLabel: string
	fn?: () => void
	index?: number
}

const NavButton = ({ children, ariaLabel, index, fn }: NavButtonTypes) => {
	const { activeIndex } = useMenuStore()
	const { isMobile } = useWindowSize()
	const isActive = activeIndex === index
	return (
		<button
			tabIndex={0}
			type="button"
			aria-label={ariaLabel}
			className={clsx(styles.accountButton, { [styles.activeButton]: isActive })}
			onClick={() => {
				if (isMobile) fn?.()

				if (index) {
					toggleNavActions(index)
				} else {
					toggleNavActions(null)
				}
			}}>
			{children}
		</button>
	)
}

export default NavButton
