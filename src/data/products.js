export const PRODUCTS = [
    // ==================== A. COMBOS & SPECIAL OFFERS ====================
    {
        id: 'combo-mega-movie',
        name: 'Mega Movie Combo',
        categoryId: 'combos',
        categoryName: 'Combos & Offers',
        description: '1 Jumbo Tub Butter Popcorn + 2 Frosted Cold Drinks (500ml) + 1 Loaded Cheddar Nachos with Jalapenos. Complete movie indulgence.',
        price: 649,
        originalPrice: 870,
        image: '/images/mega-combo.jpg',
        foodType: 'veg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 5,
        calories: 820,
        includedItems: ['Jumbo Butter Popcorn', '2x Cold Drinks (500ml)', 'Cheddar Nachos Tray'],
        addOns: [
            { id: 'add-cheese-dip', name: 'Extra Warm Cheese Dip', price: 40 },
            { id: 'add-salsa-dip', name: 'Extra Tangy Salsa Dip', price: 30 },
            { id: 'add-caramel-upgrade', name: 'Upgrade to Caramel Popcorn', price: 50 },
        ]
    },
    {
        id: 'combo-mini-movie',
        name: 'Mini Movie Pack',
        categoryId: 'combos',
        categoryName: 'Combos & Offers',
        description: '1 Regular Butter Popcorn + 1 Cold Drink (300ml) + 1 Mini Nachos with Salsa. Perfect solo viewing accompaniment.',
        price: 329,
        originalPrice: 420,
        image: '/images/mini-pack.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 4,
        calories: 450,
        includedItems: ['Regular Butter Popcorn', 'Cold Drink (300ml)', 'Mini Nacho Tub'],
        addOns: [
            { id: 'add-butter-extra', name: 'Extra Butter Drizzle', price: 30 },
            { id: 'add-drink-large', name: 'Upsize Drink to 500ml', price: 40 }
        ]
    },
    {
        id: 'combo-couple-delight',
        name: 'Couple Movie Combo',
        categoryId: 'combos',
        categoryName: 'Combos & Offers',
        description: '2 Medium Popcorns (Golden Butter & Caramel Crunch) + 2 Chilled Cold Drinks + 1 Box of 6 Artisan Chocolate Truffles.',
        price: 599,
        originalPrice: 780,
        image: '/images/couple-combo.jpg',
        foodType: 'veg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 5,
        calories: 760,
        includedItems: ['Medium Butter Popcorn', 'Medium Caramel Popcorn', '2x Drinks (300ml)', '6x Chocolate Truffles'],
        addOns: [
            { id: 'add-popcorn-cheese', name: 'Swap one Popcorn to Cheddar Cheese', price: 40 },
            { id: 'add-extra-truffles', name: 'Extra Chocolate Truffles (Pack of 3)', price: 70 }
        ]
    },
    {
        id: 'combo-burger-lover',
        name: 'Burger Lover Combo',
        categoryId: 'combos',
        categoryName: 'Combos & Offers',
        description: '2 Signature Brioche Burgers + 1 Crispy Golden French Fries Basket + 2 Chilled Fountain Sodas.',
        price: 549,
        originalPrice: 720,
        image: '/images/burger-combo.jpg',
        foodType: 'veg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 8,
        calories: 950,
        includedItems: ['2x Burgers of Choice', '1x French Fries', '2x Cold Drinks'],
        addOns: [
            { id: 'add-extra-cheese', name: 'Extra Melted Cheese Slices (Both)', price: 60 },
            { id: 'add-peri-fries-up', name: 'Upgrade Fries to Peri Peri', price: 35 },
            { id: 'add-mayo-dip', name: 'Garlic Mayo Dip', price: 30 }
        ]
    },
    {
        id: 'combo-family-snack',
        name: 'Family Concession Feast',
        categoryId: 'combos',
        categoryName: 'Combos & Offers',
        description: '2 Large Popcorns + 2 Classic Hot Dogs + 1 Supreme Nachos + 1 Peri Peri Fries + 4 Cold Drinks (300ml). Feeds everyone comfortably.',
        price: 1199,
        originalPrice: 1580,
        image: '/images/family-pack.jpg',
        foodType: 'non-veg',
        isAvailable: true,
        prepTimeMinutes: 10,
        calories: 1650,
        includedItems: ['2x Large Popcorns', '2x Hot Dogs', '1x Loaded Nachos', '1x Peri Peri Fries', '4x Cold Drinks'],
        addOns: [
            { id: 'add-veg-dogs', name: 'Make All Hot Dogs Vegetarian', price: 0 },
            { id: 'add-lava-cake-pack', name: 'Add 2 Warm Choco Lava Cakes', price: 160 }
        ]
    },
    // ==================== B. POPCORN ====================
    {
        id: 'popcorn-butter-reg',
        name: 'Regular Salted Popcorn',
        categoryId: 'popcorn',
        categoryName: 'Popcorn',
        description: 'Crisp, hot, lightly salted cinema popcorn popped freshly on site in non-GMO coconut oil.',
        price: 180,
        originalPrice: 210,
        image: '/images/butter-popcorn.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 3,
        calories: 220,
        volumeOrSize: 'Regular (85g)',
        variants: [
            { id: 'v-reg', name: 'Regular (85g)', price: 180, isDefault: true },
            { id: 'v-med', name: 'Medium (120g)', price: 240 },
            { id: 'v-large', name: 'Large Tub (180g)', price: 310 }
        ],
        addOns: [
            { id: 'add-butter-shot', name: 'Warm Creamery Butter Shot', price: 35 },
            { id: 'add-cheese-dust', name: 'Sprinkled Cheese Dust', price: 25 },
            { id: 'add-caramel-mix', name: 'Caramel Glaze Drizzle', price: 40 }
        ]
    },
    {
        id: 'popcorn-butter-med',
        name: 'Medium Butter Popcorn',
        categoryId: 'popcorn',
        categoryName: 'Popcorn',
        description: 'Generously drizzled with melted golden creamery butter across every crunchy kernel.',
        price: 260,
        originalPrice: 300,
        image: '/images/butter-popcorn.jpg',
        foodType: 'veg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 3,
        calories: 340,
        volumeOrSize: 'Medium (120g)',
        addOns: [
            { id: 'add-butter-shot-2', name: 'Double Butter Drizzle', price: 40 },
            { id: 'add-jalapeno-season', name: 'Tangy Jalapeno Seasoning', price: 25 }
        ]
    },
    {
        id: 'popcorn-butter-large',
        name: 'Large Butter Popcorn Tub',
        categoryId: 'popcorn',
        categoryName: 'Popcorn',
        description: 'Our jumbo collector tub overflowing with aromatic golden butter popcorn. Ideal for sharing throughout a 3-hour movie.',
        price: 340,
        originalPrice: 400,
        image: '/images/butter-popcorn.jpg',
        foodType: 'veg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 3,
        calories: 490,
        volumeOrSize: 'Large (180g)',
        addOns: [
            { id: 'add-extra-butter', name: 'Cinema Butter Pump', price: 45 },
            { id: 'add-seasoning-pack', name: 'Peri-Peri & Herbs Shaker', price: 30 }
        ]
    },
    {
        id: 'popcorn-caramel',
        name: 'Caramel Popcorn Crunch',
        categoryId: 'popcorn',
        categoryName: 'Popcorn',
        description: 'Thick molasses caramel glazed kernels cooked in traditional copper kettles. Sweet, crunchy perfection.',
        price: 290,
        originalPrice: 340,
        image: '/images/butter-popcorn.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 3,
        calories: 420,
        volumeOrSize: 'Medium (130g)',
        variants: [
            { id: 'v-car-med', name: 'Medium (130g)', price: 290, isDefault: true },
            { id: 'v-car-lrg', name: 'Large Tub (200g)', price: 370 }
        ],
        addOns: [
            { id: 'add-sea-salt', name: 'Sprinkle of Maldon Sea Salt', price: 20 },
            { id: 'add-choc-drizzle', name: 'Warm Chocolate Drizzle', price: 45 }
        ]
    },
    {
        id: 'popcorn-cheese',
        name: 'Cheddar Cheese Popcorn',
        categoryId: 'popcorn',
        categoryName: 'Popcorn',
        description: 'Coated in genuine Wisconsin sharp cheddar cheese seasoning. Tangy, savory and addictive.',
        price: 290,
        originalPrice: 340,
        image: '/images/butter-popcorn.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 3,
        calories: 380,
        volumeOrSize: 'Medium (120g)',
        addOns: [
            { id: 'add-spicy-dust', name: 'Chilli Flakes Dust', price: 15 },
            { id: 'add-cheese-shot', name: 'Extra Cheddar Dust', price: 30 }
        ]
    },
    // ==================== C. BURGERS ====================
    {
        id: 'burger-classic-veg',
        name: 'Classic Veg Burger',
        categoryId: 'burgers',
        categoryName: 'Burgers',
        description: 'Crisp mixed vegetable & potato patty seasoned with Indian spices, fresh iceberg lettuce, tomatoes, and secret burger sauce on toasted sesame bun.',
        price: 199,
        originalPrice: 240,
        image: '/images/double-burger.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 7,
        calories: 380,
        variants: [
            { id: 'v-reg', name: 'Regular Bun', price: 199, isDefault: true },
            { id: 'v-large', name: 'Large Brioche Meal (+Fries)', price: 289 }
        ],
        addOns: [
            { id: 'add-cheese', name: 'Extra Cheddar Cheese Slice', price: 35 },
            { id: 'add-jalapeno', name: 'Pickled Jalapenos', price: 25 },
            { id: 'add-sauce', name: 'Chipotle Dressing', price: 20 }
        ]
    },
    {
        id: 'burger-cheese',
        name: 'Gourmet Cheese Burger',
        categoryId: 'burgers',
        categoryName: 'Burgers',
        description: 'Thick herb potato patty layered with double American cheddar slices, gherkins, caramelized onions and spicy mayo.',
        price: 249,
        originalPrice: 299,
        image: '/images/double-burger.jpg',
        foodType: 'veg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 7,
        calories: 460,
        addOns: [
            { id: 'add-cheese-slice', name: 'Extra Cheese Slice', price: 40 },
            { id: 'add-caram-onion', name: 'Extra Caramelized Onions', price: 25 },
            { id: 'add-patty', name: 'Extra Veg Patty', price: 60 }
        ]
    },
    {
        id: 'burger-double-cheese',
        name: 'Double Cheese Overload Burger',
        categoryId: 'burgers',
        categoryName: 'Burgers',
        description: 'Double crunchy patties, three layers of melted cheddar, dripping cheese sauce, crisp gherkins on toasted golden brioche.',
        price: 329,
        originalPrice: 390,
        image: '/images/double-burger.jpg',
        foodType: 'veg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 8,
        calories: 620,
        addOns: [
            { id: 'add-bacon-veg', name: 'Crispy Onion Straws', price: 30 },
            { id: 'add-dip-garlic', name: 'Truffle Mayo Cup', price: 40 }
        ]
    },
    {
        id: 'burger-crispy-chicken',
        name: 'Crispy Chicken Burger',
        categoryId: 'burgers',
        categoryName: 'Burgers',
        description: 'Golden fried chicken breast fillet in crunchy Southern coating, creamy coleslaw, tangy pickles and honey mustard on buttered brioche.',
        price: 299,
        originalPrice: 360,
        image: '/images/double-burger.jpg',
        foodType: 'non-veg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 8,
        calories: 540,
        addOns: [
            { id: 'add-chick-cheese', name: 'American Cheese Slice', price: 40 },
            { id: 'add-chick-patty', name: 'Double Chicken Fillet', price: 90 },
            { id: 'add-spicy-sauce', name: 'Ghost Pepper Hot Sauce', price: 25 }
        ]
    },
    {
        id: 'burger-spicy-paneer',
        name: 'Spicy Paneer Tikka Burger',
        categoryId: 'burgers',
        categoryName: 'Burgers',
        description: 'Generous tandoori spiced paneer block grilled with capsicum, mint chutney mayonnaise, crisp onions on artisan bun.',
        price: 279,
        originalPrice: 330,
        image: '/images/double-burger.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 8,
        calories: 490,
        addOns: [
            { id: 'add-paneer-cheese', name: 'Smoked Gouda Slice', price: 45 },
            { id: 'add-mint-mayo', name: 'Mint Chutney Mayo', price: 20 }
        ]
    },
    {
        id: 'burger-premium-loaded',
        name: 'VIP Cinema Loaded Burger',
        categoryId: 'burgers',
        categoryName: 'Burgers',
        description: 'The heavyweight showstopper. Grilled patty, molten mozzarella center, onion rings, crisp lettuce, spicy barbecue glaze.',
        price: 369,
        originalPrice: 440,
        image: '/images/double-burger.jpg',
        foodType: 'non-veg',
        isAvailable: true,
        prepTimeMinutes: 9,
        calories: 680,
        addOns: [
            { id: 'add-egg', name: 'Sunny Side Fried Egg', price: 35 },
            { id: 'add-double-sauce', name: 'Extra BBQ Glaze', price: 20 }
        ]
    },
    // ==================== D. FRENCH FRIES ====================
    {
        id: 'fries-classic-salted',
        name: 'Classic Salted French Fries',
        categoryId: 'fries',
        categoryName: 'French Fries',
        description: 'Crispy skin-on Idaho potatoes deep-fried to golden amber, dusted with rock sea salt.',
        price: 159,
        originalPrice: 190,
        image: '/images/french-fries.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 5,
        calories: 280,
        variants: [
            { id: 'v-reg', name: 'Regular Basket (150g)', price: 159, isDefault: true },
            { id: 'v-large', name: 'Jumbo Share Tub (260g)', price: 229 }
        ],
        addOns: [
            { id: 'add-ketchup-extra', name: 'Artisan Smoked Ketchup', price: 15 },
            { id: 'add-garlic-mayo', name: 'Creamy Garlic Mayo', price: 30 },
            { id: 'add-cheese-sauce', name: 'Molten Cheddar Dip', price: 40 }
        ]
    },
    {
        id: 'fries-peri-peri',
        name: 'Peri Peri Shake Fries',
        categoryId: 'fries',
        categoryName: 'French Fries',
        description: 'Hot golden fries served with an African Bird’s Eye chilli peri-peri spice shaker pouch.',
        price: 189,
        originalPrice: 220,
        image: '/images/french-fries.jpg',
        foodType: 'veg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 5,
        calories: 310,
        addOns: [
            { id: 'add-extra-pouch', name: 'Extra Peri Peri Pouch', price: 25 },
            { id: 'add-mayo', name: 'Cool Ranch Dressing', price: 35 }
        ]
    },
    {
        id: 'fries-cheese-melt',
        name: 'Molten Cheese Fries',
        categoryId: 'fries',
        categoryName: 'French Fries',
        description: 'Crisp fries smothered under velvety hot cheddar cheese sauce and toasted herb crumbs.',
        price: 229,
        originalPrice: 270,
        image: '/images/french-fries.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 6,
        calories: 420,
        addOns: [
            { id: 'add-jalapenos', name: 'Diced Pickled Jalapenos', price: 25 },
            { id: 'add-cracked-pepper', name: 'Black Truffle Oil Drops', price: 50 }
        ]
    },
    {
        id: 'fries-loaded',
        name: 'Loaded Supreme Cinema Fries',
        categoryId: 'fries',
        categoryName: 'French Fries',
        description: 'Jumbo portion of fries topped with cheese sauce, salsa, diced jalapenos, sour cream, and spring onion sprinkles.',
        price: 279,
        originalPrice: 340,
        image: '/images/french-fries.jpg',
        foodType: 'veg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 6,
        calories: 520,
        addOns: [
            { id: 'add-guac', name: 'Fresh Guacamole Scoop', price: 50 }
        ]
    },
    {
        id: 'fries-large',
        name: 'Large French Fries Bucket',
        categoryId: 'fries',
        categoryName: 'French Fries',
        description: 'Double size portion intended for 2-3 people with twin dip cups included.',
        price: 239,
        originalPrice: 290,
        image: '/images/french-fries.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 5,
        calories: 460,
        addOns: [
            { id: 'add-peri-dust', name: 'Add Peri Peri Shake', price: 30 }
        ]
    },
    // ==================== E. COLD DRINKS ====================
    {
        id: 'drink-coke-250',
        name: 'Coca-Cola (250ml Can)',
        categoryId: 'drinks',
        categoryName: 'Cold Drinks',
        description: 'Classic chilled Coca-Cola sleek aluminum can served with chilled frosted cup and ice.',
        price: 70,
        originalPrice: 80,
        image: '/images/cold-drinks.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 2,
        calories: 105,
        brand: 'Coca-Cola',
        volumeOrSize: '250ml Can',
        addOns: [
            { id: 'add-lemon-slice', name: 'Fresh Lemon & Mint Garnish', price: 15 },
            { id: 'add-no-ice', name: 'Serve Without Ice', price: 0 }
        ]
    },
    {
        id: 'drink-coke-300',
        name: 'Coca-Cola Fountain (300ml Cup)',
        categoryId: 'drinks',
        categoryName: 'Cold Drinks',
        description: 'Crisp, sparkling fountain Coca-Cola with fresh effervescent bubbles and crushed ice.',
        price: 99,
        originalPrice: 120,
        image: '/images/cold-drinks.jpg',
        foodType: 'veg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 2,
        calories: 130,
        brand: 'Coca-Cola',
        volumeOrSize: '300ml Cup'
    },
    {
        id: 'drink-coke-500',
        name: 'Coca-Cola Mega Fountain (500ml Cup)',
        categoryId: 'drinks',
        categoryName: 'Cold Drinks',
        description: 'Large cinema cup with secure lid and straw. Maximum fizz to last through the entire climax.',
        price: 149,
        originalPrice: 180,
        image: '/images/cold-drinks.jpg',
        foodType: 'veg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 2,
        calories: 210,
        brand: 'Coca-Cola',
        volumeOrSize: '500ml Cup'
    },
    {
        id: 'drink-coke-zero',
        name: 'Coca-Cola Zero Sugar (300ml)',
        categoryId: 'drinks',
        categoryName: 'Cold Drinks',
        description: 'All the iconic Coca-Cola taste, zero sugar and zero calories. Chilled to perfection.',
        price: 109,
        originalPrice: 130,
        image: '/images/cold-drinks.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 2,
        calories: 0,
        brand: 'Coca-Cola',
        volumeOrSize: '300ml Cup'
    },
    {
        id: 'drink-sprite',
        name: 'Sprite Lemon-Lime (300ml Cup)',
        categoryId: 'drinks',
        categoryName: 'Cold Drinks',
        description: 'Crisp, refreshing lemon-lime soda with sparkling carbonation. 100% natural flavors.',
        price: 99,
        originalPrice: 120,
        image: '/images/cold-drinks.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 2,
        calories: 125,
        brand: 'Sprite',
        volumeOrSize: '300ml Cup',
        variants: [
            { id: 'v-300', name: '300ml Regular', price: 99, isDefault: true },
            { id: 'v-500', name: '500ml Large', price: 149 }
        ]
    },
    {
        id: 'drink-fanta',
        name: 'Fanta Orange (300ml Cup)',
        categoryId: 'drinks',
        categoryName: 'Cold Drinks',
        description: 'Bright, bubbly orange soda with vibrant fruity citrus punch.',
        price: 99,
        originalPrice: 120,
        image: '/images/cold-drinks.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 2,
        calories: 135,
        brand: 'Fanta',
        volumeOrSize: '300ml Cup'
    },
    {
        id: 'drink-thumsup',
        name: 'Thums Up Charged (300ml Cup)',
        categoryId: 'drinks',
        categoryName: 'Cold Drinks',
        description: 'Strong, spicy cola taste with high carbonation for true movie adrenaline.',
        price: 99,
        originalPrice: 120,
        image: '/images/cold-drinks.jpg',
        foodType: 'veg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 2,
        calories: 140,
        brand: 'Thums Up',
        volumeOrSize: '300ml Cup'
    },
    {
        id: 'drink-pepsi',
        name: 'Pepsi Black Max (330ml Can)',
        categoryId: 'drinks',
        categoryName: 'Cold Drinks',
        description: 'Bold cola taste with maximum refresh and zero calories.',
        price: 85,
        originalPrice: 95,
        image: '/images/cold-drinks.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 2,
        calories: 0,
        brand: 'Pepsi',
        volumeOrSize: '330ml Can'
    },
    {
        id: 'drink-mountain-dew',
        name: 'Mountain Dew (300ml Cup)',
        categoryId: 'drinks',
        categoryName: 'Cold Drinks',
        description: 'Citrus punch flavor charged with high caffeine and fizz.',
        price: 99,
        originalPrice: 120,
        image: '/images/cold-drinks.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 2,
        calories: 145,
        brand: 'Mountain Dew',
        volumeOrSize: '300ml Cup'
    },
    {
        id: 'drink-water-mineral',
        name: 'Kinley Mineral Water (1000ml)',
        categoryId: 'drinks',
        categoryName: 'Cold Drinks',
        description: 'Pure packaged drinking water with essential added minerals. Sealed with hygiene seal.',
        price: 50,
        originalPrice: 50,
        image: '/images/cold-drinks.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 1,
        calories: 0,
        brand: 'Kinley',
        volumeOrSize: '1 Liter Bottle'
    },
    // ==================== F. SANDWICHES ====================
    {
        id: 'sand-classic-veg',
        name: 'Classic Veg Grilled Sandwich',
        categoryId: 'sandwiches',
        categoryName: 'Sandwiches',
        description: 'Thinly sliced cucumber, tomato, beetroot, and potato spiced with mint coriander chutney, toasted crispy.',
        price: 189,
        originalPrice: 220,
        image: '/images/farmhouse-pizza.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 6,
        calories: 320,
        addOns: [
            { id: 'add-cheese', name: 'Grated Mozzarella Inside', price: 35 },
            { id: 'add-mayo', name: 'Tandoori Mayo Dip', price: 25 }
        ]
    },
    {
        id: 'sand-grilled-cheese',
        name: 'Three-Cheese Grilled Melt',
        categoryId: 'sandwiches',
        categoryName: 'Sandwiches',
        description: 'Golden crusty sourdough stuffed with melted mozzarella, English cheddar, and processed cheese with sweet corn.',
        price: 239,
        originalPrice: 280,
        image: '/images/farmhouse-pizza.jpg',
        foodType: 'veg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 6,
        calories: 450,
        addOns: [
            { id: 'add-jalapenos', name: 'Jalapeno Slices', price: 25 },
            { id: 'add-butter', name: 'Garlic Herb Butter Crust', price: 20 }
        ]
    },
    {
        id: 'sand-paneer',
        name: 'Smoked Paneer Tikka Sandwich',
        categoryId: 'sandwiches',
        categoryName: 'Sandwiches',
        description: 'Marinated paneer cubes tossed in onion capsicum masala, layered between whole-grain buttered toast.',
        price: 249,
        originalPrice: 299,
        image: '/images/farmhouse-pizza.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 7,
        calories: 410,
        addOns: [
            { id: 'add-cheese-slice', name: 'American Cheese Melt', price: 35 }
        ]
    },
    {
        id: 'sand-club',
        name: 'Triple Decker Cinema Club',
        categoryId: 'sandwiches',
        categoryName: 'Sandwiches',
        description: 'Three toasted bread layers stacked with lettuce, coleslaw, cheese slice, herb spread, and seasoned tomato.',
        price: 269,
        originalPrice: 320,
        image: '/images/farmhouse-pizza.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 7,
        calories: 480
    },
    {
        id: 'sand-chicken',
        name: 'Shredded BBQ Chicken Sandwich',
        categoryId: 'sandwiches',
        categoryName: 'Sandwiches',
        description: 'Tender pulled chicken tossed in smoky hickory BBQ sauce with melted cheddar and caramelized onions on sourdough.',
        price: 289,
        originalPrice: 350,
        image: '/images/farmhouse-pizza.jpg',
        foodType: 'non-veg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 7,
        calories: 520,
        addOns: [
            { id: 'add-extra-chick', name: 'Extra BBQ Chicken Scoop', price: 60 },
            { id: 'add-cheese', name: 'Double Cheese Melt', price: 35 }
        ]
    },
    // ==================== G. PIZZA ====================
    {
        id: 'pizza-margherita',
        name: 'Classic Margherita Pizza (9")',
        categoryId: 'pizza',
        categoryName: 'Pizza',
        description: 'Rich Italian San Marzano tomato reduction, fresh basil leaves, and 100% whole milk melted mozzarella cheese on stone-baked crust.',
        price: 329,
        originalPrice: 390,
        image: '/images/farmhouse-pizza.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 10,
        calories: 680,
        variants: [
            { id: 'v-9', name: '9" Medium (Serves 2)', price: 329, isDefault: true },
            { id: 'v-11', name: '11" Large (Serves 3-4)', price: 449 }
        ],
        addOns: [
            { id: 'add-cheese-burst', name: 'Cheese Burst Molten Crust', price: 79 },
            { id: 'add-olives', name: 'Black Olives & Jalapenos', price: 40 }
        ]
    },
    {
        id: 'pizza-cheese-burst',
        name: 'Four-Cheese Burst Pizza (9")',
        categoryId: 'pizza',
        categoryName: 'Pizza',
        description: 'A liquid cheese lava inside the crust, topped with mozzarella, cheddar, gouda, and parmesan cheese.',
        price: 399,
        originalPrice: 470,
        image: '/images/farmhouse-pizza.jpg',
        foodType: 'veg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 10,
        calories: 840,
        addOns: [
            { id: 'add-herbs', name: 'Garlic Butter Crust Brush', price: 25 },
            { id: 'add-dip', name: 'Cheesy Jalapeno Dip', price: 40 }
        ]
    },
    {
        id: 'pizza-farmhouse',
        name: 'Farmhouse Supreme Pizza (9")',
        categoryId: 'pizza',
        categoryName: 'Pizza',
        description: 'Loaded with crunchy bell peppers, red onions, juicy mushrooms, sweet corn kernels and black olives with herb seasoning.',
        price: 379,
        originalPrice: 450,
        image: '/images/farmhouse-pizza.jpg',
        foodType: 'veg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 10,
        calories: 720,
        variants: [
            { id: 'v-9', name: '9" Medium', price: 379, isDefault: true },
            { id: 'v-11', name: '11" Large', price: 499 }
        ],
        addOns: [
            { id: 'add-cheese-burst', name: 'Cheese Burst Crust', price: 79 },
            { id: 'add-paneer-cubes', name: 'Spiced Paneer Topping', price: 50 }
        ]
    },
    {
        id: 'pizza-paneer',
        name: 'Paneer Tikka Passion Pizza (9")',
        categoryId: 'pizza',
        categoryName: 'Pizza',
        description: 'Clay-oven style tandoori paneer cubes, capsicum, red paprika, and mint-coriander drizzle over mozzarella.',
        price: 389,
        originalPrice: 460,
        image: '/images/farmhouse-pizza.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 10,
        calories: 760,
        addOns: [
            { id: 'add-extra-cheese', name: 'Extra Mozzarella Layer', price: 50 }
        ]
    },
    {
        id: 'pizza-chicken',
        name: 'Peri Peri BBQ Chicken Pizza (9")',
        categoryId: 'pizza',
        categoryName: 'Pizza',
        description: 'Succulent roasted chicken chunks marinated in peri-peri spices, smoky barbecue drizzle, sliced onions, and melted mozzarella.',
        price: 439,
        originalPrice: 520,
        image: '/images/farmhouse-pizza.jpg',
        foodType: 'non-veg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 10,
        calories: 820,
        addOns: [
            { id: 'add-cheese-burst', name: 'Cheese Burst Crust', price: 79 },
            { id: 'add-extra-chicken', name: 'Double Chicken Meat', price: 80 }
        ]
    },
    // ==================== H. DESSERTS & OTHER SNACKS ====================
    {
        id: 'dessert-choco-lava',
        name: 'Warm Choco Lava Cake',
        categoryId: 'desserts',
        categoryName: 'Desserts & Snacks',
        description: 'Decadent dark chocolate sponge cake with an oozing warm chocolate center. Served piping hot.',
        price: 139,
        originalPrice: 160,
        image: '/images/couple-combo.jpg',
        foodType: 'egg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 4,
        calories: 340,
        addOns: [
            { id: 'add-ice-cream', name: 'Vanilla Ice Cream Scoop', price: 40 }
        ]
    },
    {
        id: 'dessert-brownie',
        name: 'Fudgy Walnut Brownie',
        categoryId: 'desserts',
        categoryName: 'Desserts & Snacks',
        description: 'Dense Belgian chocolate brownie loaded with roasted California walnuts and chocolate chips.',
        price: 149,
        originalPrice: 175,
        image: '/images/couple-combo.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 3,
        calories: 390
    },
    {
        id: 'snack-nachos-salsa',
        name: 'Movie Nachos with Duo Dips',
        categoryId: 'desserts',
        categoryName: 'Desserts & Snacks',
        description: 'Crispy stone-ground salted corn tortilla chips with twin tubs of warm cheddar cheese and Mexican salsa.',
        price: 219,
        originalPrice: 260,
        image: '/images/mega-combo.jpg',
        foodType: 'veg',
        isAvailable: true,
        isBestSeller: true,
        prepTimeMinutes: 3,
        calories: 440,
        addOns: [
            { id: 'add-jalapenos', name: 'Extra Pickled Jalapenos', price: 25 },
            { id: 'add-cheese-extra', name: 'Extra Warm Cheese Tub', price: 40 }
        ]
    },
    {
        id: 'dessert-chocolate-pack',
        name: 'Cadbury Dairy Milk Silk (150g)',
        categoryId: 'desserts',
        categoryName: 'Desserts & Snacks',
        description: 'Velvety smooth milk chocolate bar. Perfect sweet movie companion.',
        price: 175,
        originalPrice: 175,
        image: '/images/couple-combo.jpg',
        foodType: 'veg',
        isAvailable: true,
        prepTimeMinutes: 1,
        calories: 520
    }
];
