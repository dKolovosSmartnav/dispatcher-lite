export type Contact = {
    name: string, 
    contactId: Int32Array,
    contactOrganization: string,
    hasUnreadMessages: boolean
}

export interface contactRepository{ 
    fetchContacts(): Promise<Contact[]>
    fetchContact(contactId: Int32Array): Promise<Contact>
}