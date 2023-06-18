import './style.css';
import * as component from './components/components.js';
import { menuDiv } from './menu/menu.js';
import { contactsDiv } from './contact/contact.js';
import { introDiv } from './home/intro.js';


//* MASTER
const content = component.div('content');
content.id = 'content';
document.body.append(content);

//* TOP
const nav = component.div('nav');
content.append(nav);
nav.append(component.div('blurBack'));


const homeBtn = component.btn('homeBtn');
homeBtn.textContent = 'HOME';
homeBtn.setAttribute('id', 'activeBtn');
homeBtn.onclick = () => {
    removeActive();
    homeBtn.setAttribute('id', 'activeBtn');
    main.replaceChild(introDiv(), main.firstChild);
};
nav.append(homeBtn);


const menuBtn = component.btn('menuBtn');
menuBtn.textContent = 'MENU';
menuBtn.onclick = () => {
    const pastActive = document.querySelector('#activeBtn');
    const menuSetup = menuDiv();
    if (pastActive.className === 'homeBtn') {
        menuSetup.classList.add('slide-right');
    } else if (pastActive.className === 'contactBtn') {
        menuSetup.classList.add('slide-left');
    }
    removeActive();
    menuBtn.setAttribute('id', 'activeBtn');
    main.replaceChild(menuSetup, main.firstChild);
    main.firstChild.append(component.div('blurBack'));
};
nav.append(menuBtn);


const concatBtn = component.btn('contactBtn');
concatBtn.textContent = 'ABOUT US';
concatBtn.onclick = () => {
    removeActive();
    concatBtn.setAttribute('id', 'activeBtn');
    main.replaceChild(contactsDiv(), main.firstChild);
    main.firstChild.append(component.div('blurBack'));
};
nav.append(concatBtn);

//* MIDDLE
const main = component.div('main');
content.append(main);

main.append(introDiv());


//* BOTTOM
const foot = component.div('foot');
content.append(foot);
foot.append(component.div('blurBack'));

const igBtn = component.btn('igBtn', 'https://www.instagram.com');
foot.append(igBtn);

const fbBtn = component.btn('fbBtn', 'https://www.facebook.com');
foot.append(fbBtn);


const googleBtn = component.btn('googleBtn', 'https://www.google.com');
foot.append(googleBtn);



// Algoritm
const removeActive = () => {
    const pastActive = document.querySelector('#activeBtn');
          pastActive.removeAttribute('id', 'activeBtn')
          
    return pastActive;
}