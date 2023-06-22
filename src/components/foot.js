import { div, btn } from './components.js';

export default function foot() {
	const foot = div('foot');
	foot.append(div('blurBack'));

	const igBtn = btn('igBtn', '', 'https://www.instagram.com');
	foot.append(igBtn);

	const fbBtn = btn('fbBtn', '', 'https://www.facebook.com');
	foot.append(fbBtn);

	const googleBtn = btn('googleBtn', '', 'https://www.google.com');
	foot.append(googleBtn);

	return foot;
}
