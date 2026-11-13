import { dealsDataType } from '@/src/features/main/data/dealsData'

import Image from 'next/image'
import Button from '../Button/Button'
import HotDealCounter from '@/src/features/products/components/HotDealCounter/HotDealCounter'

interface HotDealsProps {
	data: dealsDataType
	styles: Record<string, string>
}

const HotDeals = ({ data, styles }: HotDealsProps) => {
	return (
		<div className={styles.hotDealWrapper}>
			<Image src={data.src} alt="Deal" width={800} height={800} className={styles.hotDealImage}></Image>
			<div className={styles.hotDealContent}>
				<h3 className={styles.hotDealName}>{data.hotDealName}</h3>
				{data.type === 'normal' ? (
					<>
						<h4 className={styles.hotDealTitle}>{data.hotDealTitle}</h4>
						<p className={styles.hotDealDescription}>{data.hotDealDescription}</p>

						<Button href={data.href} params={data.params} ariaLabel="Shop now">
							{data.cta}
						</Button>
					</>
				) : (
					<>
						<HotDealCounter />
						<h4 className={styles.hotDealTitle}>{data.hotDealTitle}</h4>
						<p className={styles.hotDealDescription}>{data.hotDealDescription}</p>
						<Button
							href={data.href}
							size="sm"
							params={data.params}
							className={styles.hotDealButton}
							ariaLabel="Shop now">
							{data.cta}
						</Button>
					</>
				)}
			</div>
		</div>
	)
}

export default HotDeals
