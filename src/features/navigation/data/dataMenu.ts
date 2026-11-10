import { MenuTypes } from '../types/menu.types'

const Home = {
	titleKey: 'Home',
	description: 'Home',
	href: '/',
} satisfies MenuTypes
const shopMenu = {
	titleKey: 'Shop',
	description: 'Browse',
	href: '/shop',
	categories: [
		{
			titleKey: 'Fresh Produce',
			href: '/shop/[category]',
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
			href: '/shop/[category]',
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
			href: '/shop/[category]',
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
			href: '/shop/[category]',
			slug: 'preserves-drinks',
			categories: [
				{ titleKey: 'Juices', slug: 'juices' },
				{ titleKey: 'Honey & Sweeteners', slug: 'honey-and-sweeteners' },
				{ titleKey: 'Jams & Preserves', slug: 'jams-and-preserves' },
				{ titleKey: 'Fermented Foods', slug: 'fermented-foods' },
				{ titleKey: 'Herbs & Teas', slug: 'herbs-and-teas' },
				{ titleKey: 'Sauces', slug: 'sauces' },
			],
		},
		{
			titleKey: 'Bakery & Snacks',
			href: '/shop/[category]',
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
			href: '/shop/[category]',
			slug: 'collections',
			categories: [
				{ titleKey: 'Organic Products', slug: 'organic' },
				{ titleKey: 'Seasonal Products', slug: 'seasonal' },
				{ titleKey: 'Farm Bundles', slug: 'farm-bundles' },
				{ titleKey: 'Traditional Products', slug: 'traditional' },
			],
		},
	],
	footer: {
		titleKey: 'View all products',
		href: '/shop/[category]',
		slug: 'all-products',
	},
} satisfies MenuTypes

export const discoveryMenu = {
	titleKey: 'Discover',
	description: 'ExploreJournal',
	href: '/discover',
	categories: [
		{
			titleKey: 'Explore',
			href: '/discover/[category]', // POPRAWIONO: wskazuje na realny folder
			slug: 'explore', // To wpadnie jako [slug]
			categories: [
				// Te elementy to podkategorie, więc kierują na podwójny dynamiczny URL
				{ titleKey: 'All Articles', href: '/discover/[category]/[subCategory]', slug: 'all-articles' },
				{ titleKey: 'Food', href: '/discover/[category]/[subCategory]', slug: 'food-and-nutrition' },
				{ titleKey: 'Recipes', href: '/discover/[category]/[subCategory]', slug: 'recipes' },
				{ titleKey: 'Farm', href: '/discover/[category]/[subCategory]', slug: 'farm-stories' },
				{ titleKey: 'Seasonal', href: '/discover/[category]/[subCategory]', slug: 'seasonal-guides' },
				{ titleKey: 'FoodGuides', href: '/discover/[category]/[subCategory]', slug: 'food-guides' },
			],
		},
		{
			titleKey: 'Inspired',
			href: '/discover/[category]', // POPRAWIONO
			slug: 'get-inspired', // To wpadnie jako [category]
			categories: [
				// Jeśli sekcja journal to osobny folder (discover/journal), to linkujemy go wprost:
				{ titleKey: 'Latest', href: '/discover/journal/[slug]', slug: 'latest' }, // Filtrowanie przez query obsłużysz w komponencie
				{ titleKey: 'Popular', href: '/discover/journal/[slug]', slug: 'popular' },
				{ titleKey: 'Editor', href: '/discover/journal/[slug]', slug: 'editors-picks' },
				{ titleKey: 'Inspiration', href: '/discover/journal/[slug]', slug: 'seasonal' },
				{ titleKey: 'Living', href: '/discover/journal/[slug]', slug: 'healthy-living' },
			],
		},
	],

	featured: {
		label: "Editor's Pick",
		titleKey: 'What to Eat This Autumn',
		description: 'Discover seasonal flavors and fresh inspiration.',
		href: '/discover/journal/[slug]',
		img: '',
	},

	footer: {
		titleKey: 'Visit',
		href: '/discover',
	},
} satisfies MenuTypes

const ourStory = {
	titleKey: 'Our Story',
	description: 'Learn about our history',
	href: '/our-story',
} satisfies MenuTypes

const contact = {
	titleKey: 'Contact',
	description: 'Contact with Ous',
	href: '/contact',
} satisfies MenuTypes
export const dataMenu = [Home, shopMenu, discoveryMenu, ourStory, contact]
