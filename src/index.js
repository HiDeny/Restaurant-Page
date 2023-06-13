import './style.css';
import * as component from './components/components.js';

//! PLAN
//* MASTER
const content = component.div('content');
content.id = 'content';
document.body.append(content);

//* TOP
const nav = component.div('nav');
content.append(nav);

const navBack = component.div('navBack');
nav.append(navBack);

const homeBtn = component.btn('homeBtn');
homeBtn.textContent = 'HOME';
nav.append(homeBtn);


const menuBtn = component.btn('menuBtn');
menuBtn.textContent = 'MENU';
nav.append(menuBtn);


const concatBtn = component.btn('contactBtn');
concatBtn.textContent = 'CONTACT';
nav.append(concatBtn);

//* MIDDLE
const main = component.div('main');
content.append(main);

const logo = component.txt('logo');
logo.textContent = 'Vegan Food Truck';
main.append(logo);


//* BOTTOM
const foot = component.div('foot');
content.append(foot);

const footBack = component.div('footBack');
foot.append(footBack);

const igBtn = component.btn('igBtn');
igBtn.textContent = 'Instagram';
foot.append(igBtn);

const fbBtn = component.btn('fbBtn');
fbBtn.textContent = 'Facebook';
foot.append(fbBtn);


const googleBtn = component.btn('googleBtn');
googleBtn.textContent = 'Google';
foot.append(googleBtn);