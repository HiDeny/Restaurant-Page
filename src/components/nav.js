import { div, btn } from './components.js';
import introDiv from './intro.js';
import menuDiv from './menu.js';
import aboutUsDiv from './aboutus.js';


export default function nav() {
	const nav = div('nav');
	nav.append(div('blurBack'));
    
    // DOM
	nav.append(homeBtnLoad());
	nav.append(menuBtnLoad());
	nav.append(AboutBtnLoad());

	return nav;
}

// Home Button
function homeBtnLoad() {

	// Home button
	const homeBtn = btn('homeBtn', 'HOME');
	homeBtn.setAttribute('id', 'activeBtn');

	homeBtn.onclick = () => {
		handleClickHome();
	};

	// Handle Click
	const handleClickHome = () => {
		const introSetup = introDiv();

		const currentlyActive = document.querySelector('#activeBtn').className;
        
		if (currentlyActive !== 'homeBtn') {
			introSetup.classList.add('slide-left');
		} else {
            introSetup.classList.remove('slide-left');
        }
		removeActive();

		homeBtn.setAttribute('id', 'activeBtn');
        const main = document.querySelector('.main');
		main.replaceChild(introSetup, main.firstChild);
	};

	return homeBtn;
}


// Menu Button
function menuBtnLoad() {
	const menuSetup = menuDiv();

	// Menu button
	const menuBtn = btn('menuBtn', 'MENU');

	menuBtn.onclick = () => {
		handleClickMenu();
	};

	// Handle Click
	const handleClickMenu = () => {
		const currentlyActive = document.querySelector('#activeBtn').className;
        
		if (currentlyActive === 'homeBtn') {
			menuSetup.classList.add('slide-right');
		} else if (currentlyActive === 'AboutBtn') {
			menuSetup.classList.add('slide-left');
		} else {
            menuSetup.classList.remove('slide-right');
            menuSetup.classList.remove('slide-left');
        }
		removeActive();

		menuBtn.setAttribute('id', 'activeBtn');
        const main = document.querySelector('.main');
		main.replaceChild(menuSetup, main.firstChild);
	};


	return menuBtn;
}

// About Us Button
function AboutBtnLoad() {
	const aboutSetup = aboutUsDiv();

	const AboutBtn = btn('AboutBtn', 'ABOUT US');

	AboutBtn.onclick = () => {
		handleClickAbout();
	};

	// Handle Click
	const handleClickAbout = () => {
		const currentlyActive = document.querySelector('#activeBtn').className;

		if (currentlyActive !== 'AboutBtn') {
			aboutSetup.classList.add('slide-right');
		} else {
            aboutSetup.classList.remove('slide-right');
        }
		removeActive();

		AboutBtn.setAttribute('id', 'activeBtn');
        const main = document.querySelector('.main');
		main.replaceChild(aboutSetup, main.firstChild);
	};


	return AboutBtn;
}

// Remove active id
const removeActive = () => {
	const currentlyActive = document.querySelector('#activeBtn');
	currentlyActive.removeAttribute('id', 'activeBtn');

	return currentlyActive;
};
