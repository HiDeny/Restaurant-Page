import * as component from './components.js';

export default function navbar() {
	const nav = component.div('nav');
	nav.append(component.div('blurBack'));

	// Home button
	const homeBtn = component.btn('homeBtn', 'HOME');
	homeBtn.setAttribute('id', 'activeBtn');

	homeBtn.onclick = () => {
		handleClickHome();
	};

	nav.append(homeBtn);

	// Menu button
	const menuBtn = component.btn('menuBtn', 'MENU');

	menuBtn.onclick = () => {
		handleClickMenu();
	};

	nav.append(menuBtn);

	// About us button
	const AboutBtn = component.btn('AboutBtn', 'ABOUT US');

	AboutBtn.onclick = () => {
		handleClickAbout();
	};

	nav.append(AboutBtn);

	return nav;
}


// DOM
const main = document.querySelector('.main');
const introSetup = introDiv();
const menuSetup = menuDiv();
const contactsSetup = contactsDiv();

// Handle clicks
const handleClickHome = () => {
	const currentlyActive = document.querySelector('#activeBtn');
	if (currentlyActive.className !== 'homeBtn') {
		introSetup.classList.add('slide-left');
	}
	removeActive();

	homeBtn.setAttribute('id', 'activeBtn');
	main.replaceChild(introSetup, main.firstChild);
};

const handleClickMenu = () => {
	const currentlyActive = document.querySelector('#activeBtn');
	if (currentlyActive.className === 'homeBtn') {
		menuSetup.classList.add('slide-right');
	} else if (currentlyActive.className === 'AboutBtn') {
		menuSetup.classList.add('slide-left');
	}
	removeActive();

	menuBtn.setAttribute('id', 'activeBtn');
	main.replaceChild(menuSetup, main.firstChild);
};

const handleClickAbout = () => {
	const currentlyActive = document.querySelector('#activeBtn');
	if (currentlyActive.className !== 'AboutBtn') {
		contactsSetup.classList.add('slide-right');
	}
	removeActive();

	AboutBtn.setAttribute('id', 'activeBtn');
	main.replaceChild(contactsSetup, main.firstChild);
};

// Remove active id
const removeActive = () => {
	const currentlyActive = document.querySelector('#activeBtn');
	currentlyActive.removeAttribute('id', 'activeBtn');

	return currentlyActive;
};
