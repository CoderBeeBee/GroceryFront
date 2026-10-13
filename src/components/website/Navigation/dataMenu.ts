export type MenuTypes = {
	titleKey: string
	href: string
	children?: MenuTypes[]
}

const Home = {
	titleKey: 'Home',
	href: '/',
}
const shop = {
	titleKey: 'Shop',
	href: '/shop',
}
const categories = {
	titleKey: 'Categories',
	href: '',
	children: [
		{
			titleKey: 'Fruits',
			href: '/categories/fruits',
		},
		{
			titleKey: 'Juices',
			href: '/categories/juices',
		},
		{
			titleKey: 'Vegetables',
			href: '/categories/vegetables',
		},
		{
			titleKey: 'Nuts & Seeds',
			href: '/categories/nuts-and-seeds',
		},
		{
			titleKey: 'Dairy & Eggs',
			href: '/categories/dairy',
		},
		{
			titleKey: 'Jams',
			href: '/categories/jams',
		},
		{
			titleKey: 'Honey & Sweeteners',
			href: '',
			children: [
				{
					titleKey: 'Fruits',
					href: '/categories/fruits',
				},
				{
					titleKey: 'Juices',
					href: '/categories/juices',
				},
				{
					titleKey: 'Vegetables',
					href: '/categories/vegetables',
				},
				{
					titleKey: 'Nuts & Seeds',
					href: '/categories/nuts-and-seeds',
				},
				{
					titleKey: 'Dairy & Eggs',
					href: '/categories/dairy',
				},
				{
					titleKey: 'Jams',
					href: '/categories/jams',
				},
			],
		},
	],
}
const categories2 = {
	titleKey: 'Categories',
	href: '',
	children: [
		{
			titleKey: 'Fruits',
			href: '/categories/fruits',
		},
		{
			titleKey: 'Juices',
			href: '/categories/juices',
		},
		{
			titleKey: 'Vegetables',
			href: '',
			children: [
				{
					titleKey: 'Fruits',
					href: '/categories/fruits',
				},
				{
					titleKey: 'Juices',
					href: '/categories/juices',
				},
				{
					titleKey: 'Vegetables',
					href: '/categories/vegetables',
				},
				{
					titleKey: 'Nuts & Seeds',
					href: '/categories/nuts-and-seeds',
				},
				{
					titleKey: 'Dairy & Eggs',
					href: '/categories/dairy',
				},
				{
					titleKey: 'Jams',
					href: '/categories/jams',
				},
			],
		},
		{
			titleKey: 'Nuts & Seeds',
			href: '/categories/nuts-and-seeds',
		},
		{
			titleKey: 'Dairy & Eggs',
			href: '',
			children: [
				{
					titleKey: 'Fruits',
					href: '/categories/fruits',
				},
				{
					titleKey: 'Juices',
					href: '/categories/juices',
				},
				{
					titleKey: 'Vegetables',
					href: '/categories/vegetables',
				},
				{
					titleKey: 'Nuts & Seeds',
					href: '/categories/nuts-and-seeds',
				},
				{
					titleKey: 'Dairy & Eggs',
					href: '/categories/dairy',
				},
				{
					titleKey: 'Jams',
					href: '/categories/jams',
				},
			],
		},
		{
			titleKey: 'Jams',
			href: '/categories/jams',
		},
		{
			titleKey: 'Honey & Sweeteners',
			href: '',
			children: [
				{
					titleKey: 'Fruits',
					href: '/categories/fruits',
				},
				{
					titleKey: 'Juices',
					href: '/categories/juices',
				},
				{
					titleKey: 'Vegetables',
					href: '/categories/vegetables',
				},
				{
					titleKey: 'Nuts & Seeds',
					href: '/categories/nuts-and-seeds',
				},
				{
					titleKey: 'Dairy & Eggs',
					href: '/categories/dairy',
				},
				{
					titleKey: 'Jams',
					href: '/categories/jams',
				},
			],
		},
	],
}

const blog = {
	titleKey: 'Blog',
	href: '/blog',
}
const about = {
	titleKey: 'About',
	href: '/about',
}
const contact = {
	titleKey: 'Contact',
	href: '/contact',
}
export const dataMenu = [Home, shop, categories, categories2, blog, about, contact] satisfies MenuTypes[]
