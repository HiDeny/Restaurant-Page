import * as component from '../components/components.js';


export const menuDiv = () => {
    // Main
    const menu = component.div('menu');    

    // Starter
    const starter = component.menuCmp('Starter', 'Starter Name', ['Carrot', 'Apple','Potato']);
    menu.append(starter);

    // Main
    const main = component.menuCmp('Main', 'Main Name', ['Pasta', 'Tomato','Basil']);
    menu.append(main);

    // Desert
    const desert = component.menuCmp('Desert', 'Desert Name', ['Coconut', 'Banana','Love']);
    menu.append(desert);

    return menu;
}

