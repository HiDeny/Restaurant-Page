// Div element
const componentDiv = (className) => {
	const element = document.createElement('div');

	element.classList.add(className);

	return element;
};

// Btn element
const componentBtn = (className, url) => {
	const btn = document.createElement('button');
	btn.classList.add(className);
	if(url) {
		const href = document.createElement('a');
		href.setAttribute('href', url);
		href.append(btn);
		return href;
	} else {
		return btn;
	}
};

// Text component
const componentTxt = (className, textDisplayed) => {
	const txt = document.createElement('p');

	txt.classList.add(className);
	txt.textContent = textDisplayed;

	return txt;
};

const menuComponent = (type, name, ingredients) => {
    const component = componentDiv('menuComponent');
    component.append(componentTxt('Type', type));
    component.append(componentTxt('Name', name))
    component.append(componentTxt('Ingredients', ingredients))

    return component;
}

export { componentDiv as div, componentBtn as btn, componentTxt as txt, menuComponent as menuCmp };
