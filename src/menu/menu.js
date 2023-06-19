import * as component from '../components/components.js';

export const menuDiv = () => {
	// Main
	const menu = component.div('menu');

	// Starter
	const starter = component.menuCmp(
		'Starter',
		'Grilled Portobello Mushrooms & Chimichurri Sauce',
		[
			'Portobello mushrooms',
			' fresh herbs',
			' garlic',
			' red wine vinegar',
			' olive oil',
			' lemon juice',
			' chili flakes',
			' salt',
			' pepper',
		],
		'R 50'
	);
	menu.append(starter);

	// Main
	const main = component.menuCmp(
		'Main',
		'Chickpea and Vegetable Bunny Chow',
		[
			'Chickpeas',
			' mixed vegetables (potatoes, carrots, and peas)',
			' onion',
			' garlic',
			' ginger',
			' curry powder',
			' tomato',
			' vegetable broth',
			' fresh cilantro',
			' bread loaf',
			' olive oil',
			' salt',
			' pepper',
		],
		'R 65'
	);
	menu.append(main);

	// Desert
	const desert = component.menuCmp(
		'Desert',
		'Rooibos-infused Chocolate Brownies',
		[
			'Flour',
			' cocoa powder',
			' sugar',
			' vegan butter',
			' flaxseed meal',
			' water',
			' vanilla extract',
			' brewed rooibos tea',
			' dark chocolate chunks',
		],
		'R 50'
	);
	menu.append(desert);

	return menu;
};
