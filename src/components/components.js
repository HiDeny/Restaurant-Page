// Div element
const componentDiv = (className) => {
	const element = document.createElement('div');

	element.classList.add(className);

	return element;
};

// Btn element
const componentBtn = (className, url, name) => {
	const btn = document.createElement('button');
	btn.classList.add(className);
	btn.textContent = name;
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

const menuComponent = (category, name, list, price) => {
    const component = componentDiv('componentDiv');
    component.append(componentTxt('category', category));
    component.append(componentTxt('name', name))
    component.append(componentTxt('list', list))
    component.append(componentTxt('price', price))


    return component;
}

export { componentDiv as div, componentBtn as btn, componentTxt as txt, menuComponent as menuCmp };
