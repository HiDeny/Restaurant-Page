// Div element
const componentDiv = (className) => {
	const element = document.createElement('div');

	element.classList.add(className);

	return element;
};

// Btn element
const componentBtn = (className) => {
	const btn = document.createElement('button');

	btn.classList.add(className);

	return btn;
};

// Text component
const componentTxt = (className) => {
	const txt = document.createElement('p');

	txt.classList.add(className);

	return txt;
};

export { componentDiv as div, componentBtn as btn, componentTxt as txt };
