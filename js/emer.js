const form = document.getElementById('contact-form');
const contactList = document.getElementById('contacts');
let contacts = []; // Use 'let' instead of 'const' to allow reassignment

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const relationship = document.getElementById('relationship').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    
    // Validate that all fields are filled
    if (!name || !relationship || !phone || !email || !address) {
        alert('Please fill in all the fields.');
        return;
    }
    
    // Create a contact object
    const contact = {
        name,
        relationship,
        phone,
        email,
        address
    };
    
    // Add the contact to the contacts array
    contacts.push(contact);
    
    // Create a list item to display the contact
    const li = document.createElement('li');
    li.innerHTML = `
        <h3>${contact.name}</h3>
        <p>Relationship: ${contact.relationship}</p>
        <p>Phone: ${contact.phone}</p>
        <p>Email: ${contact.email}</p>
        <p>Address: ${contact.address}</p>
    `;
    contactList.appendChild(li);
    
    // Reset the form fields
    form.reset();
});

window.addEventListener('load', () => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
        contacts = JSON.parse(storedContacts);
        contacts.forEach((contact) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h3>${contact.name}</h3>
                <p>Relationship: ${contact.relationship}</p>
                <p>Phone: ${contact.phone}</p>
                <p>Email: ${contact.email}</p>
                <p>Address: ${contact.address}</p>
            `;
            contactList.appendChild(li);
        });
    }
});

window.addEventListener('beforeunload', () => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
});
