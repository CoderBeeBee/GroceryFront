import { MenuTypes } from '../types/menu.types'

const Home = {
	titleKey: 'Home',
	href: '/',
} satisfies MenuTypes
const shop = {
	titleKey: 'Shop',
	href: '/shop',
	categories: [
		{
			titleKey: 'Fresh Produce',
			slug: 'fresh-produce',
			categories: [
				{ titleKey: 'Fruits', slug: 'fruits' },
				{ titleKey: 'Vegetables', slug: 'vegetables' },
				{ titleKey: 'Mushrooms', slug: 'mushrooms' },
				{ titleKey: 'Fresh Herbs', slug: 'fresh-herbs' },
			],
		},
		{
			titleKey: 'Dairy & Meat',
			slug: 'dairy-and-meat',
			categories: [
				{ titleKey: 'Milk & Dairy', slug: 'milk-and-dairy' },
				{ titleKey: 'Dairy & Eggs', slug: 'dairy-and-eggs' },
				{ titleKey: 'Cheese', slug: 'cheese' },
				{ titleKey: 'Meat & Poultry', slug: 'meat-and-poultry' },
			],
		},
		{
			titleKey: 'Pantry',
			slug: 'pantry',
			categories: [
				{ titleKey: 'Grains & Flour', slug: 'grains-and-flour' },
				{ titleKey: 'Nuts & Seeds', slug: 'nuts-and-seeds' },
				{ titleKey: 'Legumes', slug: 'legumes' },
				{ titleKey: 'Pasta & Noodles', slug: 'pasta-and-noodles' },
				{ titleKey: 'Oils & Vinegars', slug: 'oils-and-vinegars' },
			],
		},
		{
			titleKey: 'Preserves & Drinks',
			slug: 'preserves-drinks',
			categories: [
				{ titleKey: 'Juices', slug: 'juices' },
				{ titleKey: 'Honey & Sweeteners', slug: 'honey-and-sweeteners' },
				{ titleKey: 'Jams & Preserves', slug: 'jams-and-preserves' },
				{ titleKey: 'Fermented Foods', slug: 'fermented-foods' },
				{ titleKey: 'Herbs & Teas', slug: 'herbs-and-teas' },
			],
		},
		{
			titleKey: 'Bakery & Snacks',
			slug: 'bakery-snacks',
			categories: [
				{ titleKey: 'Bread & Bakery', slug: 'bread-and-bakery' },
				{ titleKey: 'Dried Fruits', slug: 'dried-fruits' },
				{ titleKey: 'Natural Snacks', slug: 'natural-snacks' },
				{ titleKey: 'Nut Butters', slug: 'nut-butters' },
			],
		},
		{
			titleKey: 'Special Collections',
			slug: 'collections',
			categories: [
				{ titleKey: 'Organic Products', slug: 'organic' },
				{ titleKey: 'Seasonal Products', slug: 'seasonal' },
				{ titleKey: 'Farm Bundles', slug: 'farm-bundles' },
				{ titleKey: 'Traditional Products', slug: 'traditional' },
			],
		},
	],
} satisfies MenuTypes

const discovery = {
	titleKey: 'Discovery',
	href: '/discovery',
	// categories: [
	// 	{
	// 		titleKey: 'Food & Nutrition',
	// 		slug: 'fresh-produce',
			
	// 	},
	// ],
} satisfies MenuTypes

// Food & Nutrition

// Artykuły o zdrowym odżywianiu, składnikach i właściwościach produktów.

// vegetable stew

// Recipes

// Przepisy wykorzystujące produkty dostępne w Twoim sklepie.

// Japan provides approximately 2 million USD for Malawi to support peacebuilding, socio-economic empowerment and climate change adaptation. | United Nations Development Programme

// Farm Stories

// Historie rolników, gospodarstw i lokalnych producentów.

// October Garden Jobs UK: Garden & Greenhouse Checklist

// Seasonal Guides

// Co jeść w danym sezonie, sezonowe produkty i inspiracje.

// HeldenPilz – Deine Experten für Darmgesundheit & Fermentation

// Food Guides

// Poradniki dotyczące przechowywania, fermentowania i przygotowywania żywności.

const ourStory = {
	titleKey: 'Our Story',
	href: '/our-story',
} satisfies MenuTypes
const contact = {
	titleKey: 'Contact',
	href: '/contact',
} satisfies MenuTypes
export const dataMenu = [Home, shop, discovery, ourStory, contact]
