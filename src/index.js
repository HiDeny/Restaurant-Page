import './style.css';
import { div } from './components/components.js';
import nav from './components/nav.js';
import main from './components/middle.js';
import foot from './components/foot.js';


//* MASTER
const content = div('content', 'content');
document.body.append(content);

//* TOP
content.append(nav());

//* MIDDLE
content.append(main());

//* BOTTOM
content.append(foot());
