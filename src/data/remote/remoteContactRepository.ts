import { Contact, contactRepository } from "@/domain/repositories/contactRepository";

export class remoteContactRepository implements contactRepository {

    fetchContacts(): Promise<Contact[]> {
        return new Promise(resolve => {
            resolve(remoteContacts);
        })
    }
    fetchContact(contactId: Int32Array): Promise<Contact> {
        return new Promise(resolve => {
            remoteContacts.forEach(contact => {
                if(contact.contactId === contactId) resolve(contact);
            }
            )
        })
    }

}

const remoteContacts = [
    {
        name: 'Contact4',
        contactId: new Int32Array(4),
        contactOrganization: 'SmartnavRemote',
        hasUnreadMessages: true
    },
    {
        name: 'Contact5',
        contactId: new Int32Array(5),
        contactOrganization: 'SmartnavRemote',
        hasUnreadMessages: false
    },
    {
        name: 'Contact6',
        contactId: new Int32Array(6),
        contactOrganization: 'SmartnavRemote',
        hasUnreadMessages: true
    }
];