import * as component from '../components/components.js';

export const contactsDiv = () => {
    // Main div
    const contacts = component.div('contacts');    

    // About us section
    const aboutUs = component.div('aboutus');
    contacts.append(aboutUs);
    
    // Mission
    const mission = component.txt('mission', 'Our Mission');
    const missionDesc = component.txt('description', '')
    aboutUs.append(mission);
    
    // Restaurant
    const restInfo = component.div('restInfo');
    contacts.append(restInfo);
    // Location
    const location = component.menuCmp('Location', 'Some Location', 'Opening Hours');
    location.classList.add('location');
    restInfo.append(location);

    // Contacts, Phone, email, 
    const contact = component.menuCmp('Contact', 'Phone', 'email');
    restInfo.append(contact);


    // Reservation
    const reservationDiv = component.div('reservation');
    contacts.append(reservationDiv);

    const reservation = component.btn('reservationBtn');
    reservation.textContent = 'Reservation';
    reservationDiv.append(reservation);


    return contacts;
}
