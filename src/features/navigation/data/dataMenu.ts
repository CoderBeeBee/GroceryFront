import { MenuTypes } from "../types/navigation"


const Home = {
	titleKey: 'Home',
	href: '/',
} satisfies MenuTypes
const shop = {
	titleKey: 'Shop',
	href: '/shop',
} satisfies MenuTypes
const categories = {
	titleKey: 'Categories',
	href: '',
	children: [
		{
			titleKey: 'Fruits',
			href: '/fruits',
		},
		{
			titleKey: 'Juices',
			href: '/juices',
		},
		{
			titleKey: 'Vegetables',
			href: '/vegetables',
		},
		{
			titleKey: 'Nuts & Seeds',
			href: '/nuts-and-seeds',
		},
		{
			titleKey: 'Dairy & Eggs',
			href: '/dairy-and-eggs',
		},
		{
			titleKey: 'Jams',
			href: '/jams',
		},
		{
			titleKey: 'Honey & Sweeteners',
			href: '',
			children: [
				{
					titleKey: 'Fruits',
					href: '/honey-and-sweeteners/fruits',
				},
				{
					titleKey: 'Juices',
					href: '/honey-and-sweeteners/juices',
				},
				{
					titleKey: 'Vegetables',
					href: '/honey-and-sweeteners/vegetables',
				},
				{
					titleKey: 'Nuts & Seeds',
					href: '/honey-and-sweeteners/nuts-and-seeds',
				},
				{
					titleKey: 'Dairy & Eggs',
					href: '/honey-and-sweeteners/dairy-and-eggs',
				},
				{
					titleKey: 'Jams',
					href: '/honey-and-sweeteners/jams',
				},
			],
		},
	],
} satisfies MenuTypes
const categories2 = {
	titleKey: 'Categories',
	href: '',
	children: [
		{
			titleKey: 'Fruits',
			href: '/fruits',
		},
		{
			titleKey: 'Juices',
			href: '/juices',
		},
		{
			titleKey: 'Vegetables',
			href: '',
			children: [
				{
					titleKey: 'Fruits',
					href: '/vegetables/fruits',
				},
				{
					titleKey: 'Juices',
					href: '/vegetables/juices',
				},
				{
					titleKey: 'Vegetables',
					href: '/vegetables/vegetables',
				},
				{
					titleKey: 'Nuts & Seeds',
					href: '/vegetables/nuts-and-seeds',
				},
				{
					titleKey: 'Dairy & Eggs',
					href: '/vegetables/dairy-and-eggs',
				},
				{
					titleKey: 'Jams',
					href: '/vegetables/jams',
				},
			],
		},
		{
			titleKey: 'Nuts & Seeds',
			href: '/nuts-and-seeds',
		},
		{
			titleKey: 'Dairy & Eggs',
			href: '',
			children: [
				{
					titleKey: 'Fruits',
					href: '/dairy-and-eggs/fruits',
				},
				{
					titleKey: 'Juices',
					href: '/dairy-and-eggs/juices',
				},
				{
					titleKey: 'Vegetables',
					href: '/dairy-and-eggs/vegetables',
				},
				{
					titleKey: 'Nuts & Seeds',
					href: '/dairy-and-eggs/nuts-and-seeds',
				},
				{
					titleKey: 'Dairy & Eggs',
					href: '/dairy-and-eggs/dairy',
				},
				{
					titleKey: 'Jams',
					href: '/dairy-and-eggs/jams',
				},
			],
		},
		{
			titleKey: 'Jams',
			href: '/jams',
		},
		{
			titleKey: 'Honey & Sweeteners',
			href: '',
			children: [
				{
					titleKey: 'Fruits',
					href: '/honey-and-sweeteners/fruits',
				},
				{
					titleKey: 'Juices',
					href: '/honey-and-sweeteners/juices',
				},
				{
					titleKey: 'Vegetables',
					href: '/honey-and-sweeteners/vegetables',
				},
				{
					titleKey: 'Nuts & Seeds',
					href: '/honey-and-sweeteners/nuts-and-seeds',
				},
				{
					titleKey: 'Dairy & Eggs',
					href: '/honey-and-sweeteners/dairy-and-eggs',
				},
				{
					titleKey: 'Jams',
					href: '/honey-and-sweeteners/jams',
				},
			],
		},
	],
} satisfies MenuTypes

const blog = {
	titleKey: 'Blog',
	href: '/blog',
} satisfies MenuTypes
const about = {
	titleKey: 'About',
	href: '/about',
} satisfies MenuTypes
const contact = {
	titleKey: 'Contact',
	href: '/contact',
} satisfies MenuTypes
export const dataMenu = [Home, shop, categories, categories2, blog, about, contact] 
