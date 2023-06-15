import './style.css';
import * as component from './components/components.js';
import { menuDiv } from './menu/menu.js'


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
homeBtn.onclick = () => {
    main.replaceChild(intro, main.firstChild);
};
nav.append(homeBtn);


const menuBtn = component.btn('menuBtn');
menuBtn.textContent = 'MENU';
menuBtn.onclick = () => {
    main.replaceChild(menuDiv(), main.firstChild);
    main.firstChild.append(component.div('blurBack'));
};
nav.append(menuBtn);


const concatBtn = component.btn('contactBtn');
concatBtn.textContent = 'CONTACT';
nav.append(concatBtn);

//* MIDDLE
const main = component.div('main');
content.append(main);

const intro = component.div('intro');
main.append(intro);

const logoPt1 = component.txt('logoPt1');
logoPt1.textContent = 'Vegan';
intro.append(logoPt1);

const logoPt2 = component.txt('logoPt2');
logoPt2.textContent = 'Food';
intro.append(logoPt2);

const logoPt3 = component.txt('logoPt3');
logoPt3.textContent = 'Truck';
intro.append(logoPt3);


//* BOTTOM
const foot = component.div('foot');
content.append(foot);
foot.append(component.div('blurBack'));

const igBtn = component.btn('igBtn');
igBtn.textContent = 'Instagram';
foot.append(igBtn);

const fbBtn = component.btn('fbBtn');
fbBtn.textContent = 'Facebook';
foot.append(fbBtn);


const googleBtn = component.btn('googleBtn');
googleBtn.textContent = 'Google';
foot.append(googleBtn);