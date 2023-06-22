// Div element
const componentDiv = (className, id) => {
	const element = document.createElement('div');
	element.classList.add(className);
	if (id) {
		element.setAttribute('id', id);
	}

	return element;
};

// Btn element
const componentBtn = (className, name, url) => {
	const btn = document.createElement('button');
	btn.classList.add(className);
	btn.textContent = name;
	if (url) {
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

// Menu component
const menuComponent = (category, name, list, price) => {
	const component = componentDiv('componentDiv');
	component.append(componentTxt('category', category));
	component.append(componentTxt('name', name));
	component.append(componentTxt('list', list));
	component.append(componentTxt('price', price));

	return component;
};

// Phone component
const phoneComponent = (className, phoneNumber) => {
	const phone = document.createElement('a');
	phone.classList.add(className);
	phone.setAttribute('href', `tel:${phoneNumber}`);
	phone.textContent = phoneNumber;

	return phone;
};

// Mail component
const emailComponent = (className, emailName) => {
	const email = document.createElement('a');
	email.classList.add(className);
	email.setAttribute('href', `mailto:${emailName}`);
	email.textContent = emailName;

	return email;
};

export {
	componentDiv as div,
	componentBtn as btn,
	componentTxt as txt,
	menuComponent as menuCmp,
	phoneComponent as phone,
	emailComponent as email,
};
