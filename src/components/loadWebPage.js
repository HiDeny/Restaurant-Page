import 'normalize.css';
import '../style.css';
import { div } from './components.js';
import nav from './nav.js';
import main from './middle.js';
import foot from './foot.js';

export default function websiteLoader() {
    const content = div('content', 'content');
    document.body.append(content);

    content.append(nav());
    content.append(main());
    content.append(foot());

    return content;
}

