import { Contact, contactRepository } from "@/domain/repositories/contactRepository";
import { localContactRepository } from "@/data/local/localContactRepository";
import { remoteContactRepository } from "@/data/remote/remoteContactRepository";

export class contactRepositoryImpl implements contactRepository{

    private local = new localContactRepository();
    private remote = new remoteContactRepository();

    async fetchContacts(): Promise<Contact[]> {
        try{
            let localContacts = await this.local.fetchContacts();
            let remoteContacts = await this.remote.fetchContacts();
            let contacts = [...localContacts, ...remoteContacts];
            return contacts;
        }catch(error){
            console.log('Unable to fetch contacts');
            return [];
        }
    }

    async fetchContact(contactId: Int32Array): Promise<Contact> {
        let contact = await this.local.fetchContact(contactId);
        if(contact){
            return contact;
        }else{
            contact = await this.remote.fetchContact(contactId);
            if( contact ) return contact;
            else throw new Error("Contact not found for given id.");
        }
    }

}