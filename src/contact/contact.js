import * as component from '../components/components.js';

export const contactsDiv = () => {
	// Main div
	const contacts = component.div('contacts');
    // contacts.classList.add('slide-right');

	// About us section
	const aboutUs = component.div('aboutus');
	contacts.append(aboutUs);

	// Mission
	const mission = component.txt('category', 'Our Mission');
	const missionDesc = component.div('description');

	const missionPt1 = component.txt(
		'missionCont',
		'Introducing Vegan Food Truck, where sustainability, flavor, and health come together on wheels! Our electric-powered food truck roams the streets, bringing you a delectable array of plant-based dishes.'
	);
	missionDesc.append(missionPt1);

	const missionPt2 = component.txt(
		'missionCont',
		'With a focus on reducing waste and promoting eco-conscious practices, we craft our menu using locally sourced, organic ingredients.'
	);
	missionDesc.append(missionPt2);

	const missionPt3 = component.txt(
		'missionCont',
		'Join us on this culinary adventure as we serve up delicious, guilt-free meals with a clean and green approach.'
	);
	missionDesc.append(missionPt3);

	aboutUs.append(mission);
	aboutUs.append(missionDesc);

	// Restaurant
	const restInfo = component.div('restInfo');
	contacts.append(restInfo);

	// Location
	const location = component.div('location');
	location.append(component.txt('category', 'Finding us is part of the fun!'));

	const locationDesc = component.div('description');

	locationDesc.append(
		component.txt(
			'locationCont',
			'Participate in our interactive poll and determine the location of our food truck next week.'
		)
	);

	locationDesc.append(
		component.txt(
			'locationCont',
			'We love surprising different neighborhoods and bringing the vegan experience directly to you.'
		)
	);

	location.append(locationDesc);
	location.append(
		component.btn(
			'locationPoll',
			'https://take.quiz-maker.com/poll4850209x621c20Ea-151',
			'WHERE NEXT?'
		)
	);

	// const openingHours = component.div('hours');
	// openingHours.append(component.txt('category','Opening Hours'));
	// location.append(openingHours);

	location.classList.add('location');
	restInfo.append(location);

	// Contacts, Phone, email,
	const contact = component.menuCmp('Contact', 'Phone', 'email');
	restInfo.append(contact);

	return contacts;
};
