import './style.css';
import * as component from './components/components.js';
import { menuDiv } from './components/menu.js';
import { contactsDiv } from './components/aboutus.js';
import { introDiv } from './components/intro.js';

//* MASTER
const content = component.div('content');
content.id = 'content';
document.body.append(content);

//* TOP


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
