const recipes = [
	{
	  author: 'Provo High Culinary Students',
	  cookTime: '30 Min',
	  description: 'Savory waffles made with Sweet potato with a hint of Ginger',
	  image: './images/sweet-potato-waffle-md.jpg',
	  name: 'Sweet Potato Waffles',
	  prepTime: '30 Min',
	  recipeInstructions: [
		'Add the egg yolks, oil, salt, cayenne, sugar, ginger, shallots, sweet potatoes (steam and mash before), and milk and mix well.',
		'Next add the cornmeal, chives, and flour and baking powder',
		'Whip the egg whites until stiff and fold in',
		'Cook until golden brown in a waffle iron. Serve with butter and Wilted Greens or Honey.'
	  ],
	  recipeYield: '6 waffles',
	  rating: 4
	},
	{
		author: 'Shane Thompson',
		cookTime: '20 min',
		description: 'Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully.',
		image: './images/escalopes-de-poulet-a-la-creme.webp',
		name: 'Escalope de Poulet a la Creme with steamed green beans (Chicken with Cream)',
		prepTime: '10 min',
		recipeInstructions: [
		  'Add 1 1/2 cups of water to a pan and bring to a boil. Add the rice and reduce heat to low and simmer for 10-15 minutes or until all the moisture is gone.',
		  'Cube chicken then cook over medium-high heat in a fry pan, add the mushrooms about halfway through (10 minutes).',
		  'Pour in cream, mustard, and salt and pepper. Stir. On medium heat, simmer until it thickens (5 minutes).',
		  'While preparing sauce: wash the beans, then trim the ends and snap (or cut) into 2-inch lengths. In a sauce pan with a colander add about 1 cup water and steam the beans (10-15 minutes).',
		  'Serve sauce over rice, with the green beans on the side.'
		],
		recipeYield: '3 servings',
		rating: 4.5,
		tags: ['Chicken', 'Entree'],
		url: '',
		isBasedOn: '',
		datePublished: ''
	},
	{
		author: 'Shane Thompson',
		cookTime: '30 min',
		description: 'Easy and delicious oven roasted potatoes that go great with almost anything.',
		image: './images/roasted-potatoes.webp',
		name: 'Oven Roasted Potato Slices',
		prepTime: '10 min',
		recipeInstructions: [
		  'Preheat oven to 400 deg F.',
		  'Wash and thinly slice the potatoes (I usually slice the potato in half lengthwise, then thinly slice the halves, again lengthwise).',
		  'Mix together the oil, salt, pepper, Italian seasoning, and hot sauce.',
		  'Toss the potatoes in the spice mixture to evenly coat, then spread over a baking sheet.',
		  'Bake for 30 min or until the desired level of crispiness is achieved.'
		],
		recipeYield: '4 servings',
		rating: 4,
		tags: ['Potatoes', 'side'],
		url: '',
		isBasedOn: '',
		datePublished: '2018-09-19'
	},
	{
		author: 'Shane Thompson',
		cookTime: '20 min',
		description: 'Black beans and tomatoes served over a bed of rice. Top with cheese and scoop up with tortilla chips for maximum enjoyment.',
		image: './images/black-beans-and-rice.jpg',
		name: 'Black Beans and Rice',
		prepTime: '10 min',
		recipeInstructions: [
		  'Add 4 cups water to a saucepan and bring to a boil. Add rice, stir, cover, and reduce heat to low. Cook until moisture is gone. (20-30 minutes)',
		  'In another saucepan, heat the oil and add the diced onion and garlic. Cook until tender.',
		  'Stir in the drained black beans, undrained tomatoes, and cayenne.',
		  'Bring to a boil, then reduce heat and simmer uncovered for 15 minutes.',
		  'Serve over rice, topped with grated cheese and tortilla chips.'
		],
		recipeYield: '4 servings',
		rating: 3,
		tags: ['Southwest', 'entree'],
		url: '',
		isBasedOn: '',
		datePublished: '2018-09-19'
	},
	{
		author: 'Shane Thompson',
		cookTime: '30 min',
		description: 'Quick and easy Chicken curry recipe made with easy to find ingredients.',
		image: './images/chicken-curry.webp',
		name: 'Chicken Curry',
		prepTime: '10 min',
		recipeInstructions: [
		  'Add 3 cups water to a saucepan and bring to a boil. Add rice, stir, cover, and reduce heat to low. Cook until moisture is gone. (15-20 minutes)',
		  'Cook bacon until crisp, drain reserving 1 Tbsp of bacon drippings, crumble bacon and set aside.',
		  'Cook chicken and cube.',
		  'Blend flour into bacon drippings then stir in the milk until the flour is well mixed. Stir in water, applesauce, tomato paste, curry, and bullion, and garlic.',
		  'Bring to a boil, then reduce heat and simmer until rice is done.',
		  'Before serving add crumbled bacon, chicken and stir in sour cream. Serve over rice.',
		  'Can add condiments if desired: fried potatoes, raisins, toasted coconut, chutney, diced peppers, almonds, cashews.'
		],
		recipeYield: '5 servings',
		rating: 5,
		tags: ['chicken', 'entree', 'Indian'],
		url: '',
		isBasedOn: '',
		datePublished: '2018-09-19'
	},
	{
		author: 'Shane Thompson',
		cookTime: '11 min',
		description: 'Delicious soft chocolate chip cookies with coconut.',
		image: './images/chocolate-chip-cookies.jpg',
		name: 'Chocolate Chip Cookies',
		prepTime: '15 min',
		recipeInstructions: [
		  'Preheat oven to 350F.',
		  'Cream butter, white sugar, and eggs together.',
		  'Add brown sugar, salt, baking soda, and vanilla. Mix well.',
		  'Add flour, chocolate chips, and coconut. Mix well.',
		  'Place on baking sheet in rows of 1-1.5 inch balls of dough.',
		  'Bake for 11-12 minutes.'
		],
		recipeYield: '8 dozen',
		rating: 5,
		tags: ['dessert'],
		url: '',
		isBasedOn: '',
		datePublished: '2018-09-19'
	},
	{
		author: 'Ester Kocht',
		url: 'https://www.esterkocht.com/german-gooseberry-cake-with-vanilla-cream-and-crumble/',
		isBasedOn: '',
		cookTime: '45 min',
		datePublished: '2023-10-10',
		tags: ['dessert', 'German'],
		description: "This gooseberry cake with crumble is easy to follow, a bit tart and not too sweet. Made up of a cake base, filled with fresh gooseberries and vanilla cream and finished off with crumble that's flavored with vanilla. A must have recipe for gooseberry lovers!!",
		image: './images/german-gooseberry-cake.jpg',
		recipeIngredient: [
		  'For the Cake Base:',
		  '180 g (1 ½ cups/ 6.3 oz) plain flour',
		  '2 medium eggs',
		  '100 g (3 ½ oz) butter soft',
		  '2 teaspoons vanilla sugar',
		  '60 g (about 1/3 cup/ 2.1 oz) sugar',
		  '2 ½ teaspoons baking powder',
		  'For the Vanilla Cream:',
		  '250 ml (1 cup/ 8 ½ fl. oz) milk',
		  '40 (⅓ cup/ 1.4 oz) corn flour cornstarch',
		  '2 tablespoons sugar',
		  '1 tablespoon vanilla sugar',
		  '200 g (7.1 oz) sour cream',
		  'For the struesel (crumble):',
		  '250 g (2 cups + 1 tablespoon/ 8.8 oz) plain flour (all purpose flour)',
		  '2 tablespoons vanilla sugar',
		  '175 g (about ¾ cup/ 6.2 oz) butter soft',
		  '100 g (½ cup/ 3 ½ oz) sugar',
		  'You will also need:',
		  '550 g (1.2 lbs) gooseberries washed and stems and brown appendage removed OR',
		  '550 g (1.2 lbs) raspberries'
		],
		name: 'Gooseberry cake with vanilla cream and crumble',
		prepTime: '30 min',
		recipeInstructions: [
		  'Combine the flour, butter, sugar and eggs in a bowl and beat with a whisk until you have a smooth dough. Transfer the batter to a 26 cm(10 inch) spring-form (or cake tin with removable base) lined with a parchment paper at the bottom and greased on the side. Smooth with a spoon or spatula and set aside.',
		  "In the same bowl that you've used to make the cake base combine sugar, butter and flour. Using your hands mix all the ingredients together until small crumbles start to form. Set aside as well. Then preheat the oven to 180 ° C (356 °F), with both top and bottom heat.",
		  'Now in a small pot combine milk, sugar and cornstarch (corn flour). Keep stirring constantly until it starts to bubble and has thickened. Remove from the heat and let cool for 2 to 3 minutes. In the meantime scatter gooseberries over the base. Add sour cream to the cream that you previously made and whisk. Spread the vanilla cream on top of the gooseberries and sprinkle the crumble evenly over the top and bake for 45 minutes or until the crumbles are lightly golden brown. Remove from the oven and let cool for few minutes. Serve it with whipped cream and enjoy!'
		],
		recipeYield: '12 servings',
		rating: 5
	},
	{
		author: 'AllRecipes',
		url: 'https://www.allrecipes.com/recipe/12409/apple-crisp-ii/',
		isBasedOn: '',
		cookTime: '45 min',
		datePublished: '2023-10-10',
		tags: ['dessert'],
		description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
		image: './images/apple-crisp.jpg',
		recipeIngredient: [
		  '10 C apples, cored and sliced',
		  '1 C white sugar',
		  '1 Tbsp white flour',
		  '1 tsp ground cinnamon',
		  '3 Tbsp water',
		  '1 C rolled oats',
		  '1 C Flour',
		  '1 C Brown sugar',
		  '1/4 tsp baking powder',
		  '1/4 tsp baking soda',
		  '1/2 C butter, melted'
		],
		name: 'Apple Crisp',
		prepTime: '30 min',
		recipeInstructions: [
		  'Preheat the oven to 350 degrees F (175 degrees C).',
		  'Place sliced apples in a 9x13-inch baking dish. Mix white sugar, 1 tablespoon flour, and cinnamon together; sprinkle over apples. Pour water evenly over apples.',
		  'Combine oats, 1 cup flour, brown sugar, baking powder, and baking soda in a large bowl. Add melted butter and mix with a fork until crumbly; sprinkle evenly over apple mixture.',
		  'Bake in the preheated oven until top is golden brown and apples are bubbling around the edges, about 45 minutes.'
		],
		recipeYield: '12 servings',
		rating: 4
	}
];

export default recipes