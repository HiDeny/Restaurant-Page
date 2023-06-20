import {div, txt, phone, email, btn} from './components.js';

export default function aboutUsDiv() {
	const aboutUsContainer = div('aboutUsContainer');

	// Background
	aboutUsContainer.append(div('blurBack'));

	//* About us section
	const aboutUs = div('aboutus');
	aboutUs.append(txt('category', 'Our Mission'));

	// Mission description
	const missionDesc = div('description');

	const missionP1 = txt(
		'missionCont',
		'Introducing Vegan Food Truck, where sustainability, flavor, and health come together on wheels! Our electric-powered food truck roams the streets, bringing you a delectable array of plant-based dishes.'
	);
	missionDesc.append(missionP1);

	const missionP2 = txt(
		'missionCont',
		'With a focus on reducing waste and promoting eco-conscious practices, we craft our menu using locally sourced, organic ingredients.'
	);
	missionDesc.append(missionP2);

	const missionP3 = txt(
		'missionCont',
		'Join us on this culinary adventure as we serve up delicious, guilt-free meals with a clean and green approach.'
	);
	missionDesc.append(missionP3);

	aboutUs.append(missionDesc);
	aboutUsContainer.append(aboutUs);

	//* Restaurant information
	const restInfo = div('restInfo');

	// Contact
	const contact = div('contact');
	contact.append(txt('category', 'Contact'));

	const contactDesc = div('description');
	contactDesc.append(phone('phoneNum', '+27 123 4567 890'));
	contactDesc.append(email('email', 'info@veganfoodtrucksa.com'));

	contact.append(contactDesc);
	restInfo.append(contact);

	// Location
	const location = div('location');
	location.append(txt('category', 'Finding us is part of the fun!'));

	const locationDesc = div('description');

	locationDesc.append(
		txt(
			'locationCont',
			'Participate in our interactive poll and determine the location of our food truck next week.'
		)
	);

	locationDesc.append(
		txt(
			'locationCont',
			'We love surprising different neighborhoods and bringing the vegan experience directly to you.'
		)
	);

	location.append(locationDesc);

	location.append(
		btn(
			'locationPoll',
			'WHERE NEXT?',
			'https://take.quiz-maker.com/poll4850209x621c20Ea-151'
		)
	);

	restInfo.append(location);

	aboutUsContainer.append(restInfo);

	return aboutUsContainer;
}
