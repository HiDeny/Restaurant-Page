import { div, txt } from './components.js';

export default function introDiv() {
	const introDiv = div('intro');

	const logoPt1 = txt('logoPt1', 'Vegan');
	introDiv.append(logoPt1);

	const logoPt2 = txt('logoPt2', 'Food');
	introDiv.append(logoPt2);

	const logoPt3 = txt('logoPt3', 'Truck');
	introDiv.append(logoPt3);

	return introDiv;
};
