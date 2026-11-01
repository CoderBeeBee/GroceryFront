export const discoveryCategories = [
    {
        titleKey: 'Food & Nutrition',
        desc: 'Eat Well, Live Better',
        slug: 'food-and-nutrition',
        href: '/journal?category=food-and-nutrition',
        img: ''
    },
    {
        titleKey: 'Recipes',
        desc: 'Simple & Naturally Delicious',
        slug: 'recipes',
        href: '/journal?category=recipes',
        img: ''
    },
    {
        titleKey: 'Farm Stories',
        desc: 'Meet The People Behind Your Food',
        slug: 'farm-stories',
        href: '/journal?category=farm-stories',
        img: ''
    },
    {
        titleKey: 'Seasonal Guides',
        desc: 'Discover What’s In Season',
        slug: 'seasonal-guides',
        href: '/journal?category=seasonal-guides',
        img: ''
    },
    {
        titleKey: 'Food Guides',
        desc: 'Learn, Prepare & Preserve',
        slug: 'food-guides',
        href: '/journal?category=food-guides',
        img: ''
    }
];


export const discoveryArticles = [
    // FOOD & NUTRITION
    {
        title: 'Why Eating Seasonal Food Matters',
        slug: 'why-eating-seasonal-food-matters',
        category: 'food-and-nutrition',
        excerpt: 'Discover why choosing seasonal produce is a simple way to enjoy fresh flavors and support local farmers.',
        img: '',
        readTime: 5,
        featured: true
    },
    {
        title: 'The Benefits of Eating More Whole Foods',
        slug: 'benefits-of-whole-foods',
        category: 'food-and-nutrition',
        excerpt: 'Learn how simple, minimally processed ingredients can become the foundation of everyday meals.',
        img: '',
        readTime: 4,
        featured: false
    },
    {
        title: 'Understanding Organic Farming',
        slug: 'understanding-organic-farming',
        category: 'food-and-nutrition',
        excerpt: 'Explore what organic farming means and how certified organic food is produced.',
        img: '',
        readTime: 6,
        featured: false
    },

    // RECIPES
    {
        title: 'A Fresh Farm Vegetable Bowl',
        slug: 'fresh-farm-vegetable-bowl',
        category: 'recipes',
        excerpt: 'A colorful and simple meal made with fresh vegetables and wholesome ingredients.',
        img: '',
        readTime: 15,
        featured: true
    },
    {
        title: 'Homemade Apple & Cinnamon Oatmeal',
        slug: 'apple-cinnamon-oatmeal',
        category: 'recipes',
        excerpt: 'A comforting breakfast with apples, oats, cinnamon and a touch of honey.',
        img: '',
        readTime: 10,
        featured: false
    },
    {
        title: 'Rustic Homemade Sourdough Bread',
        slug: 'homemade-sourdough-bread',
        category: 'recipes',
        excerpt: 'Discover how to prepare traditional sourdough bread with simple ingredients.',
        img: '',
        readTime: 60,
        featured: false
    },

    // FARM STORIES
    {
        title: 'Meet the Farmers Behind Your Food',
        slug: 'meet-the-farmers',
        category: 'farm-stories',
        excerpt: 'Get to know the passionate people who grow and produce the food you bring home.',
        img: '',
        readTime: 5,
        featured: true
    },
    {
        title: 'A Day on a Family-Owned Farm',
        slug: 'day-on-a-family-farm',
        category: 'farm-stories',
        excerpt: 'Take a closer look at everyday life on a local family farm.',
        img: '',
        readTime: 7,
        featured: false
    },
    {
        title: 'From Farm to Your Table',
        slug: 'from-farm-to-your-table',
        category: 'farm-stories',
        excerpt: 'Discover the journey of fresh produce from local fields to your kitchen.',
        img: '',
        readTime: 4,
        featured: false
    },

    // SEASONAL GUIDES
    {
        title: 'What to Eat This Autumn',
        slug: 'what-to-eat-this-autumn',
        category: 'seasonal-guides',
        excerpt: 'Explore autumn fruits, vegetables and ingredients worth adding to your shopping basket.',
        img: '',
        readTime: 5,
        featured: true
    },
    {
        title: 'A Guide to Spring Vegetables',
        slug: 'spring-vegetables-guide',
        category: 'seasonal-guides',
        excerpt: 'Discover fresh seasonal vegetables and ways to enjoy them in spring.',
        img: '',
        readTime: 4,
        featured: false
    },
    {
        title: 'The Best Fruits of Summer',
        slug: 'best-fruits-of-summer',
        category: 'seasonal-guides',
        excerpt: 'A guide to delicious summer fruits and simple ideas for enjoying the harvest.',
        img: '',
        readTime: 5,
        featured: false
    },

    // FOOD GUIDES
    {
        title: 'How to Store Fresh Vegetables',
        slug: 'how-to-store-fresh-vegetables',
        category: 'food-guides',
        excerpt: 'Simple storage tips to help keep your vegetables fresh for longer.',
        img: '',
        readTime: 4,
        featured: true
    },
    {
        title: 'The Basics of Homemade Fermentation',
        slug: 'homemade-fermentation-basics',
        category: 'food-guides',
        excerpt: 'Learn the basics of fermentation and discover traditional ways to preserve food.',
        img: '',
        readTime: 8,
        featured: false
    },
    {
        title: 'How to Read Food Labels',
        slug: 'how-to-read-food-labels',
        category: 'food-guides',
        excerpt: 'Understand food labels and learn what to look for when choosing everyday products.',
        img: '',
        readTime: 5,
        featured: false
    }
];



export const discoveryMenu = {
    title: 'Discover',
    description: 'Explore The Good Food Journal',

    sections: [
        {
            title: 'Explore',
            items: [
                {
                    label: 'All Articles',
                    href: '/journal'
                },
                {
                    label: 'Food & Nutrition',
                    href: '/journal?category=food-and-nutrition'
                },
                {
                    label: 'Recipes',
                    href: '/journal?category=recipes'
                },
                {
                    label: 'Farm Stories',
                    href: '/journal?category=farm-stories'
                },
                {
                    label: 'Seasonal Guides',
                    href: '/journal?category=seasonal-guides'
                },
                {
                    label: 'Food Guides',
                    href: '/journal?category=food-guides'
                }
            ]
        },
        {
            title: 'Get Inspired',
            items: [
                {
                    label: 'Latest Articles',
                    href: '/journal?sort=latest'
                },
                {
                    label: 'Most Popular',
                    href: '/journal?sort=popular'
                },
                {
                    label: "Editor's Picks",
                    href: '/journal?collection=editors-picks'
                },
                {
                    label: 'Seasonal Inspiration',
                    href: '/journal?collection=seasonal'
                },
                {
                    label: 'Healthy Living',
                    href: '/journal?tag=healthy-living'
                }
            ]
        }
    ],

    featured: {
        label: "Editor's Pick",
        title: 'What to Eat This Autumn',
        description: 'Discover seasonal flavors and fresh inspiration.',
        href: '/journal/what-to-eat-this-autumn',
        img: ''
    },

    footer: {
        label: 'Visit The Good Food Journal',
        href: '/journal'
    }
};