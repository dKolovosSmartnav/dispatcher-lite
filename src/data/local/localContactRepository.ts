import { Contact, contactRepository } from "@/domain/repositories/contactRepository";

export class localContactRepository implements contactRepository {

    fetchContacts(): Promise<Contact[]> {
        return new Promise(resolve => {
            resolve(localContacts);
        })
    }
    fetchContact(contactId: Int32Array): Promise<Contact> {
        return new Promise(resolve => {
            localContacts.forEach(contact => {
                if(contact.contactId === contactId) resolve(contact);
            }
            )
        })
    }

}

const localContacts = [
    {
        name: 'Contact1',
        contactId: new Int32Array(1),
        contactOrganization: 'SmartnavLocal',
        hasUnreadMessages: false
    },
    {
        name: 'Contact2',
        contactId: new Int32Array(2),
        contactOrganization: 'SmartnavLocal',
        hasUnreadMessages: false
    },
    {
        name: 'Contact3',
        contactId: new Int32Array(3),
        contactOrganization: 'SmartnavLocal',
        hasUnreadMessages: true
    }
];