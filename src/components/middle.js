import { div } from './components.js';
import introDiv from './intro.js';

export default function main() {
    const main = div('main');

    main.append(introDiv());

    return main;
}


