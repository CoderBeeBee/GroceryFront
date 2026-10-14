import { Metadata } from 'next'
import styles from './website.module.scss'
import { globalMetaData } from '@/src/config/metadata/metadata'
export const metadata: Metadata = globalMetaData
const page = () => {
	return (
		<main className={`${styles.main}`}>
			<div>page</div>
		</main>
	)
}

export default page
