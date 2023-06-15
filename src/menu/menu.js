import * as component from '../components/components.js';



export const menuDiv = () => {
    // Main
    const menu = component.div('menu');    

    // Starter
    const menuStart = component.div('menuStart');
    menuStart.textContent = 'Starter';
    menu.append(menuStart);

    // Main
    const menuMain = component.div('menuMain');
    menuMain.textContent = 'Main';
    menu.append(menuMain);

    // Desert
    const menuDes = component.div('menuDes');
    menuDes.textContent = 'Desert';
    menu.append(menuDes);

    return menu;
}

