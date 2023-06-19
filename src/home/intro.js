import * as component from '../components/components.js';

export const introDiv = () => {
	const introDiv = component.div('intro');

	const logoPt1 = component.txt('logoPt1');
	logoPt1.textContent = 'Vegan';
	introDiv.append(logoPt1);

	const logoPt2 = component.txt('logoPt2');
	logoPt2.textContent = 'Food';
	introDiv.append(logoPt2);

	const logoPt3 = component.txt('logoPt3');
	logoPt3.textContent = 'Truck';
	introDiv.append(logoPt3);

	return introDiv;
};
