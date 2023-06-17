import * as component from '../components/components.js';

export const contactsDiv = () => {
    // Main div
    const contacts = component.div('contacts');    

    // Location
    const location = component.menuCmp('Location', 'Some Location', 'Opening Hours');
    contacts.append(location);

    // Contacts, Phone, email, 
    const contact = component.menuCmp('Contact', 'Phone', 'email');
    contacts.append(contact);

    // Reservation
    const reservation = component.btn('reservationBtn');
    reservation.textContent = 'Reservation';
    contacts.append(reservation);


    return contacts;
}
