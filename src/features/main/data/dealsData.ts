import { AppPathnames } from "../../navigation/types/menu.types"

export type dealsDataType = {
	id: string
	type: 'counter' | 'normal'
	days?: number
	hotDealName: string
	src:string
	hotDealTitle: string
	hotDealDescription: string
    href:AppPathnames
    params:string
    cta:string

}

export const dealsData: dealsDataType = {
	id: 'wewfe',
	type: 'counter',
	days: 5,
	hotDealName: 'Deal of the Day',
	hotDealTitle: 'Flat 20% OFF',
	hotDealDescription: 'On all Organic Fruits',
    href:'/shop/[category]',
    params:'fruits',
    cta:"Shop now",
	src:`/images/deal/deal.jpg`
}
