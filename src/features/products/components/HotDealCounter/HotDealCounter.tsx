'use client'
import { useEffect, useState } from 'react'
import styles from './HotDealCounter.module.scss'
import getTimeToMidnight from '@/src/utils/getTimeToMindnight'

interface TimeLeft {
	hours: string
	minutes: string
	seconds: string
}

const HotDealCounter = () => {
	const [time, setTime] = useState<TimeLeft | null>(null)

	useEffect(() => {
		const updateCounter = () => {
			setTime(getTimeToMidnight())
		}

		updateCounter()

		const interval = setInterval(updateCounter, 1000)

		return () => clearInterval(interval)
	}, [])

	if (!time) return null

	return (
		<div className={styles.hotDealCounterWrapper}>
			<div className={styles.hotDealCounterCard}>
				<div className={styles.hotDealCounterTime}>{time.hours}</div>
				<div className={styles.hotDealCounterTimeName}>Hrs</div>
			</div>
			<div className={styles.hotDealCounterCard}>
				<div className={styles.hotDealCounterTime}>{time.minutes}</div>
				<div className={styles.hotDealCounterTimeName}>Mins</div>
			</div>
			<div className={styles.hotDealCounterCard}>
				<div className={styles.hotDealCounterTime}>{time.seconds}</div>
				<div className={styles.hotDealCounterTimeName}>Secs</div>
			</div>
		</div>
	)
}

export default HotDealCounter
