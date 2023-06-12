import './style.css';
import printME from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = 'Hello World!';
    element.classList.add('hello');

    btn.textContent = 'Click Me!';
    btn.onclick = printME;

    element.appendChild(btn);

    return element;
}

document.body.append(component());