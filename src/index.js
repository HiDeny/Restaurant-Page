import './style.css';
// import printME from './menu/menu.js';

function component(name) {
    const element = document.createElement('div');

    element.innerHTML = 'Hello World!';
    element.classList.add(name);


    return element;
}

document.body.append(component());