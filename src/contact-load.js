const loadContactPage = () => {
    const d = document;
    const content = d.querySelector('#content');
    const createContact = (name, title, phone, email) => {
        const contact = d.createElement('div');
        const contactName = d.createElement('h2');
        contactName.innerHTML = name;
        const contactTitle = d.createElement('p');
        contactTitle.innerHTML = title;
        const contactPhone = d.createElement('p');
        contactPhone.innerHTML = phone;
        const contactEmail = d.createElement('p');
        contactEmail.innerHTML = email;
        contact.appendChild(contactName);
        contact.appendChild(contactTitle);
        contact.appendChild(contactPhone);
        contact.appendChild(contactEmail);
        content.appendChild(contact);
    }
    const contacts = () => { createContact('Papa', 'Head Cook', '123-123-1231', 'veryFakeEmail@realfakeemails.com');};
    return { contacts };
}

export default loadContactPage;