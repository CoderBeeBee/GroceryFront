function getTimeToMidnight() {
	const now = new Date()

	const midnight = new Date(now)
	midnight.setHours(24, 0, 0, 0)

	const diff = midnight.getTime() - now.getTime()

	const hours = Math.floor(diff / (1000 * 60 * 60))
	const minutes = Math.floor((diff / (1000 * 60)) % 60)
	const seconds = Math.floor((diff / 1000) % 60)

	return {
		hours: String(hours).padStart(2, '0'),
		minutes: String(minutes).padStart(2, '0'),
		seconds: String(seconds).padStart(2, '0'),
	}
}

export default getTimeToMidnight
